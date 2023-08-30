import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    };
    fetch(`${backendURL}/auth/register`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.info("data :>> ", data));
    setDataForm({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phoneNumber: "",
      hashedPassword: "",
    });
  };
  return (
    <div className="register">
      <h2>Bienvenue créer ton profil !</h2>
      <form className="register_form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={dataForm.email}
          onChange={handleChange}
        />

        <label htmlFor="hashedPassword">Mot de passe </label>
        <input
          type="password"
          name="hashedPassword"
          id="password"
          required
          value={dataForm.hashedPassword}
          onChange={handleChange}
        />

        <label htmlFor="firstname">Prénom (facultatif)</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          value={dataForm.firstname}
          onChange={handleChange}
        />

        <label htmlFor="lastname">Nom (facultatif)</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          value={dataForm.lastname}
          onChange={handleChange}
        />

        <label htmlFor="address">Adresse (facultatif)</label>
        <input
          type="text"
          name="address"
          id="address"
          required
          value={dataForm.address}
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber">Numéro de téléphone (facultatif)</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          required
          value={dataForm.phoneNumber}
          onChange={handleChange}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
