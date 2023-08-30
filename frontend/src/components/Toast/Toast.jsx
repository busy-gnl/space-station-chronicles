// Toast.js
import React from "react";
import "./Toast.css";

function Toast({ show, message }) {
  if (!show) {
    return null;
  }

  return <div className="toast">{message}</div>;
}

export default Toast;
