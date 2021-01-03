import React from "react";
import Footer from "./Footer";
import Questions from "./Questions";

import "./Sections.css";

function Sections() {
  return (
    <div className="sections">
      <div className="sections__wrapper sections__tv">
        <div className="sections__text sections__text--color">
          <h1 className="sections__text--large">Enjoy on your TV.</h1>
          <h2 className="sections__text--small">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div>
          <div className="sections__image">
            <img src="images/tv.png" alt="tv-screen" />
          </div>
          <div className="sections__video">
            <video
              className="sections__video-tv"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="images/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="sections__wrapper sections__download">
        <div className="sections__text sections__text--color">
          <h1 className="sections__text--large">
            Download your shows to watch offline.
          </h1>
          <h2 className="sections__text--small">
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
        <div>
          <div className="sections__image">
            <img src="images/mobile-0819.jpg" alt="mobile-phone" />
          </div>
          <div className="sections__mobile-animation">
            <img
              id="mobile-animation__image-id"
              className="mobile-animation__image"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="mobile-logo"
            />
            <div className="sections__mobile-text-block">
              <span className="sections__mobile-text--white">
                Stranger Things
              </span>
              <span className="sections__mobile-text--blue">
                Downloading...
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sections__wrapper sections__devices">
        <div className="sections__text sections__text--color">
          <h1 className="sections__text--large">Watch everywhere.</h1>
          <h2 className="sections__text--small">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
        <div>
          <div className="sections__image">
            <img src="images/device-pile.png" alt="computer-device" />
          </div>
          <div className="sections__video">
            <video
              className="sections__video-devices"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="images/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Questions />
      <Footer />
    </div>
  );
}

export default Sections;
