import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, UserRoute } from '../util/route_util';

import Header from './header/header';
import LoginPage from './session/login_page';
import SignUpFormContainer from './session/signup_form_container';
import Unknown404Container from './404/unknown_404_container';

const App = () => (
  <div className="app">
    <UserRoute path="/" component={Header} />
    <Switch>
      <AuthRoute exact path="/login" component={LoginPage} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" render={() => <div>TODO</div>} />
      <Route path="/" component={Unknown404Container} />
    </Switch>
  </div>
);

export default App;
