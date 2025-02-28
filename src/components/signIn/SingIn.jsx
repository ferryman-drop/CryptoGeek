
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/AuthSlice.js";
import './signIn.css';

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth); // Отримуємо стан з Redux

  const handleSubmit = async (event) => {
    event.preventDefault();

  
    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      alert("Login successful!");
      navigate("/");
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
              <button type="submit" className="modal-link" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign in"}
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