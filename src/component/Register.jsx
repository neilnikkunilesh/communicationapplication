import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterModule.module.scss";

const Register = () => {
  const navigate = useNavigate();

  const registerOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    let user = {
      fullName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirmPassword: e.target[3].value,
    };

    console.log(user);
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    // find if the user already exist
    const alreadyRegisterUser = users.some(
      (item) => item.email.toLowerCase() === user.email.toLowerCase()
    );

    if (alreadyRegisterUser) {
      alert("User already exist.");
      return;
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // reset the form
    e.target.reset();
    navigate("/register-success");
  };
  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.sectionRegisterForm}>
        <form onSubmit={registerOnSubmit} className={styles.form}>
          <div>
            Full Name : <input type="text" name="fullname" id="fullname" />
          </div>
          <div>
            Email : <input type="email" name="email" id="email" />
          </div>
          <div>
            Password : <input type="password" name="password" id="password" />
          </div>
          <div>
            Confirm Password :{" "}
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>

          <button type="submit" className={styles.formButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
