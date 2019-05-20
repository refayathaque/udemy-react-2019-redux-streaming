import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import fetchStream from 'actions/fetchStream';
import editStream from 'actions/editStream';
import StreamForm from 'components/streams/smart/StreamForm'

class StreamEdit extends Component {
  // React-Router-DOM will also pass props to components when you use `Link` to navigate beetween components, this happens because `Route` components are rendering the components in your application (with the `Route` component parent component being the `Router` component)
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    // With React-Router, each component needs to be designed to work in isolation (fetch its own data!)
  }

  onSubmit = (formValues) => {
    console.log('func, onSubmit, formValues:', formValues)
    this.props.editStream(formValues, this.props.stream.id)
  };

  render() {
    if (!this.props.stream) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          // initialValues={this.props.stream}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  // `ownProps` is the reference to the props object that shows up inside of the StreamEdit component above, in this case it will be the props passed down by React-Router-DOM
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);

// Notes:

// In rendering the `StreamForm` component, we are technically passing props (the callback function `onSubmit`) to Redux Form, and it then passes the props down to the `StreamForm` component that it wraps

// ^ Allows us to pass down some special Redux Form props, e.g., `initialValues`

//The `initialValues` object passed down must map to the `Field` component `name` props, this has to happen in order for the `Field` component to automatically render with the corresponding values

// The object being passed down MAY HAVE ADDITIONAL keys that will not correspond to the `Field` component `name` props
// ^ But this is NOT GOOD PRACTICE, we should should only pass down keys in the object that we are trying to change (relevant when thinking about RESTful APIs and the difference between PUT and PATCH requests/methods)
// ^ e.g., initialValues={_.pick(this.props.stream, 'title', 'description')} - will produce expected outcome when using RESTful PATCH (Update SOME properties of a record)

// initialValues={this.props.stream} - will produce expected outcome when using RESTful PUT (Update ALL properties of a record).
