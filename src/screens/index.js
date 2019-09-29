import React, { Component } from "react";
import Logo from "../assets/img/logo-white.png";
import "../style/index.scss";

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

        {/* <section className="grid-test">
          <div className="row">
            <div className="col-1-of-2">col </div>
            <div className="col-1-of-2">col </div>
          </div>

          <div className="row">
            <div className="col-1-of-3">col </div>
            <div className="col-1-of-3"> col</div>
            <div className="col-1-of-3"> col</div>
          </div>
        </section> */}

        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-80">
              <h2 className="heading-secondary">
                Exciting tour for adventures people
              </h2>
            </div>

            <div className="row">
              <div className="col-1-of-2">text content </div>
              <div className="col-1-of-2">image compos </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
