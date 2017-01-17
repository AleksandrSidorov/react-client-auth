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
      .then(response => {
        // If request is good:
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
        // - Save the JWT token
        localStorage.setItem('token', response.data.token)
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

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_ERROR })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature')
      })
      .catch(({ response }) => {
        dispatch(authError(response.data.error))
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

export function fetchMessage() {
  return function(dispatch) {
    axios.get(API_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {
        console.log(response)
      })
  }
}
