import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

class SigninForm extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password)
    // TODO Log in user
    this.props.signinUser({ email, password })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label htmlFor="formSigninEmail">Email:</label>
          <Field
            type="email"
            name="email"
            component="input"
            id="formSigninEmail"
            className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="formSigninPassword">Password:</label>
          <Field
            type="text"
            name="password"
            component="input"
            id="formSigninPassword"
            className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

SigninForm = reduxForm({ form: 'signin' })(SigninForm)

SigninForm = connect(null, actions)(SigninForm)

export default SigninForm
