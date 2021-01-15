import React from "react";

function RegPreview() {
  return (
    <section className="sign-up__section">
      <img
        className="sign-up__devices-img sign-up__margin"
        src="images/devices.png"
      />
      <p className="sign-up__steps sign-up__margin">
        STEP <span className="sign-up__step-number">1</span> OF{" "}
        <span className="sign-up__step-number">3</span>
      </p>
      <p className="sign-up__title sign-up__margin">
        Finish setting up your account.
      </p>
      <p className="sign-up__description sign-up__margin">
        Netflix is personalized for you. Create a password to watch Netflix on
        any device at any time.
      </p>
      <button className="sign-up__continue">Continue</button>
    </section>
  );
}

export default RegPreview;
