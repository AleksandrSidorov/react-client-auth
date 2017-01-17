import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'
import { AUTH_USER } from './actions/types'

import App from './components/App'
import Welcome from './components/Welcome'
import SigninForm from './components/auth/SigninForm'
import SignUpForm from './components/auth/SignUpForm'
import SignOut from './components/auth/SignOut'
import Feature from './components/Feature'
import RequireAuth from './components/auth/RequireAuth'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token')
// If we have a token, consider the user to be signed in
if(token) {
  // Update application state
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={SigninForm} />
        <Route path="signup" component={SignUpForm} />
        <Route path="signout" component={SignOut} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
