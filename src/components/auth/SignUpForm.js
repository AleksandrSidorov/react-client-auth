import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

const renderField = ({ input, id, label, type, meta: { touched, error } }) => (
  <fieldset className={`form-group${(touched && error) ? ' has-danger' : ''}`}>
    <label className="form-control-label" htmlFor={id}>{label}</label>
    <input
      {...input}
      id={id}
      type={type}
      className="form-control" />
      {touched && error && <div className="form-control-feedback">{error}</div>}
    </fieldset>
)

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form>
          <Field
            name="email"
            type="email"
            id="formSignUpEmail"
            component={renderField}
            label="Email:" />
          <Field
            name="password"
            type="password"
            id="formSignUpPassword"
            label="Password:"
            component={renderField} />

          <Field
            name="passwordConfirm"
            type="password"
            id="formSignUpPasswordConfirm"
            label="Confirm Password:"
            component={renderField} />
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Please enter an email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation'
  }

  if(values.password !== values.passwordConfirm) {
    errors.password = 'Password must match'
  }

  return errors
}

SignUpForm = reduxForm({ form: 'signup', validate })(SignUpForm)
SignUpForm = connect(null, actions)(SignUpForm)

export default SignUpForm
