import React, { useEffect, useState } from "react";
import styles from "./LoginSuccessModule.module.scss";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useOutlet,
} from "react-router-dom";

const LoginSuccess = () => {
  const [showLoginMessage, setShowLoginMessage] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const outlet = useOutlet();

  const { email } = location.state || {};

  useEffect(() => {
    // setShowLoginMessage(false);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/");
    }
  }, [location, navigate]);

  useEffect(() => {
    if (outlet) {
      setShowLoginMessage(false);
    } else {
      setShowLoginMessage(true);
    }
  }, [outlet]);

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
