import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./RegistrationSuccessModule.module.scss";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.successContainer}>
      <h2>Registration Successful</h2>
      <h4>Thanks you for your registration</h4>
      <button
        onClick={() => navigate("/")}
        className={styles.backToLoginButton}
      >
        Click to return to home page
      </button>
    </div>
  );
};

export default RegistrationSuccess;
