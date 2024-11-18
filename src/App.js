import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login";
import LoginSuccess from "./component/LoginSuccess";
import Register from "./component/Register";
import RegistrationSuccess from "./component/RegistrationSuccess";

export default function MyApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/login-success",
      element: <LoginSuccess />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/register-success",
      element: <RegistrationSuccess />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Home />
      <Login />
      <LoginSuccess />
      <Register />
      <RegistrationSuccess /> */}
    </div>
  );
}
