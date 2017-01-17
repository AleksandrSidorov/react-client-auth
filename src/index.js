import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import SigninForm from './components/auth/SigninForm'
import SignUpForm from './components/auth/SignUpForm'
import SignOut from './components/auth/SignOut'
import Feature from './components/Feature'
import RequireAuth from './components/auth/RequireAuth'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={SigninForm} />
        <Route path="signup" component={SignUpForm} />
        <Route path="signout" component={SignOut} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
