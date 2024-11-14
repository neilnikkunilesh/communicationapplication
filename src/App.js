import React from "react";
import ReactDOM from "react-dom";

import Home from "./component/Home";
import Login from "./component/Login";
import LoginSuccess from "./component/LoginSuccess";
import Register from "./component/Register";
import RegistrationSuccess from "./component/RegistrationSuccess";

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Home />
      <Login />
      <LoginSuccess />
      <Register />
      <RegistrationSuccess />
    </div>
  );
}
