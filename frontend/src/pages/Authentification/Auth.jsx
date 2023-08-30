import React, { useState } from "react";
import Register from "../../components/RegisterForm/Register";
import Login from "../../components/Login/Login";
import "./Auth.css";

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div className="auth-page">
      <div className="login_button">
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
        <button type="button" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
      {showRegister && <Register />}
      {showLogin && <Login />}
    </div>
  );
}
