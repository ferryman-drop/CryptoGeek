import { useEffect } from "react";
import "./signUp.css";

export const SignUp = ({ isModalOpen, closeModal }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-modal">
          <h3 className="modal-title">Sign Up</h3>
          <button onClick={closeModal} className="close-modal-btn">
            <svg width="28px" height="28px" className="modal-close-icon">
              <use href="/images/icons.svg#icon-x-mark" />
            </svg>
          </button>
        </div>
        <div className="modal-form-cnt">
          <form className="modal-form">
            <input
              type="email"
              name="user-email"
              className="modal-input"
              id="user-email"
              placeholder="Please enter your email"
            />
            <input type="password"
             name="user-passsword"
            className="modal-input"
             id="user-password" 
             placeholder="Please enter your password"/>
            <div className="form-btns">
              <button className="modal-link">Sign up</button>
              <button className="google-modal">
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