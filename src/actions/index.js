import axios from 'axios'
import { browserHistory } from 'react-router'

const API_URL = 'http://localhost:8090'


export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submin email/password to the server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(responce => {
        // If request is good:
        // - Update state to indicate user is authenticated
        // - Save the JWT token
        // - redirect to teh route '/feature'
        browserHistory.push('/feature')
      })
      .catch(() => {
        // If request is bad:
        // - Show an error to the user

      })

  }
}
