import React, { Component } from "react";
import Logo from "../assets/img/logo-white.png";
import "../style/index.scss";
import About from "./about";
import Features from "./features";
import Packages from "./packages";

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
          <section className="section-stories">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">We make people happy</h2>
            </div>

            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={require("../assets/img/nat-8.jpg")}
                    alt="person"
                    className="story__img"
                  />
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    I had the best week in
                  </h3>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
