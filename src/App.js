import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import fire from "./fire";

import MainPage from "./main-page/MainPage";
import SignUp from "./login/SignUp";
import SignIn from "./login/SignIn";
import MoviesLibraryPage from "./movies-library/MoviesLibraryPage";
import ContactUs from "./footer-pages/ContactUs";
import FAQ from "./footer-pages/FAQ";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignIn = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={MainPage} />
        <Route
          path="/login"
          render={(props) => (
            <SignIn
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSignIn={handleSignIn}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          )}
        />
        <Route path="/movies" component={MoviesLibraryPage} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/faq" component={FAQ} />
        <Route path="/signup" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
