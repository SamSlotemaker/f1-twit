import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const loginPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("redirect");
    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="login-page_background-image"></div>

      <form className="login-page_form" onSubmit={handleLogin}>
        <h1 className="login-page_form_welcome-header">Welcome.</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-page_form_login-button">Login</button>
        <a href="/register" className="login-page_form_register-link">
          I need an account
        </a>
      </form>
    </main>
  );
};

export default loginPage;
