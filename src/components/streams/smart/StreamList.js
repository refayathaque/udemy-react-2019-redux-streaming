import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchStreams from 'actions/fetchStreams';

class StreamList extends Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchStreams()
  };

  renderAdmin(userId) {
    if (userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream.userId)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </div>
         </div>
      );
    });
  };

  renderCreate() {
    if(this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      )
    };
  };

  render() {
    console.log(this.props.streams)
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    // `Object.values` is a built in JavaScript function which takes an object as an argument, and then all the objects inside that object are pulled out and inserted into an array
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);