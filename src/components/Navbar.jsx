// import React, { createContext } from 'react';
import Button, { ToggleButton, SmallButton } from "./Button";
import style from "./Navbar.module.css";
import { useContext, useState } from "react";
import logo from "../assets/dark-theme.svg"; // Assuming the logo is in the assets folder
import BurgerMenu from "../assets/burger-menu.svg"; // Assuming the logo is in the assets folder
import BurgerMenuClose from "../assets/hambger-close.svg"; // Assuming the logo is in the assets folder
import DarkModeContext from "../context/DarkModeContext";

function Navbar() {


  // const [dark, setDark] = useState(false);
  const [isMobilemenuOpen, setIsMobilemenuOpen] = useState(false);

  const { isDark, setIsDark } = useContext(DarkModeContext);

   const toggleMenu = () => {
    setIsMobilemenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <nav className={style.navbar}>

        <h1>The Wandering Developer</h1>

        {/* The Main Navbar */}
        <ul className={style.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>

        <ToggleButton onClick={toggleDarkMode} isToggled={isDark}>
          <img src={logo} alt="toggle image darkmode" height="20px" />
        </ToggleButton>
      </nav>

      <nav className={style.mobileNav}>
        <h1 className={style.mobileTitle}>The Wandering Developer</h1>

        <button
          onClick={() => setIsMobilemenuOpen((prev) => !prev)}
          className={`${style.burgerMenu} ${
            isMobilemenuOpen ? style.open : ""
          }`}
        >
          {isMobilemenuOpen ? (
            <img src={BurgerMenuClose} alt="Burger-menu" height="35px" />
          ) : (
            <img src={BurgerMenu} alt="Burger-menu" height="35px" />
          )}
        </button>

        <div class={style.break}></div>

         <div className={isMobilemenuOpen ? style.menuFullScreen : style.menuClose}>
            <ul className={style.innerMenu}>
              <li>
                <a href="#about" onClick={toggleMenu}>About</a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu}>Experience</a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
              </li>
              <li>
                <a href="#education" onClick={toggleMenu}>Education</a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
