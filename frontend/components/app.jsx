import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Header from './header/header';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import Unknown404Container from './404/unknown_404_container';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" render={() => <div>TODO</div>} />
      <Route
        path="/"
        component={Unknown404Container} />
    </Switch>
  </div>
);

export default App;
