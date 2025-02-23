import { useEffect } from "react";
import './signIn.css';


export const SignIn = ({isSignOpen, closeSign})=>{
    useEffect(() => {
        if (isSignOpen) {
          document.body.classList.add("modal-open");
        } else {
          document.body.classList.remove("modal-open");
        }
      }, [isSignOpen]);
    
      if (!isSignOpen) return null;

      return(
        <div className="backdrop" onClick={closeSign}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="header-modal">
          <h3 className="modal-title">Sign in</h3>
          <button onClick={closeSign} className="close-modal-btn">
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
              <button className="modal-link">Sign in</button>
              <button className="google-modal">
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
      )
};