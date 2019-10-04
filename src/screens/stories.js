import React, { Component } from "react";
import VideoMP4 from "../assets/img/video.mp4";
import VideoWebm from "../assets/img/video.webm";

export default class Stories extends Component {
  render() {
    return (
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay loop muted>
            <source src={VideoMP4} type="video/mp4" />
            <source src={VideoWebm} type="video/webm" />
            Browser not suporting videos
          </video>
        </div>
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
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                I had the best week in
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src={require("../assets/img/nat-9.jpg")}
                alt="person"
                className="story__img"
              />
              <figcaption className="story__caption">will smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Life changing trip
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn-text">
            Read all Stories &rarr;
          </a>
        </div>
      </section>
    );
  }
}
