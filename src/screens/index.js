import React, { Component } from "react";
import Logo from "../assets/img/logo-white.png";
import "../style/index.scss";
import About from "./about";
import Features from "./features";
import Packages from "./packages";
import Stories from "./stories";
import Booking from "./booking";
import Footer from "./footer";
import Nav from "./nav";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
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

        <Footer />
      </div>
    );
  }
}
