import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CookiePreferences.css";

function CookiePreferences(props) {
  const dataArray = [
    {
      button: "General Description",
      description: `This cookie tool will help you understand who is using cookies to collect information from your device, for what purposes they use the information, and how you can control the use of cookies for non-essential activities.\nNetflix supports the Self-Regulatory Principles for Online Behavioral Advertising of the Digital Advertising Alliance (DAA), the Digital Advertising Alliance of Canada (DAAC), and the European Interactive Digital Advertising Alliance (EDAA).\nIf you opt out of advertising cookies, you may still see Netflix ads on other sites, but those ads will not be customized by us or our service providers and we will continue to customize your experience on our website via our use of cookies you have not refused.\nAlternatively, privacy settings in most browsers will allow you to prevent your browser from accepting new cookies, have it notify you when you receive a new cookie, or disable cookies altogether. If your browser is set to not accept any cookies, you will not receive Interest-Based Advertising, but your use of the Netflix service may be impaired or unavailable. In addition, if you use our cookie tool to opt-out of certain cookies, your opt-out preferences will be remembered by placing a cookie on your device. It is therefore important that your browser is configured to accept cookies for your preferences to take effect. If you delete or clear your cookies, or if you change which web browser you are using, you will need to set your cookie preferences again.\nNote that from time to time we are over-inclusive in which cookies are listed in the opt-out tool. For example, we do not use Facebook, Twitter or Google cookies in all regions.\nFor more information on our use of cookies, please visit the Cookies and Internet Advertising section of our Privacy Statement.`,
      closed: false,
    },
    {
      button: "Essential Cookies",
      description: `These cookies are strictly necessary to provide our website or online service. For example, we and our Service Providers may use these cookies to authenticate and identify visitors when they use our websites and applications so we can provide our service to them. They also help us to enforce our Terms of Use, prevent fraud and maintain the security of our services.\nLifespan: Most cookies are session cookies (which are only active until you close your browser) or are cookies which are only active for one day. Some cookies are active for a longer time, ranging from 3 to 12 months. The cookies used to prevent fraud and maintain the security or our services are active for a maximum period of 24 months.`,
      closed: true,
    },
    {
      button: "Performance and Functionality Cookies",
      description: `These cookies help us to customize and enhance your online experience with Netflix. For example, they help us to remember your preferences and prevent you from needing to re-enter information you previously provided (for example, during member sign up). We also use these cookies to collect information (such as popular pages, conversion rates, viewing patterns, click-through and other information) about our visitors' use of the Netflix service so that we can enhance and customize our website and service and conduct market research. Deletion of these types of cookies may result in limited functionality of our service.\nLifespan: Most cookies are only active for one day. Some cookies are active for a longer time, ranging from 3 to 12 months.`,
      closed: true,
    },
    {
      button: "Advertising Cookies",
      description: `These cookies use information about your use of this and other websites and apps, your response to ads and emails, and to deliver ads that are more relevant to you and for analytics and optimization purposes. These types of ads are called "interest-based advertising" and will be shown to you outside the Netflix domain. Netflix uses contractual and technical measures designed to prevent advertising partners from accessing information regarding specific title selections you make, URLs you land on, or shows you have watched on our service. We do not share information about title selections or your shows you have watched on our service. The advertising cookies associated with our service belong to our advertising partners as listed under cookie details. Please choose your settings for advertising cookies below. If you want to opt out of the advertising cookies across all websites, go here.\nNote that from time to time we are over-inclusive in which cookies are listed in the opt-out tool. For example, we do not use Facebook, Twitter or Google cookies in all regions.`,
      closed: true,
    },
  ];

  const [cookiesInfo, setCookiesInfo] = useState([]);

  //const clickedButton = React.createContext({closed: true})

  useEffect(() => {
    setCookiesInfo(dataArray);
    // return () => {
    //     cleanup
    // }
  }, []);

  //console.log(cookiesInfo[0].description);
  const showDescriptions = () => {
    console.log(cookiesInfo);
    if (cookiesInfo.length === 0) {
      return (
        <p key={`default-${cookiesInfo.length}`}> {dataArray[0].description}</p>
      );
    } else {
      let currentCookie;
      // console.log(
      //   cookiesInfo
      //     .filter((element) => element.closed === false)
      //     .map((element) => element.description)
      //     .forEach((element, index) => element[0][index])
      // );

      currentCookie = cookiesInfo.filter((element) => element.closed === false);
      console.log(currentCookie.map((element) => element.button));
      //console.log(currentCookie[0].description.split("\n").map((element, index) => element))
      return (
        <div>
          {<h3 className="cookie__title-text">{currentCookie[0].button}</h3>}
          {currentCookie[0].description.split("\n").map((element, index) => (
            <p className="cookie__main-text" key={`description-${index}`}>
              {element}
            </p>
          ))}
        </div>
      );
    }
  };

  const openCookiesInfo = (index, event) => {
    event.preventDefault();
    dataArray[0].closed = true;
    dataArray[index].closed = !dataArray[index].closed;
    //event.target.classList.add("questions__svg-closed");
    setCookiesInfo(dataArray);

    console.log(dataArray);
  };

  return (
    <div id="id-cookie-preferences" className="cookie__wrapper">
      <div className="cookie__block">
        <div className="cookie__header">
          <div className="cookie__logo-block">
            <div className="header__logo cookie__header-logo">
              <svg
                viewBox="0 0 111 30"
                className="header__svg"
                focusable="false"
              >
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
          </div>
          <div className="cookie__text-block">
            <span className="cookie__text">Privacy Preference Center</span>
            <div className="cookie__close-block">
              <button
                className="cookie__button-close"
                onClick={() => props.closeCookiePreferences()}
              >
                <svg
                  viewBox="0 0 20 20"
                  className="cookie__icon-close"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="cookie__main-section">
          <div className="cookie__main-section-left">
            {cookiesInfo.map((element, index) => (
              <div key={index}>
                <button
                  className={
                    element.closed
                      ? `cookie__left-button`
                      : `cookie__left-button cookie__left-button--active`
                  }
                  onClick={(event) => openCookiesInfo(index, event)}
                >
                  {element.button}
                </button>
              </div>
            ))}
          </div>
          <div className="cookie__main-section-right">{showDescriptions()}</div>
        </div>
        <div className="cookie__footer">
          <div className="cookie__footer-text-block">
            <Link to="/" className="cookie__footer-text">
              Powered by
              <span className="cookie__footer-text--green"> OneTrust</span>
            </Link>
          </div>
          <div className="cookie__footer-button-block">
            <button className="cookie__footer-button">Save settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePreferences;
