import React from "react";
import { Link } from "react-router-dom";

import "./SimpleFooter.css";

function SimpleFooter() {
  return (
    <footer className="contact-us__footer-wrapper">
      <div className="contact-us__footer-block">
        <div className="contact-us__footer-select-block">
          <select
            className="contact-us__footer-select"
            id="lang-switcher"
            aria-label="Select your preferred language:"
          >
            <option value="en">English</option>

            <option value="id">Bahasa Indonesia</option>

            <option value="ms">Bahasa Melayu</option>

            <option value="cs">Čeština</option>

            <option value="da">Dansk</option>

            <option value="de">Deutsch</option>

            <option value="es">Español</option>

            <option value="fr">Français</option>

            <option value="it">Italiano</option>

            <option value="hu">Magyar</option>

            <option value="nl">Nederlands</option>

            <option value="nb">Norsk Bokmål</option>

            <option value="pl">Polski</option>

            <option value="pt">Português</option>

            <option value="ro">Română</option>

            <option value="fi">Suomi</option>

            <option value="sv">Svenska</option>

            <option value="vi">Tiếng Việt</option>

            <option value="tr">Türkçe</option>

            <option value="el">Ελληνικά</option>

            <option value="ru">Русский</option>

            <option value="he">עברית</option>

            <option value="ar">العربية</option>

            <option value="hi">हिन्दी</option>

            <option value="th">ไทย</option>

            <option value="zh-cn">中文</option>

            <option value="ja">日本語</option>

            <option value="ko">한국어</option>
          </select>

          <svg
            className="contact-us__footer-svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9416531,7.71264972 L17.9520258,15.2282087 C18.4421897,15.9634546 18.2435115,16.9568456 17.5082656,17.4470095 C17.2454376,17.6222282 16.9366253,17.715729 16.6207453,17.715729 L6.6,17.715729 C5.7163444,17.715729 5,16.9993846 5,16.115729 C5,15.799849 5.09350084,15.4910367 5.26871953,15.2282087 L10.2790922,7.71264972 C10.7692561,6.97740382 11.7626471,6.77872563 12.497893,7.26888957 C12.6736566,7.38606534 12.8244774,7.53688606 12.9416531,7.71264972 Z"
              transform="translate(11.610458, 12.357865) scale(1, -1) translate(-11.610458, -12.357865) "
            ></path>
          </svg>
        </div>
        <ul className="contact-us__footer-list">
          <li className="contact-us__footer-item">
            <Link to="/" className="contact-us__footer-link">
              Terms of Use
            </Link>
          </li>
          <li className="contact-us__footer-item">
            <Link to="/" className="contact-us__footer-link">
              Privacy
            </Link>
          </li>
          <li className="contact-us__footer-item">
            <Link to="/" className="contact-us__footer-link">
              Cookie Preferences
            </Link>
          </li>
          <li className="contact-us__footer-item">
            <Link to="/" className="contact-us__footer-link">
              Corporate Information
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default SimpleFooter;
