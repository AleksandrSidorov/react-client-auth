import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
 } from './types'

const API_URL = 'http://localhost:8090'


export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submin email/password to the server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(responce => {
        // If request is good:
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
        // - Save the JWT token
        localStorage.setItem('token', responce.data.token)
        // - redirect to teh route '/feature'
        browserHistory.push('/feature')
      })
      .catch(() => {
        // If request is bad:
        // - Show an error to the user
        dispatch(authError('Bad login info'))
      })

  }
}

export function authError(error) {
  return  {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token')

  return {
    type: UNAUTH_USER
  }
}
