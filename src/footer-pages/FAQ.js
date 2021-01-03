import React from "react";
import { Link } from "react-router-dom";

import "./FAQ.css";
import SimpleFooter from "./SimpleFooter";
import SimpleNav from "./SimpleNav";

function FAQ() {
  return (
    <div>
      <SimpleNav />

      <div className="faq-wrapper">
        <div className="faq-wrapper__left-block">
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

          <section className="faq-left-block__section">
            <h1 className="faq-section__title--large">What is Netflix?</h1>
            <p className="faq-section__text">
              Netflix is a subscription-based{" "}
              <Link to="/" className="faq-section_link--red">
                streaming service
              </Link>{" "}
              that allows our members to watch TV shows and movies without
              commercials on an internet-connected device.
            </p>
            <p className="faq-section__text">
              You can also{" "}
              <Link to="/" className="faq-section_link--red">
                download TV shows and movies
              </Link>{" "}
              to your iOS, Android, or Windows 10 device and watch without an
              internet connection.
            </p>
            <p className="faq-section__text">
              If you're already a member and would like to learn more about
              using Netflix, visit{" "}
              <Link to="/login" className="faq-section_link--red">
                Getting started with Netflix
              </Link>
              .
            </p>
          </section>
          <section className="faq-left-block__section">
            <h2 className="faq-section__title--default">TV Shows & Movies</h2>
            <p className="faq-section__text">
              Netflix content varies by region and may change over time. You can
              watch from a wide variety of{" "}
              <Link to="/" className="faq-section_link--red">
                award-winning Netflix Originals, TV shows, movies,
                documentaries, and more
              </Link>
              .
            </p>
            <p className="faq-section__text">
              The more you watch, the better Netflix gets at{" "}
              <Link to="/" className="faq-section_link--red">
                recommending
              </Link>{" "}
              TV shows and movies we think you’ll enjoy.
            </p>
            <p className="faq-section__text">
              Before you sign up, you can{" "}
              <Link to="/" className="faq-section_link--red">
                watch some of the content
              </Link>{" "}
              Netflix has to offer!
            </p>
          </section>
          <section className="faq-left-block__section">
            <h2 className="faq-section__title--default">Supported Devices</h2>
            <p className="faq-section__text">
              You can watch Netflix through any{" "}
              <Link to="/" className="faq-section_link--red">
                internet-connected device
              </Link>{" "}
              that offers the Netflix app, including smart TVs, game consoles,
              streaming media players, set-top boxes, smartphones, and tablets.
              You can also watch Netflix on your computer using an internet
              browser. You can review the{" "}
              <Link to="/" className="faq-section_link--red">
                system requirements
              </Link>{" "}
              for web browser compatibility, and check our{" "}
              <Link to="/" className="faq-section_link--red">
                internet speed recommendations
              </Link>{" "}
              to achieve the best performance.
            </p>
            <p className="faq-section__text">
              Need help getting set up? Search our{" "}
              <Link to="/help" className="faq-section_link--red">
                Help Center
              </Link>{" "}
              for the manufacturer of the device you're using.
            </p>
            <p className="faq-section__text faq-section__text--note">
              <span className="faq-section__text--bold">NOTE:</span> The Netflix
              app may come pre-loaded on certain devices, or you may need to
              download the Netflix app onto your device. Netflix app
              functionality may differ between devices.
            </p>
          </section>
          <section className="faq-left-block__section">
            <h2 className="faq-section__title--default">Plans and Pricing</h2>
            <p className="faq-section__text">
              Each Netflix plan determines the number of devices you can watch
              Netflix on at the same time and if you prefer to view in Standard
              Definition (SD), High Definition (HD), or Ultra High Definition
              (UHD).
            </p>
            <p className="faq-section__text">
              <Link to="/" className="faq-section_link--red">
                Compare our plans and pricing
              </Link>{" "}
              to decide which one is right for you. You can easily{" "}
              <Link to="/" className="faq-section_link--red">
                change your plan
              </Link>{" "}
              or{" "}
              <Link to="/" className="faq-section_link--red">
                cancel
              </Link>{" "}
              online at any time.
            </p>
          </section>
          <section className="faq-left-block__section">
            <h2 className="faq-section__title--default">Get Started!</h2>
            <p className="faq-section__text">
              Follow these easy steps to start watching Netflix today:
            </p>
            <ul className="faq-section__ul-list">
              <li className="faq-section__ol-item faq-section__text">
                Visit{" "}
                <Link to="/signup" className="faq-section_link--red">
                  netflix.com/signup
                </Link>
                .
              </li>
              <li className="faq-section__ol-item faq-section__text">
                <Link to="/" className="faq-section_link--red">
                  Choose the plan
                </Link>{" "}
                that’s right for you.
              </li>
              <li className="faq-section__ol-item faq-section__text">
                Create an account by entering your email address and creating a
                password.
              </li>
              <li className="faq-section__ol-item faq-section__text">
                Enter a{" "}
                <Link to="/" className="faq-section_link--red">
                  payment method
                </Link>
                . As a Netflix member, you are charged once a month on the date
                you signed up.
              </li>
            </ul>
            <p className="faq-section__text">That's it. Enjoy Netflix!</p>
          </section>
          <section className="faq-left-block__section-question">
            <span className="faq-section__text">Was this article helpful?</span>
            <button className="faq-section__button faq-section__button--red">
              Yes
            </button>
            <button className="faq-section__button faq-section__button--red">
              No
            </button>
          </section>
        </div>
        <div className="faq-wrapper__right-block">
          <div className="contact-us__questions-block">
            <p className="contact-us__questions-block-title">
              Suggested Articles
            </p>
            <ul className="contact-us__questions-list">
              <li className="contact-us__questions-item">
                <Link to="/" className="contact-us__questions-link">
                  Getting started with Netflix
                </Link>
              </li>
              <li className="contact-us__questions-item">
                <Link to="/" className="contact-us__questions-link">
                  Billing and Payments
                </Link>
              </li>
              <li className="contact-us__questions-item">
                <Link to="/" className="contact-us__questions-link">
                  Netflix Gift Cards
                </Link>
              </li>
              <li className="contact-us__questions-item">
                <Link to="/" className="contact-us__questions-link">
                  Can't sign in to Netflix
                </Link>
              </li>
              <li className="contact-us__questions-item">
                <Link to="/" className="contact-us__questions-link">
                  How to create and edit profiles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="faq-question-wrapper">
        <span className="faq-question-wrapper__title">Want to contact us?</span>
        <div>
          <button className="faq-section__button faq-section__button--gray">
            Call us
          </button>
          <button className="faq-section__button faq-section__button--gray">
            Start Live Chat
          </button>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default FAQ;
