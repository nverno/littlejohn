import React, { Component } from 'react';
import SignupFormContainer from './signup_form_container';
import Logo from '../../header/logo';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-container">
        {/* {Left side} */}
        <div className="signup-content-left-container">
          <div className="signup-content-left">
            <div className="signup-content-logo">
              {/* {FIXME: how to adjust svg size with params?} */}
              <span>LittleJohn</span>
              <Logo />
            </div>

            <div className="signup-left-row-1">
              <span>Make Your Money Move</span>
              <div className="signup-left-row-1-outer">
                <div className="signup-left-row-1-inner">
                  <span>
                    LittleJohn lets you invest in companies you love,
                    commission-free.
                  </span>
                </div>
              </div>
            </div>

            <SignupFormContainer />
          </div>
        </div>

        {/* {Right side} */}
        <div className="signup-right-container">
          <div className="signup-right-body">
            <div className="signup-right-header-container-1">
              <span className="signup-right-header">
                Commission-free stock trading
              </span>
              <div>
                <span className="signup-right-text">
                  We’ve cut the fat that makes other brokerages costly, like
                  manual account management and hundreds of storefront
                  locations, so we can offer zero commission trading.
                </span>
              </div>
            </div>

            <div className="signup-right-header-container-2">
              <span className="signup-right-header">Account Protection</span>
              <div>
                <span className="signup-right-text">
                  Robinhood Financial is a member of SIPC. Securities in your
                  account are protected up to $500,000. For details, please see
                  www.sipc.org.
                </span>
              </div>
            </div>

            <div className="signup-right-header-container-2">
              <span className="signup-right-header">
                Keep tabs on your money
              </span>
              <div>
                <span className="signup-right-text">
                  Set up customized news and notifications to stay on top of
                  your assets as casually or as relentlessly as you like.
                  Controlling the flow of info is up to you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
