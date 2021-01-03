import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CookiePreferences from "../footer-pages/CookiePreferences";

function Footer() {
  const [modalStatus, setModalStatus] = useState({
    closed: true,
  });

  useEffect(() => {
    setModalStatus({ closed: true });
    // effect;
    // return () => {
    //   cleanup;
    // };
  }, []);

  const openCookiePreferences = () => {
    setModalStatus({ closed: false });
  };

  const closeCookiePreferences = () => {
    setModalStatus({ closed: true });
  };

  const returnCookiePreferences = () => {
    console.log("return");

    if (!modalStatus.closed) {
      return (
        <CookiePreferences
          modalStatus={modalStatus}
          closeCookiePreferences={closeCookiePreferences}
        />
      );
    }
  };

  return (
    <footer className="section__footer">
      <div className="footer__links-block">
        <div className="footer__header">
          <Link to="/contactus" className="footer__contact">
            Questions? Contact us.
          </Link>
        </div>
        <ul className="footer__links-list">
          <li className="footer__link-item">
            <Link to="/faq" className="footer__link">
              FAQ
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Investor Relations
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Privacy
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Speed Test
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Help Center
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Jobs
            </Link>
          </li>
          <li className="footer__link-item">
            {/* <a href="#" className="footer__link">
              Cookie Preferences
            </a> */}
            <button
              className="footer__link footer__button-link"
              onClick={() => openCookiePreferences()}
            >
              Cookie Preferences
            </button>
            {!modalStatus.closed ? returnCookiePreferences() : <div></div>}
          </li>

          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Legal Notices
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Account
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Ways to Watch
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Corporate Information
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Netflix Originals
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Media Center
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Terms of Use
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/contactus" className="footer__link">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="footer__language footer__wrapper">
          <span className="footer__text">English</span>
        </div>
        <div className="footer__country footer__wrapper">
          <span className="footer__text">Netflix Belarus</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
