import React from 'react';

import SplashContainer from '../splash/splash_container';
import PortfolioContainer from '../portfolio/portfolio_container';

const Home = ({ loggedIn }) => (
  loggedIn ? <PortfolioContainer /> : <SplashContainer />
);

export default Home;
