import React from "react";
import { UserData } from "../login/utilities/userData";

function UserMainPage() {
  const getData = () => {
    UserData.getUserData();
  };

  return (
    <div>
      <h1>Hi User page</h1>
      <p>Here</p>
      <button onClick={() => getData()}>qwe</button>
    </div>
  );
}

export default UserMainPage;
