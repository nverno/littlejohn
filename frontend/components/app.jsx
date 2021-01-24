import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, UserRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SplashContainer from './splash/splash_container';
import LoginPage from './session/login/login_page';
import SignupPage from './session/signup/signup_page';
import Unknown404Container from './errors/404/unknown_404_container';
import NavbarContainer from './navbar/navbar_container';
// import PortfolioContainer from './portfolio/portfolio_container';
import StockContainer from './stock/stock_container';
import NotAvailable from './errors/NotAvailable';

const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/welcome" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginPage} />
        <AuthRoute exact path="/signup" component={SignupPage} />

        <Route exact path="/stocks/:symbol" component={StockContainer} />
        <Route exact path="/nodata/:symbol" component={NotAvailable} />

        <ProtectedRoute
          exact
          path="/portfolio"
          component={() => <Redirect to="/" />}
        />

        <Route exact path="/" component={HomeContainer} />
        <Route path="/" component={Unknown404Container} />
      </Switch>

      <Switch>
        <Route exact path="/welcome">
          <NavbarContainer welcome />
        </Route>
        <Route exact path="/" component={NavbarContainer} />
      </Switch>
    </div>
  );
};

export default App;
