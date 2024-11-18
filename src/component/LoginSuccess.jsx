import React from "react";
import styles from "./LoginSuccessModule.module.scss";

const LoginSuccess = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <button className={styles.navButton}>Group Chat</button>
        <button className={styles.navButton}>Manage Users</button>
        <button className={styles.navButton}>Manage Documents</button>
        <button className={styles.navButton}>Logout</button>
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Login Successful</h1>
        <p className={styles.welcomeMessage}>
          <strong>Welcome!</strong> anne.hunter@mail.com
        </p>
      </main>
    </div>
  );
};

export default LoginSuccess;
