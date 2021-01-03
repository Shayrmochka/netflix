import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./SignIn.css";

const data = [
  {
    id: 0,
    email: "nathan@gmail.com",
    password: "qwe",
  },
  {
    id: 0,
    email: "test@gmail.com",
    password: "111",
  },
  {
    id: 0,
    email: "qwe@gmail.com",
    password: "123",
  },
];

function SignIn() {
  const history = useHistory();
  const [learnMore, setLearnMore] = useState({ visible: false });

  useEffect(() => {
    // return () => {
    //   cleanup
    // }
  }, []);

  const authWithEmailAndPassword = (email, password) => {
    const API_KEY_FIREBASE = "AIzaSyCsfGk4Wn4C2f812lSAaKT1oqvQTT7ljjI";
    return fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY_FIREBASE}`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data.idToken);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value.toLowerCase();
    let password = e.target.elements.password.value.toLowerCase();
    let signIn = e.target.elements.signIn;
    console.log(email, password);

    signIn.disabled = true;
    // <Redirect to="/movies" />;

    authWithEmailAndPassword(email, password).then((token) => {
      if (token) {
        console.log("work");
        history.push("/movies");
        signIn.disabled = false;
        return <Redirect to="/movies" />;
      } else signIn.disabled = false;
    });
  };

  const showLearnMore = () => {
    setLearnMore({ visible: true });
  };

  return (
    <div className="sign-in-wrapper__image sign-in-wrapper__layout">
      <div className="wrapper--fadeTop"></div>
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <svg viewBox="0 0 111 30" className="header__svg" focusable="false">
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,
                              14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,
                              27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,
                              -5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,
                              -5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,
                              26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,
                              15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,
                              4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,
                              29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
          </div>
        </Link>
        <div className="header__button">Sign in</div>
      </header>

      <div className="sign-in__block-wrapper">
        <form className="sign-in__block" onSubmit={(e) => handleFormSubmit(e)}>
          <h1 className="sign-in__title">Sign In</h1>
          <div className="sing-in__buttons-wrapper">
            <div className="sign-in__buttons-block">
              <input
                className="sign-in__input"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                className="sign-in__input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="sign-in__button-submit"
                name="signIn"
                id="signIn"
              >
                Sign In
              </button>
              <div className="sign-in__help-buttons">
                <span>Remember me</span>
                <span>Need help?</span>
              </div>
            </div>
            <div className="sign-in__block-text sign-in__block-text--align">
              <img
                className="sign-in__fb-logo"
                src="/images/fb-logo.png"
                alt="facebook-logo"
              />
              <span className="sign-in__fb-text">Login with Facebook</span>
            </div>
            <p className="sign-in__block-text sign-in__block-text--large">
              New to Netflix?{" "}
              <Link to="/" className="sign-in__block-link">
                Sign up now
              </Link>
              .
            </p>
            <div className="sign-in__block-text">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <button
                className="sign-in__block-button"
                onClick={() => showLearnMore()}
              >
                Learn more.
              </button>
              <p
                className={`sign-in__block-text ${
                  learnMore.visible
                    ? "sign-in__block-text--visible"
                    : "sign-in__block-text--invisible"
                }`}
              >
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google).
              </p>
            </div>
          </div>
        </form>
      </div>

      <footer className="section__footer sign-in__footer">
        <div className="footer__links-block sign-in__links-block">
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
            <p className="footer__text">English</p>
          </div>
          <div className="footer__country footer__wrapper">
            <p className="footer__text">Netflix Belarus</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;
