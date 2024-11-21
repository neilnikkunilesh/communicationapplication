import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      localStorage.removeItem("loggedInUser");
      navigate("/");
    }
  });

  return <div>Logout</div>;
};

export default Logout;
