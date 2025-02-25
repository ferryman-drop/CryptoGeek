
import { useState } from "react";
import "./signUp.css";
import { BaseURL } from "../../services/ApiIntegration";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSubmit = async (event)=>{
  event.preventDefault();

if(!email || !password){
  return alert("Please enter your email and password");
}


try {
const response = await fetch(`${BaseURL}/register`,{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email, password }),
});

const data = await response.json();

if(response.ok){
  alert("Registration begin successfully!");
  navigate("/login");
  return 
}else{
  alert(data.message || "Registration error");
}
  }
 catch (error) {
  console.error("Помилка:", error);
  alert("Сталася помилка при реєстрації");
};
};
return (
  <div className="backdrop">
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="header-modal">
        <h3 className="modal-title">Sign Up</h3>
    
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
            required
          />
          <input
            type="password"
            name="user-password"
            className="modal-input"
            id="user-password"
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="form-btns">
            <button type="submit" className="modal-link">
              Sign up
            </button>
            <button type="button" className="google-modal">
              <svg width="15px" height="15px" className="google-login-icon">
                <use href="./images/icons.svg#icon-google" />
              </svg>
              <p className="google-enter">Or sign up with Google</p>
            </button>
          </div>
        </form>
      </div>
      <div className="wallet-conection-div">
        <div className="walet-modal-title">
          <svg width="15px" height="15px" className="wallet-modal-icon">
            <use href="/images/icons.svg#icon-wallet" />
          </svg>
          <p className="conect-wallet">OR CONNECT WALLET</p>
        </div>
        <div className="wallets-selection">
          <button className="metamask-btn">
            <svg width="15px" height="15px" className="metamask-icon">
              <use href="/images/icons.svg#metamask" />
            </svg>
            <span className="metamask-p">MetaMask</span>
          </button>
          <button className="other-wallets-btn">
            <svg width="15px" height="15px" className="other-wallets-icon">
              <use href="/images/icons.svg#wallets-icon" />
            </svg>
            <span>Other wallets</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
};