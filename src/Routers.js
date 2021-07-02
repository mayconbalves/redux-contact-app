import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import Login from './pages/login'
import Home from './pages/home'

const Routers = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

Routers.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routers