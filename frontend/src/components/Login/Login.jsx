import React, { useState, useContext } from "react";
import jwtDecode from "jwt-decode"; // eslint-disable-line
import { Navigate } from "react-router-dom";
import Toast from "../Toast/Toast";
import { UserContext } from "../../contexts/UserContextProvider";
import "./Login.css";

function Login() {
  const { setIsLogged } = useContext(UserContext);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [isToastVisible, setToastVisibility] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      hashedPassword: password,
    };
    console.info("user :>> ", user);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(`${backendURL}/auth/login`, requestOptions);
      const data = await response.json();

      if (data.access_token) {
        // Stocker le token pour une utilisation ultérieure
        localStorage.setItem("token", data.access_token);

        // Décoder le JWT pour obtenir l'ID de l'utilisateur
        const decodedToken = jwtDecode(data.access_token);

        const { userId } = decodedToken;
        console.info("decodeToken :>> ", decodedToken);
        // Stocker l'ID utilisateur pour une utilisation ultérieure
        localStorage.setItem("userId", userId);
        setIsLogged(true);
        setToastMessage("Vous êtes connecté");
        setToastVisibility(true);
        setTimeout(() => {
          setToastVisibility(false);
        }, 3000);
        setTimeout(() => {
          setShouldRedirect(true);
        }, 3000);
      }
      if (response.status === 401) {
        // Si les identifiants sont incorrects
        setErrorMessage(
          "Les identifiants sont incorrects. Veuillez réessayer."
        );
      } else if (response.status !== 201) {
        setErrorMessage(
          "Une erreur est survenue. Veuillez réessayer plus tard."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (shouldRedirect) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div className="login">
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="hashedPassword">Mot de passe</label>
        <input
          name="hashedPassword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <Toast show={isToastVisible} message={toastMessage} />
      </form>
    </div>
  );
}

export default Login;
