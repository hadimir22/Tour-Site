import React, { Component } from "react";

export default class Booking extends Component {
  render() {
    return (
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="  u-margin-bottom-medium">
                  <h2 className="heading-secondary"> Start booking now</h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder=" Full Name"
                    id="name"
                    required
                  />
                  <label for="name" className="form__label">
                    Full Name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder=" You email"
                    id="email"
                    required
                  />
                  <label for="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                    />
                    <label for="email" className="form__radio-label">
                      <sapn className="form__radio-button"></sapn>
                      Small tour group
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <sapn className="form__radio-button"></sapn>
                    <label for="email" className="form__radio-label">
                      large tour group
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <button className="btn btn-green"> Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
