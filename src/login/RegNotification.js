import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../redux/features/registrationSlice";

function RegNotification() {
  const dispatch = useDispatch();

  return (
    <section className="sign-up__section">
      <img className="sign-up__checkmark-img" src="images/checkmark.png" />
      <p className="sign-up__steps sign-up__margin">
        STEP <span className="sign-up__step-number">2</span> OF{" "}
        <span className="sign-up__step-number">3</span>
      </p>
      <p className="sign-up__title sign-up__margin">Choose your plan.</p>
      <ul className="sign-up__ul-block">
        <li className="sign-up__li-block">
          <svg
            viewBox="0 0 24 24"
            className="sign-up__checkmark-group--icon"
            aria-hidden="true"
          >
            <path d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
          </svg>
          <span className="sign-up__li-description">
            You won't be charged until after your free month.
          </span>
        </li>
        <li className="sign-up__li-block">
          <svg
            viewBox="0 0 24 24"
            className="sign-up__checkmark-group--icon"
            aria-hidden="true"
          >
            <path d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
          </svg>
          <span className="sign-up__li-description">
            We'll remind you three days before your trial ends.
          </span>
        </li>
        <li className="sign-up__li-block">
          <svg
            viewBox="0 0 24 24"
            className="sign-up__checkmark-group--icon"
            aria-hidden="true"
          >
            <path d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
          </svg>
          <span className="sign-up__li-description">
            No commitments, cancel anytime.
          </span>
        </li>
      </ul>
      <button
        className="sign-up__continue"
        onClick={() => dispatch(nextStep())}
      >
        See the Plans
      </button>
    </section>
  );
}

export default RegNotification;
