import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// `Field` is just a component that hooks up all the redux-form infrastructure, the infrastructure that handles the action creators/reducers for our forms and persists the form data in the Redux store

// Redux-form is a way of maintaining 'controlled' elements in forms, but instead of using localized class-based state to maintain the form data, we are using the Redux store to establish a global application-level state to maintain the form data

class StreamCreate extends Component {
  renderInput({ input, label }) {
    // ^ ES6 destructuring of `formsProps.input` and `formsProps.label`
    // console.log(input)
    return (
      <div className="field">
        <label>{label}</label>
        <input { ...input } />
        {/* `formProps.input` has the properties `value` and the `onChange` handler, the spread operator above will include these ^ properties (and more..) to the input element */}
      </div>
    )
  }

  onSubmit(formValues) {
    // event.preventDefault();
    // ^ To prevent page refresh
    validate(formValues)
  }

  render () {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {/* `handleSubmit` is how redux-form submits forms, the function will take care of things like running `event.preventDefault` to prevent page refreshes upon form submission, and it also takes in whatever we pass into it such as our `onSubmit` function defined above */}
        {/* When it runs `onSubmit` it will pass in the `formValues` object to the function so that we can access the form values for purposes of validation or whatever else we want to do */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        {/* `renderInput` will get called with `formProps` from redux-form passed in */}
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  };
};

const validate = (formValues) => {
  console.log(formValues)
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  };
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  };
  // If the form data does not pass our validation checks we return an object with key-value pairs that will have the name of the field and the error message we wish to display to the user, once we return this error details object redux-form will rerender our component
  // We return an EMPTY object if the form data passes our validation checks, returning an EMPTY object makes redux-form think that the form is valid
  return errors;
};

export default reduxForm({
  form: 'streamCreate'
  // ^ This is essentially the name of the form
})(StreamCreate);
