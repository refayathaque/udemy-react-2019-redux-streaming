import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// `Field` is just a component that hooks up all the redux-form infrastructure, the infrastructure that handles the action creators/reducers for our forms and persists the form data in the Redux store
// Redux-form is a way of maintaining 'controlled' elements in forms, but instead of using localized class-based state to maintain the form data, we are using the Redux store to establish a global application-level state to maintain the form data

class StreamForm extends Component {

  renderInput = ({ input, label, meta }) => {
    // ^ ES6 destructuring of `formsProps.input`, `formsProps.label`, `formsProps.meta`
    console.log('func, renderInput, formsProps.meta:', meta)
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input { ...input } autoComplete="off" />
        {/* `formProps.input` has the properties `value` and the `onChange` handler, the spread operator above will include these ^ properties (and more..) to the input element */}
        {this.renderError(meta)}
        {/* We needed to bind this function because we are calling another function (this.renderError) defined within this class, conversely, we could have just refactored this function to an ES6 arrow function instead of having to bind it in the constructor */}
      </div>
    )
  }

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    };
  };

  onSubmit = (formValues) => {
    console.log('func, onSubmit, formValues:', formValues)
    // Parent component will pass down a callback called `onSubmit`
    this.props.onSubmit(formValues)
  }

  render () {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {/* `handleSubmit` is how redux-form submits forms, the function will take care of things like running `event.preventDefault` to prevent page refreshes upon form submission, performing validation as per our `validate` function defined below, and it also takes in whatever we pass into it such as our `onSubmit` function defined above */}
        {/* When it runs `onSubmit` it will pass in the `formValues` object to the function so that we can access the form values if we need to */}
        {/* `handleSubmit` will only run if the `validate` function returns an empty object (i.e., all validation checks pass) */}
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
        />
        {/* `renderInput` will get called with `formProps` from redux-form passed in */}
        {/* `renderInput` will be invoked every time there is ANY interaction with this `Field` redux-form component (e.g., when users click/click out and when users input values (redux-form state change)). In addition to being invoked when the `StreamForm` component is rerendered due to state changes, and when the component is rendered for the first time */}
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  };
};

const validate = (formValues) => {
  // Validation (this function) is ran every time the `Field` components are rendered/rerendered to the screen because the user interacts with it (e.g., enters a value (i.e., redux-form state change), but not when they simply click/click out), the function will get called with all values from the form  (`formValues`) as an argument
  console.log('func, validate, formValues:', formValues)
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  };
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  };
  // If the form data does not pass our validation checks we return an object with key-value pairs that will have the name of the field and the error message we wish to display to the user, once we return this error details object redux-form will rerender our component
  // We return an EMPTY object if the form data passes our validation checks, returning an EMPTY object makes redux-form think that the form is valid
  console.log('func, validate, errors:', errors)
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
  // enableReinitialize: true
})(StreamForm);

// Notes:

// const formWrapped = reduxForm({
//   form: 'streamCreate',
//   // ^ This ('streamCreate') is essentially the name of the form, but this is not required
//   validate: validate
// })(StreamForm);
//
// export default connect(null, {})(formWrapped)

// ^ Way of incorporating React-Redux `connect` function with Redux Form `reduxForm` helper function using a wrapper function, this will be necessary if the form needs access to the Redux store and/or action creators
