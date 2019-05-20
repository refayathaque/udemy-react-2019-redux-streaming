import React, { Component } from 'react';
import { connect } from 'react-redux';
import createStream from 'actions/createStream';
import StreamForm from 'components/streams/smart/StreamForm'

class StreamCreate extends Component {

  onSubmit = (formValues) => {
    console.log('func, onSubmit, formValues:', formValues)
    this.props.createStream(formValues)
  }

  render () {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  };
};

export default connect(null, { createStream })(StreamCreate)
