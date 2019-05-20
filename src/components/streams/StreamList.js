import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchStreams from 'actions/fetchStreams';

class StreamList extends Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchStreams()
  };

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key="stream.id">
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

  render() {
    console.log(this.props.streams)
    return (
      <div>
        <h2>StreamList</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams)
    // `Object.values` is a built in JavaScript function which takes an object as an argument, and then all the objects inside that object are pulled out and inserted into an array
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
