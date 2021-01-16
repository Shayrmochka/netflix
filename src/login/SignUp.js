import React from "react";
import { Link } from "react-router-dom";
import RegForm from "./RegForm";
import RegNotification from "./RegNotification";
import RegPayment from "./RegPayment";
import RegPaymentNotification from "./RegPaymentNotification";
import RegPlan from "./RegPlan";
import RegPreview from "./RegPreview";

import { useSelector, useDispatch } from "react-redux";

import "./SignUp.css";
import SignUpHeader from "./SignUpHeader";

function SignUp(props) {
  const registration = useSelector((state) => state.registration);

  const displayRegComponent = () => {
    console.log(registration.step);
    switch (registration.step) {
      case 0:
        return <RegPreview />;
      case 1:
        return <RegForm methods={props} />;
      case 2:
        return <RegNotification />;
      case 3:
        return <RegPlan />;
      case 4:
        return <RegPaymentNotification />;
      case 5:
        return <RegPayment />;
    }
  };

  return (
    <div>
      <SignUpHeader />
      {displayRegComponent()}

      {/* <footer className="sign-up-section__footer">
        <div className="footer__links-block sign-up-links-block">
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
                Help Center
              </Link>
            </li>

            <li className="footer__link-item">
              <Link to="/" className="footer__link">
                Terms of Use
              </Link>
            </li>

            <li className="footer__link-item">
              <Link to="/" className="footer__link">
                Privacy
              </Link>
            </li>
            <li className="footer__link-item">
              <Link to="/" className="footer__link">
                Cookie Preferences
              </Link>
            </li>

            <li className="footer__link-item">
              <Link to="/" className="footer__link">
                Corporate Information
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
      </footer> */}
    </div>
  );
}

export default SignUp;
