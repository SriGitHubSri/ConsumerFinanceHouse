import React, { Component } from "react";
export class HomePageForm extends Component {
  render() {
    const { onFinanceHouse, onDealerForm } = this.props;
    const header = () => (
      <React.Fragment>
        <div className="nav-container">
          <nav className="level">
            <div className="level-left">
              <a className="navbar-brand" href="#">
                <img className="logo" src={require("../../assets/images/logo.png")} />
              </a>
            </div>
            <div className="menu">
              <div className="level-item">
                <a className="link is-size-5">About us</a>
                <a className="link is-size-5">Support</a>
                <a className="link is-size-5">Contact us</a>
              </div>

            </div>
            <div className="level-right">
              <span className="is-size-3">NINJA MOTOR FINANCE</span>
            </div>
          </nav>
        </div>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <div className="home-container">
          <div className="home-wrapper">
            {header()}
            <div className="home-body">
              <div className="columns is-mobile ">
                <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
                  <p className="is-size-3">
                    Choose your perfect car by comparing our car finance plan
                  </p>
                  <br />
                  <p className="is-size-6">
                    Fast &amp; Online. Rates from 5.9% APR
                  </p>
                  <br />
                  <div className="columns is-mobile">
                    <div className="column is-4 is-offset-4">
                      <button
                        className="button is-primary is-medium is-fullwidth"
                        onClick={onFinanceHouse}
                      >
                        Apply online
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="columns is-mobile">
                    <div className="column is-4 is-offset-4">
                      <button
                        className="button is-primary is-outlined is-medium is-fullwidth"
                        onClick={onDealerForm}
                      >
                        Dealer login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePageForm;
