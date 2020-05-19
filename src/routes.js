/* eslint-disable linebreak-style */
import React from 'react';
import {
  Router, Route as DefaultRoute, Switch, Redirect
} from 'react-router-dom';
import history from './history';
import { isAuthenticated, removeAuthenticatedState, authenticateUser } from './services/Auth'
import SignInPage from './components/Screens/Auth/SignIn';
import SignUp from './components/Screens/Auth/SignUp';
// import DummyPage from './containers/LandingPage/DummyPage';
// import Dashboard from './containers/Dashboard'
import Order from './containers/Order/'
import Community from './containers/Community'
import View from './containers/Community/View'
import Edit from './containers/Community/Editor'
import LandingPage from './containers/LandingPage';

// @desc  A function to check if user is authenticated. Check if token exists
// @ex    const isAuth = isAuthenticated()
// const isAuthenticated = () => false;

// @desc    This is a function that create protected/private routes.
//          It makes use of isAuthenticated function to check if the user
//          has the access right to the route.
// @use   <PrivateRoute path="<name of path>" component={Component to render} />
// @ex    <PrivateRoute path="/sign-in" component={SignInPage} />
const PrivateRoute = ({ component: Component, ...rest }) => (
  <DefaultRoute
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      ))
    }
  />
);

// @desc    This is a function that create default/public/unprotected routes.
// @use     <Route exact path="<name of path>" component={Component to render} />
// @ex      <Route exact path="/" component={LandingPage} />
const Route = ({ component: Component, ensureNonAuth, ...rest }) => (
  <DefaultRoute {...rest} render={(props) => <Component {...props} />} />
);

// @desc  All routes goes here. Either private of public

export default () => (
  <Router history={history}>
    <Switch>
      {/* <Route ensureNonAuth exact path="/community" component={Community} /> */}
      <Route ensureNonAuth exact path="/" component={LandingPage} />
      {/* <Route ensureNonAuth exact path="/dummy" component={DummyPage} /> */}
      {/* <PrivateRoute exact path="/" component={LandingPage} /> */}
      <PrivateRoute path="/order" component={Order} />
      <PrivateRoute exact path="/community" component={Community} />
      <PrivateRoute path="/community/view" component={View} />
      <PrivateRoute path="/community/edit" component={Edit} />
      <Route component={() => <h1>404 !</h1>} />
    </Switch>
  </Router>
);
