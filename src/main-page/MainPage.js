import React from "react";
import MainBanner from "./MainBanner";
import Sections from "./Sections";

function MainPage() {
  return (
    <div className="body__background--black">
      <MainBanner />
      <Sections />
    </div>
  );
}

export default MainPage;
