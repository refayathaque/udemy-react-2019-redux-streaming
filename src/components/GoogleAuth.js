import React, { Component } from 'react';

class GoogleAuth extends Component {
  constructor(props) {
    super(props)
    this.state = { isSignedIn: null };
    this.onAuthChange = this.onAuthChange.bind(this)
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  };

  onAuthChange() {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    console.log(this.state)
  }

  onSignInClick = () => {
    this.auth.signIn()
  }
  // ES6 Arrow Functions can reference variables initialized anywhere in this class component, `this.auth` was initialized and assigned the value `window.gapi.auth2.getAuthInstance().signIn()` in the `componentDidMount` lifecycle method above. If we were to refactor the function above to pre-ES6 syntax (as is below), we could not reference the `this.auth` variable

  // onSignInClick() {
  //   window.gapi.auth2.getAuthInstance().signIn()
  // }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="googleIcon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui green google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In
        </button>
      )
    };
  };

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  };
};

export default GoogleAuth;
