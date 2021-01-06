import React from "react";

function RegPaymentNotification() {
  let dateNow = new Date().getTime() + 2629800000;
  let datePayment = new Date(dateNow);

  return (
    <div className="sign-up__pay-not-wrapper">
      <img src="images/lock.png" className="sign-up__pay-not-img" />
      <p className="sign-up__steps">STEP 3 OF 3</p>
      <h1 className="sign-up__pay-not-title sign-up__pay-not-text--bold">
        Set up your payment.
      </h1>
      <p className="sign-up__pay-not-row">
        Cancel before{" "}
        <span className="sign-up__pay-not-text--bold">
          {datePayment.getMonth() + 1}/{datePayment.getDate()}/
          {datePayment.getFullYear()} to not be charged.
        </span>
      </p>
      <p className="sign-up__pay-not-row">
        As a reminder,{" "}
        <span className="sign-up__pay-not-text--bold">
          we'll email you 3 days before.
        </span>
      </p>
      <p className="sign-up__pay-not-row sign-up__pay-not-text--bold">
        No commitments. Cancel online anytime.
      </p>
      <div className="sign-up__pay-not-secure">
        <span className="sign-up__pay-not-text">Secure Server</span>
        <svg
          id="secure-server-icon"
          viewBox="0 0 12 16"
          className="secure-server-badge--icon"
        >
          <g fill="none">
            <g fill="#FFB53F">
              <path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="sign-up__pay-not-cards-wrapper">
        <div className="sign-up__pay-not-cards-group">
          <span className="sign-up__pay-not-cards-desc">
            Credit or Debit card
          </span>
          <img src="images/visa.svg" className="sign-up__pay-not-cards" />
          <img src="images/mastercard.svg" className="sign-up__pay-not-cards" />
          <img src="images/amex.svg" className="sign-up__pay-not-cards" />
        </div>
        <img src="images/arrow.svg" className="sign-up__pay-not-arrow" />
      </div>
    </div>
  );
}

export default RegPaymentNotification;
