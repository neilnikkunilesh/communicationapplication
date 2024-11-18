import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Registration Successful</h2>
      <h4>Thanks you for your registration</h4>
      <button onClick={() => navigate("/")}>
        Click to return to home page
      </button>
    </div>
  );
};

export default RegistrationSuccess;
