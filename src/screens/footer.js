import React, { Component } from "react";
import Img1 from "../assets/img/logo-green-1x.png";
import Img2 from "../assets/img/logo-green-2x.png";
import Img3 from "../assets/img/logo-green-small-1x.png";
import Img4 from "../assets/img/logo-green-small-2x.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source
              srcset={`${Img3} 1x, ${Img4} 2x`}
              media="(max-width: 600px)"
            />
            <img srcset={`${Img1} 1x, ${Img2} 2x`} alt="logo" />
          </picture>
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
