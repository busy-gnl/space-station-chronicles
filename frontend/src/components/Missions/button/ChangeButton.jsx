import React from "react";
import "./button.css";

export default function ChangeButton({ changeMission }) {
  return (
    <button
      className="missions-change-button"
      type="button"
      onClick={() => changeMission()}
    >
      Next
    </button>
  );
}
