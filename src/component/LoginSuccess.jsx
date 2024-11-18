import React, { useEffect, useState } from "react";
import styles from "./LoginSuccessModule.module.scss";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const LoginSuccess = () => {
  const [showLoginMessage, setShowLoginMessage] = useState(true);

  const location = useLocation();

  const { email } = location.state || {};

  useEffect(() => {
    setShowLoginMessage(false);
  }, [location]);
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <NavLink className={styles.navButton} to={"group-chat"}>
          Group Chat
        </NavLink>
        <NavLink className={styles.navButton} to={"manager-users"}>
          Manage Users
        </NavLink>
        <NavLink className={styles.navButton} to={"manage-documents"}>
          Manage Documents
        </NavLink>
        <NavLink className={styles.navButton} to={"logout"}>
          Logout
        </NavLink>
      </header>
      <main className={styles.mainContent}>
        <div>
          <Outlet />
        </div>
        {showLoginMessage && (
          <div>
            <h1 className={styles.title}>Login Successful</h1>
            <p className={styles.welcomeMessage}>
              <strong>Welcome!</strong> {email}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default LoginSuccess;
