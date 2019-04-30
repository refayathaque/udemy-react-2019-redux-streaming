import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// `Field` is just a component that hooks up all the redux-form infrastructure, the infrastructure that handles the action creators/reducers for our forms and persists the form data in the Redux store

class StreamCreate extends Component {
  renderInput({ input }) {
    // ^ ES6 destructuring of `formsProps.input`
    console.log(formProps)
    return (
      <input { ...input } />
      // `formProps.input` has the properties `value` and the `onChange` handler, the spread operator above will include these ^ properties (and more..) to the input element
    )
  }

  render () {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  };
};

export default reduxForm({
  form: 'streamCreate'
  // ^ This is essentially the name of the form
})(StreamCreate);
