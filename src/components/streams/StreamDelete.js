import React, { Component } from 'react';
import Modal from 'components/dumb/Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchStream from 'actions/fetchStream';
import deleteStream from 'actions/deleteStream';
import history from '../../history';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDismiss = () => {
    history.push('/');
  };

  renderActions = () => {
    const { id } = this.props.match.params
    // ^ ES6 Destructuring

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
    // `<button onClick={this.deleteStream(id)} ...>Delete</button> will call the `deleteStream` action creator right when the button is rendered, instead of waiting to be clicked on
    // Not sure why this ^ is, but to prevent such behavior we need to compose the callback using the syntax above

  };

  renderContent = () => {
    if (!this.props.stream) {
      return (
        'Are you sure you want to delete this stream?'
      );
    };
    return (
      `Are you sure you want to delete with title: ${this.props.stream.title}`
    )
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

// Notes:

// React Fragment

// Essentially a JSX looking element that allows us to return multiple elements (i.e., assign multiple elements to a single variable like how we have above with `actions`), but when it gets rendered to the screen it does not actually produce any HTML

// Can be thought of as an invisible element that has no impact on the DOM

// Used to circumvent issues (mostly around CSS styling) arising when you want to return multiple elements to a div, but React forces you to wrap the elements in another div, in essence forcing you to place your elements in a "div within a div"

// You now do not need to have a "div within a div" with React Fragments, so you do not need to do what is below

{/* <div>
  <button className="ui button negative">Delete</button>
  <button className="ui button">Cancel</button>
</div> */}

// <React.Fragment></React.Fragment> can also be written simply as <></>, but some linters out there can flag this as invalid syntax
