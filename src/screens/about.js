import React, { Component } from "react";
import Photo1 from "../assets/img/nat-1-large.jpg";
import Photo2 from "../assets/img/nat-2-large.jpg";
import Photo3 from "../assets/img/nat-3-large.jpg";

export default class About extends Component {
  render() {
    return (
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tour for adventures people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you have never before
            </h3>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <a href="#" className="btn-text">
              Learn More &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={Photo1}
                alt="photo1"
                className="composition__photo composition__photo--p1 "
              />
              <img
                src={Photo2}
                alt="photo2"
                className="composition__photo composition__photo--p2 "
              />
              <img
                src={Photo3}
                alt="photo3"
                className="composition__photo composition__photo--p3 "
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
