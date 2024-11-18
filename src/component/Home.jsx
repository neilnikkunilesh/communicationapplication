import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "./HomeModule.module.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.userModule}>
      <h1>Welcome to Users Module</h1>
      <div className={styles.section}>
        <h2>Existing Users</h2>
        <button
          className={styles.actionButton}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
      <div className={styles.section}>
        <h2>New Users</h2>
        <button
          className={styles.actionButton}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
