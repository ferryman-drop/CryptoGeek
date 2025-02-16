import { useState } from "react";
import { LoginForm } from "./LoginForm";
import "./header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-first">
          <h2 className="header-logo">
            crypto<span className="header-logo-part">geek</span>
          </h2>
        </div>
        <div className="header-midle">
          <nav>
            <ul className="header-list">
              <li className="header-list-item">
                <a href="">Academy</a>
              </li>
              <li className="header-list-item knowledge-base">
                <p className="header-list-menu">Knowledge base</p>
                <ul className="header-menu">
                  <li className="header-menu-item">
                    <div className="header-menu-div">
                      <h4 className="hover-menu-title">THEMES</h4>
                      <p className="hover-menu-p">Browse by thematic content</p>
                    </div>
                  </li>
                  <li className="header-menu-item">
                    <div className="header-menu-div">
                      <h4 className="hover-menu-title">GLOSSARY</h4>
                      <p className="hover-menu-p">
                        Definitions of common crypto terms and language
                      </p>
                    </div>
                  </li>
                  <li className="header-menu-item">
                    <div className="header-menu-div">
                      <h4 className="hover-menu-title">COLLECTIONS</h4>
                      <p className="hover-menu-p">
                        Crypto podcast, books, channels, and games to build
                        your knowledge
                      </p>
                    </div>
                  </li>
                  <li className="header-menu-item">
                    <div className="header-menu-div">
                      <h4 className="hover-menu-title">POPULAR COINS</h4>
                      <p className="hover-menu-p">
                        These crypto coins have their own blockchains
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="header-list-item">
                <a href="">Feed</a>
              </li>
              <li className="header-list-item">
                <a href="">Tools</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-end">
          <div className="language">
            <select className="select-language">
              <option value="EN" className="language-choise">
                EN
              </option>
              <option value="UK" className="language-choise">
                UK
              </option>
              <option value="PL" className="language-choise">
                PL
              </option>
            </select>
          </div>
          <div className="sing-in">
            <button onClick={openModal} className="sing-btn">
              Sign in
            </button>
          </div>
          <button className="menu-button" onClick={openMenu}>
            <svg width="30px" height="30px" className="menu-header-icon">
              <use href="./images/icons.svg#icon-menu" />
            </svg>
          </button>
        </div>
      </div>

      <LoginForm isModalOpen={isModalOpen} closeModal={closeModal} />
    </header>
  );
};
