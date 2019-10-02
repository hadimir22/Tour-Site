import React, { Component } from "react";
import Logo from "../assets/img/logo-white.png";
import "../style/index.scss";
import About from "./about";
import Features from "./features";

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

          <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Most popular tours</h2>
            </div>

            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front ">
                    <div className="card__picture card__picture--1">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        The sea explorer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tour</li>
                        <li>upto 30 people</li>
                        <li>cozy hotel</li>
                        <li>2 tour guides</li>
                        <li>difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1 ">
                    <div className="card__cta">
                      <div className="card__price-box ">
                        <p className="card__price-only">only</p>
                        <p className="card__price-value">$599</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        {" "}
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front ">
                    <div className="card__picture card__picture--2">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        The forest tiger
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tour</li>
                        <li>upto 30 people</li>
                        <li>cozy hotel</li>
                        <li>separate tents</li>
                        <li>difficulty: medium</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2 ">
                    <div className="card__cta">
                      <div className="card__price-box ">
                        <p className="card__price-only">only</p>
                        <p className="card__price-value">$699</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        {" "}
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front ">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        The snow adventurer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tour</li>
                        <li>upto 15 people</li>
                        <li>cozy hotel</li>
                        <li>2 tour guides</li>
                        <li>difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3 ">
                    <div className="card__cta">
                      <div className="card__price-box ">
                        <p className="card__price-only">only</p>
                        <p className="card__price-value">$899</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        {" "}
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">
                discover all tours
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
