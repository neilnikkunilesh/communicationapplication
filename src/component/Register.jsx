import React from "react";
import { useNavigate } from "react-router-dom";

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
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // reset the form
    e.target.reset();
    navigate("/register-success");
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={registerOnSubmit}>
        Full Name : <input type="text" name="fullname" id="fullname" />
        Email : <input type="email" name="email" id="email" />
        Password : <input type="password" name="password" id="password" />
        Confirm Password :{" "}
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
