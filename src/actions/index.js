const API_URL = 'http://localhost:8090'

export function signinUser({ email, password }) {
  return function(dipatch) {
    // Submin email/password to the server


    // If request is good:
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - redirect to teh route '/feature'


    // If request is bad:
    // - Show an error to the user

  }
}
