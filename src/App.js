import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login";
import LoginSuccess from "./component/LoginSuccess";
import Register from "./component/Register";
import RegistrationSuccess from "./component/RegistrationSuccess";
import GroupChat from "./UserComponents/GroupChat";
import ManageUsers from "./UserComponents/ManageUsers";
import ManageDocuments from "./UserComponents/ManageDocuments";
import Logout from "./UserComponents/Logout";

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
      children: [
        {
          path: "group-chat",
          element: <GroupChat />,
        },
        {
          path: "manager-users",
          element: <ManageUsers />,
        },
        {
          path: "manage-documents",
          element: <ManageDocuments />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
      ],
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
    </div>
  );
}
