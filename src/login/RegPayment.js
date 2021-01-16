import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, chooseStep } from "../redux/features/registrationSlice";

function RegPayment() {
  const dispatch = useDispatch();
  const userPlan = useSelector((state) => state.registration.userPlan);

  let dateNow = new Date().getTime() + 2629800000;
  let datePayment = new Date(dateNow);

  return (
    <div className="sign-up__section sign-up__section-wide">
      <p className="sign-up__blue-title">Enjoy your first month. It's free.</p>
      <p className="sign-up__steps sign-up__step--left">
        STEP <span className="sign-up__step-number">3</span> OF{" "}
        <span className="sign-up__step-number">3</span>
      </p>
      <h1 className="sign-up__payment-title">
        Pay EUR0.00 now. Set up payment for later.
      </h1>
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
            Total due during 30 day free trial EUR0.00
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
            No charge until {datePayment.getMonth() + 1}/{datePayment.getDate()}
            /{datePayment.getFullYear()}
          </span>
        </li>
      </ul>
      <div className="sign-up__pay-not-cards-group">
        <img src="images/visa.svg" className="sign-up__pay-not-cards" />
        <img src="images/mastercard.svg" className="sign-up__pay-not-cards" />
        <img src="images/amex.svg" className="sign-up__pay-not-cards" />
      </div>
      <form className="sign-up__form">
        <div className="sign-up__form-block">
          <input
            className="sign-up__form-input"
            type="text"
            name="firstName"
            required
          />
          <label className="sign-up__label-name">First Name</label>
        </div>
        <div className="sign-up__form-block">
          <input
            className="sign-up__form-input"
            type="text"
            name="lastName"
            required
          />
          <label className="sign-up__label-name">Last Name</label>
        </div>
        <div className="sign-up__form-block">
          <input
            className="sign-up__form-input"
            type="tel"
            name="card"
            required
            maxLength="19"
            minLength="12"
          />
          <label className="sign-up__label-name">Card Number</label>
        </div>
        <div className="sign-up__form-block">
          <input
            className="sign-up__form-input"
            type="tel"
            name="card"
            required
            maxLength="5"
            minLength="5"
          />
          <label className="sign-up__label-name">
            Expiritation Date (MM/YY)
          </label>
        </div>
        <div className="sign-up__form-block">
          <input
            className="sign-up__form-input"
            type="tel"
            name="card"
            required
            maxLength="4"
            minLength="3"
          />
          <label className="sign-up__label-name">Security Code (CVV)</label>
        </div>
      </form>
      <div className="sign-up__chosen-plan-block">
        <div className="sign-up__plan-data">
          <p className="sign-up__plan-data-price">
            {userPlan.price}/mo. after free trial
          </p>
          <p className="sign-up__plan-data-type">{userPlan.plan} Plan</p>
        </div>
        <div className="sign-up__change-plan">
          <button
            className="sign-up__change-plan-button"
            onClick={() => dispatch(chooseStep(3))}
          >
            Change
          </button>
        </div>
      </div>
      <p className="sign-up__privacy-text">
        By checking the checkbox below, you agree to our Terms of Use, Privacy
        Statement, and that you are over 18. Netflix will automatically continue
        your membership and charge the monthly membership fee (currently{" "}
        {userPlan.price}) to your payment method until you cancel. You may
        cancel at any time to avoid future charges.
      </p>
      <div className="sign-up__checkbox-block">
        <input className="sign-up__checkbox" type="checkbox" />
        <span className="sign-up__checkbox-agree">I agree.</span>
      </div>
      <button className="sign-up__continue sign-up__continue-margin">
        Start membership
      </button>
    </div>
  );
}

export default RegPayment;
