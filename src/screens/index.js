import React, { Component } from "react";
import Logo from "../assets/img/logo-white.png";
import "../style/index.scss";
import About from "./about";
import Features from "./features";
import Packages from "./packages";
import Stories from "./stories";
import Booking from "./booking";

export default class Main extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo-img-div">
            <img src={Logo} alt="Logo" className="logo-img" />
          </div>
          <div className="text">
            <h1 className="heading-primary">
              <span className="heading-primary-main">outdoors</span>
              <span className="heading-primary-sub">is where life happens</span>
            </h1>
            <a href="#" className="btn btn-white">
              Discover our packages
            </a>
          </div>
        </header>

        <main>
          <About />
          <Features />
          <Packages />
          <Stories />
          <Booking />
        </main>

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
                Built by hadi copyright &copy; this is an awesome website built
                on react
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
