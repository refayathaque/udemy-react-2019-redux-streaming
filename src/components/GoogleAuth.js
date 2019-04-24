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

  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="googleIcon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui green google button" onClick={this.onSignIn}>
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
