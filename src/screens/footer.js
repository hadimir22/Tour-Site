import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo-box">
          <img
            src={require("../assets/img/logo-green-2x.png")}
            alt="logo"
            className="footer__logo"
          />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by hadi copyright &copy; this is an awesome website built on
              react
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
