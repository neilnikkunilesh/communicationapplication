import React, { useState } from "react";
import styles from "./LoginModule.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  debugger;
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if the email and password fields are empty
    if (!email || !password) {
      setError("Both username and password are required.");
      return;
    } else {
      setError("");
    }

    // check if email is exist in localstorage or not
    let users = JSON.parse(localStorage.getItem("users"));
    const isUserExist = users.some(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (isUserExist) {
      navigate("/login-success", { state: { email } });
    } else {
      setError("Either email or password is incorrect");
    }
  };
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.sectionLoginForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
