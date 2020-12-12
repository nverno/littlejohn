import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ErrorBoundary from '../errors/error_boundary';
import DisclosureButton from './disclosure_button';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const controls = this.props.loggedIn
      ? <Link to="/portfolio" className="splash-button-signup">
        My Account
            </Link>
      : <Link to="/signup" className="splash-button-signup">
        Sign up
            </Link>;

    return (
      <div className="splash-container">
        <header className="splash-header">
          <div className="splash-header-container">
            <div className="splash-header-body">
              <div className="splash-header-content-outer">
                <div className="splash-header-content-inner">
                  <div className="splash-header-content">
                    <div className="splash-header-title">
                      <h1>Investing for Everyone</h1>
                    </div>
                    <div className="splash-header-text-container">
                      <span>
                        Commission-free investing, plus the tools you need to
                        put your money in motion. Sign up and get your first
                        stock for free. Certain limitations apply.
                      </span>
                    </div>
                    <div className="splash-header-control-container">
                      <div className="splash-header-control-content">
                        <div className="splash-header-signup">
                          {controls}
                        </div>
                        <div className="splash-disclosure-container">
                          <DisclosureButton className="splash">
                            <span>Free Stock Disclosure</span>
                          </DisclosureButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="splash-header-image-container">
                <div className="splash-header-image-outer">
                  <div className="splash-header-image-inner">
                    <ErrorBoundary>
                      <img src={window.splashImageURL}
                           className="splash-header-video" />
                      <img
                        src={window.splashVideoURL}
                        className="splash-header-backdrop"
                      />
                    </ErrorBoundary>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="splash-section-1">
          <div className="splash-section-1-container">
            <div className="splash-section-1-outer">
              <div className="splash-section-1-start" />
              <div className="splash-section-1-inner">
                <div className="splash-section-1-body">
                  <div className="splash-section-1-header-container">
                    <h2 className="splash-section-1-header">
                      Break Free from Commission Fees
                    </h2>
                  </div>

                  <div className="splash-section-1-text-container">
                    <p className="splash-section-1-text">
                      <span>
                        Make unlimited commission-free trades in stocks, ETFs,
                        and options with Robinhood Financial, as well as buy and
                        sell cryptocurrencies with Robinhood Crypto. See our fee
                        schedule (doesn't exist!!) to learn more about cost.
                      </span>
                    </p>
                  </div>

                  <DisclosureButton className="splash">
                    <span>Commissions Disclosure</span>
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
