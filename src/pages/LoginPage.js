import React from "react";
import "../styles/Login.css";

const LoginPage = () => {
  return (
    <div className="login">
      <label htmlFor="">
        Your name <input type="text" />
      </label>
      <br />
      <label htmlFor="">
        Your password <input type="password" />
      </label>
      <button>Login</button>
    </div>
  );
};

export default LoginPage;
