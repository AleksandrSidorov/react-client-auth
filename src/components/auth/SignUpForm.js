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
  handleFormSubmit(formProps) {
    // Call action createor to sign up the user
    this.props.signupUser(formProps)
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
        {this.renderAlert()}
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.error}
}

SignUpForm = reduxForm({ form: 'signup', validate })(SignUpForm)
SignUpForm = connect(mapStateToProps, actions)(SignUpForm)

export default SignUpForm
