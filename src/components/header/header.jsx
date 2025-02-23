import { useState, useEffect} from "react";
import { SignUp } from "../SignUp/signUp.jsx";
import "./header.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { SignIn } from "../signIn/SingIn.jsx";

export const Header = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [isSignOpen, setIsSignOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSign = () => setIsSignOpen(true);
  const closeSign = () => setIsSignOpen(false);

  useEffect(() => {
      if (isModalOpen) {
          document.body.classList.add('modal-open');
      } else {
          document.body.classList.remove('modal-open');
      }
  }, [isModalOpen]);

  return (
      <header>
          <div className="header-container">
              <div className="header-first">
                  <h2 className="header-logo">crypto<span className="header-logo-part">geek</span></h2>
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
                 <div className="sing-in">
                      <button onClick={openSign} className="sing-btn">Sign in</button>
                  </div>
                  <div className="sing-in">
                      <button onClick={openModal} className="sing-btn">Sign up</button>
                  </div>
                  <button className="menu-button" onClick={openMenu}>
                      <svg width="30px" height="30px" className="menu-header-icon">
                          <use href="./images/icons.svg#icon-menu" />
                      </svg>
                  </button>
              </div>
          </div>
<SignIn isSignOpen={isSignOpen} closeSign={closeSign}/>
          {/* Модальне вікно для входу */}
          <SignUp isModalOpen={isModalOpen} closeModal={closeModal} />

          {/* Мобільне меню */}
          {isMenuOpen && (
              <div className="mobile-menu-header">
                  <div className="mobile-menu-head">
                      <div className="header-first">
                          <h2 className="header-logo">crypto<span className="header-logo-part">geek</span></h2>
                      </div>
                      <div>
                          <button className="close-menu-btn" onClick={closeMenu}>
                              <svg width="28px" height="28px" className="menu-close-icon">
                                  <use href="/images/icons.svg#icon-x-mark" />
                              </svg>
                          </button>
                      </div>
                  </div>
                  <nav>
                      <ul className="head-menu-mobile">
                          <li className="head-menu-mob-item"><a href="">Academy</a></li>
                          <li className="head-menu-mob-item">
                              <Accordion allowZeroExpanded>
                                  <AccordionItem>
                                      <AccordionItemHeading>
                                          <AccordionItemButton>
                                              Knowledge Base
                                          </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                          <ul className="submenu-mobile-header">
                                              <li className="submenu-mobile-item">
                                                  <div className="header-menu-div">
                                                      <h4 className="hover-menu-title">THEMES</h4>
                                                      <p className="hover-menu-p">Browse by thematic content</p>
                                                  </div>
                                              </li>
                                              <li className="submenu-mobile-item">
                                                  <div className="header-menu-div">
                                                      <h4 className="hover-menu-title">GLOSSARY</h4>
                                                      <p className="hover-menu-p">Definitions of common crypto terms and language</p>
                                                  </div>
                                              </li>
                                              <li className="submenu-mobile-item">
                                                  <div className="header-menu-div">
                                                      <h4 className="hover-menu-title">COLLECTIONS</h4>
                                                      <p className="hover-menu-p">Crypto podcast, books, channels, and games to build your knowledge</p>
                                                  </div>
                                              </li>
                                              <li className="submenu-mobile-item">
                                                  <div className="header-menu-div">
                                                      <h4 className="hover-menu-title">POPULAR COINS</h4>
                                                      <p className="hover-menu-p">These crypto coins have their own blockchains</p>
                                                  </div>
                                              </li>
                                          </ul>
                                      </AccordionItemPanel>
                                  </AccordionItem>
                              </Accordion>
                          </li>
                          <li className="head-menu-mob-item"><a href="">Feed</a></li>
                          <li className="head-menu-mob-item"><a href="">Tools</a></li>
                      </ul>
                  </nav>
              </div>
          )}
      </header>
  );
};