import React from "react";
import styles from "./LoginModule.module.scss";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.sectionLoginForm}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={styles.input}
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
            />
          </div>
          <button onClick={loginUser} className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
