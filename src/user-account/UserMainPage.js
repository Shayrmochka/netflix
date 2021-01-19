import React, { useEffect } from "react";
import { UserData } from "../login/utilities/userData";
import { fire } from "../fire";

function UserMainPage() {
  const getData = () => {
    UserData.getUserData();
  };

  const getUserEmail = () => {
    let user = fire.auth().currentUser;
    let name, email, photoUrl, uid, emailVerified, token;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      token = user.getIdToken();
      uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      //console.log(name, email, token);
      //return email;
    }
    console.log(email);
  };

  useEffect(() => {
    getUserEmail();
  }, []);

  return (
    <div>
      <h1>Hi User page</h1>
      <p>Here</p>
      <button onClick={() => getData()}>qwe</button>
    </div>
  );
}

export default UserMainPage;
