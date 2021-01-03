import React from "react";
import { Link } from "react-router-dom";
import SimpleNav from "./SimpleNav";

import "./ContactUs.css";
import SimpleFooter from "./SimpleFooter";

function ContactUs() {
  return (
    <div className="body__background--white body__display-center">
      <SimpleNav />
      <div className="contact-us__wrapper">
        <div className="contact-us__block">
          <div className="contact-us__info">
            <Link to="help" className="contact-us__back-link">
              <svg
                className="contact-us__back-link-svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="16.3515625 11.1015625 16.3515625 12.25 9.2421875 12.25 12.4960938 15.53125 11.6757812 16.3515625 7 11.6757812 11.6757812 7 12.4960938 7.8203125 9.2421875 11.1015625"></polygon>
              </svg>
              Back to Help Center
            </Link>
            <h1 className="contact-us__title">Contact Customer Service</h1>
            <section className="contact-us__section">
              <h2 className="contact-us__section-title">
                Call us from the Netflix app
              </h2>
              <p className="contact-us__section-text">
                Contacting Netflix is now easier than ever when you contact us
                from the Netflix app on your Android or iOS phone or tablet!
                Calling through the app is free - all you need is an internet or
                cellular connection.
              </p>
              <p className="contact-us__section-text--bold">
                Download the Netflix app:
              </p>
              <div className="contact-us__download-icons">
                <Link to="/">
                  <img
                    src="/images/google-play.svg"
                    className="contact-us__download-link--gp"
                    alt="download-in-google-play"
                  />
                </Link>
                <Link to="/" className="contact-us__download-link--as">
                  <img
                    src="/images/app-store.svg"
                    className="contact-us__download-link--as"
                    alt="download-in-app-store"
                  />
                </Link>
              </div>
              <div className="contact-us__learn-block">
                <span>Questions?</span>
                <Link to="/" className="contact-us__section-text--red">
                  Learn how to contact us from the Netflix app!
                </Link>
              </div>
            </section>
            <section className="contact-us__section">
              <h2 className="contact-us__section-title">
                Call us from any phone
              </h2>
              <p className="contact-us__section-text--bold">
                Phone is currently unavailable.
              </p>
              <p className="contact-us__section-text">
                Call us using the Netflix app as we don't offer a phone number
                in your country
              </p>
              <div className="contact-us__block-button">
                <Link to="/" className="contact-us__section-button">
                  Call Us
                </Link>
              </div>
            </section>
            <section className="contact-us__section">
              <h2 className="contact-us__section-title">Live chat</h2>
              <p className="contact-us__section-text">
                You will need an internet or mobile phone connection.
              </p>
              <div className="contact-us__block-button">
                <Link to="/" className="contact-us__section-button">
                  Start Live Chat
                </Link>
              </div>
            </section>
          </div>

          <div className="contact-us__questions">
            <div className="contact-us__questions-block">
              <p className="contact-us__questions-block-title">
                Popular Questions
              </p>
              <ul className="contact-us__questions-list">
                <li className="contact-us__questions-item">
                  <Link to="/" className="contact-us__questions-link">
                    How do I reset my password?
                  </Link>
                </li>
                <li className="contact-us__questions-item">
                  <Link to="/" className="contact-us__questions-link">
                    How can I request a TV show or movie?
                  </Link>
                </li>
                <li className="contact-us__questions-item">
                  <Link to="/" className="contact-us__questions-link">
                    How do I cancel my account?
                  </Link>
                </li>
                <li className="contact-us__questions-item">
                  <Link to="/" className="contact-us__questions-link">
                    Why isn't Netflix Working?
                  </Link>
                </li>
                <li className="contact-us__questions-item">
                  <Link to="/" className="contact-us__questions-link">
                    What is Netflix?
                  </Link>
                </li>
              </ul>
              <p className="contact-us__button-description">
                Find a different answer
              </p>
              <div className="contact-us__button-block">
                <input
                  className="contact-us__question-input"
                  placeholder="What do you need help with?"
                />
                <button className="contact-us__search" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default ContactUs;
