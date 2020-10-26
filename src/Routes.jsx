import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import Login from 'screens/Login'
import Home from 'screens/index'
import NotFound from 'screens/404'
import { useSelector } from 'react-redux'
import history from './History'
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.login?.isLoggedIn)
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute isLoggedIn={isLoggedIn} path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}
export default Routes
