import React from "react";

function RegForm() {
  return (
    <section className="sign-up__section sign-up__section-wide">
      <p className="sign-up__blue-title">Enjoy your first month. It's free.</p>
      <p className="sign-up__steps sign-up__margin">
        STEP <span className="sign-up__step-number">1</span> OF{" "}
        <span className="sign-up__step-number">3</span>
      </p>
      <p className="sign-up__title sign-up__margin">
        Create a password to start your free month.
      </p>
      <p className="sign-up__description sign-up__margin">
        Just a few more steps and you're done! We hate paperwork, too.
      </p>
      <input className="sign-up__input" placeholder="Email" />
      <input className="sign-up__input" placeholder="Add a password" />
      <div className="sign-up__checkbox-block  sign-up__margin">
        <input className="sign-up__checkbox" type="checkbox" />
        <span className="sign-up__checkbox-description">
          Please do not email me Netflix special offers.
        </span>
      </div>
      <button className="sign-up__continue">Continue</button>
    </section>
  );
}

export default RegForm;
