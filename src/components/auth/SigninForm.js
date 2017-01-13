import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SigninForm extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password)
    // TODO Log in user
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label htmlFor="formSigninEmail">Email:</label>
          <Field name="email" component="input" id="formSigninEmail" className="form-control" type="email" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="formSigninPassword">Password:</label>
          <Field name="password" component="input" id="formSigninPassword" className="form-control" type="text" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

SigninForm = reduxForm({
  form: 'signin',
//  fields: [ 'email', 'password' ]
})(SigninForm)

export default SigninForm
