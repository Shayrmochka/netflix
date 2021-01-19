import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, setUserEmail } from "../redux/features/registrationSlice";

function RegForm(props) {
  const userEmail = useSelector((state) => state.registration.userEmail);

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignUp,
    emailError,
    passwordError,
  } = props.methods;

  const dispatch = useDispatch();
  const setUserData = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    if (email && password) {
      setEmail(email);
      setPassword(password);
      handleSignUp(email, password);
      dispatch(setUserEmail(email));
      dispatch(nextStep());
    }
  };

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
      <form onSubmit={(e) => setUserData(e)}>
        <input
          className="sign-up__input"
          placeholder="Email"
          type="email"
          id="email"
          defaultValue={userEmail ? userEmail : ""}
        />
        <p>{emailError}</p>
        <input
          className="sign-up__input"
          placeholder="Add a password"
          type="password"
          id="password"
        />
        <p>{passwordError}</p>
        <div className="sign-up__checkbox-block  sign-up__margin">
          <input className="sign-up__checkbox" type="checkbox" />
          <span className="sign-up__checkbox-description">
            Please do not email me Netflix special offers.
          </span>
        </div>
        <button className="sign-up__continue" type="submit">
          Continue
        </button>
      </form>
    </section>
  );
}

export default RegForm;
