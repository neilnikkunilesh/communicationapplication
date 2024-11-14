import React from "react";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button onClick={loginUser}>Login</button>
      </form>
    </div>
  );
};

export default Login;
