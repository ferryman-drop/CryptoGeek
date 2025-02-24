import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/AuthContext";
import './signIn.css';
import { BaseURL } from "../../services/ApiIntegration";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Використання контексту

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Sending request to:", `${BaseURL}/login`); // Логування URL
      console.log("Request body:", JSON.stringify({ email, password })); // Логування тіла запиту
  
      const response = await fetch(`${BaseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log("Response status:", response.status); // Логування статусу відповіді
      const data = await response.json();
      console.log("Response data:", data); // Логування даних відповіді
  
      if (response.ok) {
        login(data.token); // Викликаємо login з контексту
        alert("Login successful!");
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="header-modal">
          <h3 className="modal-title">Sign in</h3>
        </div>
        <div className="modal-form-cnt">
          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="user-email"
              className="modal-input"
              id="user-email"
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="user-password"
              className="modal-input"
              id="user-password"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <div className="form-btns">
              <button type="submit" className="modal-link">
                Sign in
              </button>
              <button type="button" className="google-modal">
                <svg width="15px" height="15px" className="google-login-icon">
                  <use href="./images/icons.svg#icon-google" />
                </svg>
                <p className="google-enter">Or sign in with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};