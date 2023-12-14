import React, { useState, useEffect } from "react";
import { fetchUserProfile, updateUserProfile } from "../../services/ApiService";
import "./Profile.css";

export default function Profile() {
  const userId = localStorage.getItem("userId");

  const [userProfile, setUserProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    hashedPassword: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserProfile(userId);
        setUserProfile(data);
      } catch (error) {
        setMessage(
          `Échec du chargement du profil utilisateur: ${error.message}`
        );
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(userId, userProfile);
      setMessage("Profil mis à jour avec succès");
    } catch (error) {
      setMessage(`Échec de la mise à jour du profil: ${error.message}`);
    }
  };

  return (
    <div className="profile-page">
      <h1>Votre Profil</h1>
      <h2>Mettez à jour vos informations</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userProfile.email}
          onChange={handleInputChange}
        />
        <label htmlFor="firsName">Prénom:</label>
        <input
          type="text"
          name="firstName"
          value={userProfile.firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="lastName">Nom de famille:</label>
        <input
          type="text"
          name="lastName"
          value={userProfile.lastName}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Adresse:</label>
        <input
          type="text"
          name="address"
          value={userProfile.address}
          onChange={handleInputChange}
        />
        <label htmlFor="phoneNumber">Numéro de téléphone:</label>
        <input
          type="text"
          name="phoneNumber"
          value={userProfile.phoneNumber}
          onChange={handleInputChange}
        />
        <label htmlFor="hashedPassword">Mot de passe:</label>
        <input
          type="password"
          name="hashedPassword"
          value={userProfile.hashedPassword}
          onChange={handleInputChange}
        />
        <button className="profile-update-button" type="submit">
          Mettre à jour
        </button>
      </form>
      {message && <div className="success-update">{message}</div>}
    </div>
  );
}
