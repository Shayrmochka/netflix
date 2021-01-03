import React from "react";
import { Link } from "react-router-dom";

import "./SimpleNav.css";

function SimpleNav() {
  return (
    <div className="simple-nav__wrapper">
      <div className="simple-nav__block">
        <div className="simple-nav__left">
          <Link to="/">
            <div className="simple-nav__logo">
              <svg
                className="simple-nav__header-svg"
                width="88px"
                height="32px"
                viewBox="0 0 111 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#e50914"
                  d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"
                ></path>
              </svg>
              <svg
                className="simple-nav__header-svg--mobile"
                focusable="true"
                viewBox="225 0 552 1000"
                height="32px"
              >
                <defs>
                  <radialGradient
                    id="54260309-7575-46f4-a806-31673acf60fe-a"
                    r="75%"
                    gradientTransform="matrix(.38 0 .5785 1 .02 0)"
                  >
                    <stop offset="60%" stopOpacity=".3"></stop>
                    <stop offset="90%" stopOpacity=".05"></stop>
                    <stop offset="100%" stopOpacity="0"></stop>
                  </radialGradient>
                </defs>
                <path
                  d="M225 0v1000c60-8 138-14 198-17V0H225"
                  fill="#b1060e"
                ></path>
                <path
                  d="M579 0v983c71 3 131 9 198 17V0H579"
                  fill="#b1060e"
                ></path>
                <path
                  d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
                  fill="url(#54260309-7575-46f4-a806-31673acf60fe-a)"
                ></path>
                <path
                  d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
                  fill="#e50914"
                ></path>
              </svg>
            </div>
          </Link>
          <div className="simple-nav__slash"></div>
          <div className="simple-nav__help-center-block">
            <Link to="/main" className="simple-nav__help-center">
              Help Center
            </Link>
          </div>
        </div>
        <div className="simple-nav__buttons-block">
          <Link
            to="/login"
            className="simple-nav__button simple-nav__button--black"
          >
            Try 30 days free
          </Link>
          <Link
            to="/login"
            className="simple-nav__button simple-nav__button--red"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SimpleNav;
