import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./main-page/MainPage";
import SignIn from "./login/SignIn";
import MoviesLibraryPage from "./movies-library/MoviesLibraryPage";
import ContactUs from "./footer-pages/ContactUs";
import FAQ from "./footer-pages/FAQ";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={SignIn} />
        <Route path="/movies" component={MoviesLibraryPage} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/faq" component={FAQ} />
      </div>
    </BrowserRouter>
  );
}

export default App;
