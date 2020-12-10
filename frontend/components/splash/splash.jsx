import React from 'react';
import { Container } from 'react-bootstrap';

const Splash = ({ demoLogin }) => {
  return (
    <Container fluid>

    <video autoplay=""
    controlslist="nodownload nofullscreen noremoteplayback"
    loop=""
    muted=""
    playsinline=""
    preload="auto"
    className="css-1xan04q">
    <source
    src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4"
    type="video/mp4">
    <img className="css-1eazbjj"
    draggable="false"
    role="presentation"
    src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png"
    srcset="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__c7dcadbbb72fc298e85e94844f68342c.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__7c5da6ba049983f3558423906f16f0af.png 3x">
    </video>
    </Container>
  );
};

export default Splash;
