import React, { Component } from "react";
import { FaGlobe, FaRegCompass, FaRegMap } from "react-icons/fa";

export default class Features extends Component {
  render() {
    return (
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-3">
            <div className="feature-box">
              <FaGlobe size={60} />
              <h3 className="heading-tertiary  u-margin-bottom-small">
                Explore the world
              </h3>
              <p className="feature-box__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <FaRegCompass size={60} />
              <h3 className="heading-tertiary  u-margin-bottom-small">
                Meet nature
              </h3>
              <p className="feature-box__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <FaRegMap size={60} />
              <h3 className="heading-tertiary  u-margin-bottom-small">
                live life
              </h3>
              <p className="feature-box__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
