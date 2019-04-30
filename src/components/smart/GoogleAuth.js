import React, { Component } from 'react';
import { connect } from 'react-redux';
import signIn from 'actions/signIn';
import signOut from 'actions/signOut';

class GoogleAuth extends Component {
  constructor(props) {
    super(props)
    // this.state = { isSignedIn: null };
    this.onAuthChange = this.onAuthChange.bind(this)
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  };

  onAuthChange(isSignedIn) {
    console.log(isSignedIn)
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    const { signIn, signOut } = this.props;
    // If we didn't 'bind' this function to the class in the constructor lifecycle method above, or write it as an ES6 arrow function, we would not be able to access the props (in this case, the action creators from redux) or the variable `this.auth` that is initialized and assigned in the `componentDidMount` lifecycle method
    console.log(this.auth.currentUser.get().getId())
    isSignedIn ? signIn(this.auth.currentUser.get().getId()) : signOut();
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
    const { isSignedIn } = this.props
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
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

const mapStateToProps = (state) => {
  console.log(state)
  const { isSignedIn } = state.auth
  return {
    isSignedIn
  }
}

export default connect( mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth)
