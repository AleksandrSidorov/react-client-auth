import React, { Component } from 'react'
import reduxForm from 'redux-form'

class Signin extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label for="formSigninEmail">Email:</label>
          <input id="formSigninEmail" className="form-control"></input>
        </fieldset>
        <fieldset className="form-group">
          <label for="formSigninPassword">Password:</label>
          <input id="formSigninPassword" className="form-control"></input>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: [ 'email', 'password' ]
})(Signin)
