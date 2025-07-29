import React from 'react';
import Button, { ToggleButton,SmallButton } from './Button';
import style from './Navbar.module.css';
import { useState } from 'react';

import logo from "../assets/dark-theme.svg"; // Assuming the logo is in the assets folder
import BurgerMenu from "../assets/burger-menu.svg"; // Assuming the logo is in the assets folder
import BurgerMenuClose from "../assets/hambger-close.svg"; // Assuming the logo is in the assets folder

function Navbar() {

    const [dark, setDark] = useState(false);
    const [isMobilemenuOpen, setIsMobilemenuOpen] = useState(false);

    function toggleDarkMode() {
        // alert("Dark mode toggled");
        setDark(prev => !prev);
    }
    
    return (
        <>
        <nav className={style.navbar}>
            <h1>The Wandering Developer</h1>

            <ul className={style.navLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#Education">Education</a></li>
            </ul>

            <ToggleButton onClick={toggleDarkMode} isToggled={dark}>
                <img src={logo} alt="toggle image darkmode" height="20px" />
            </ToggleButton>

        </nav>

        <nav className={style.mobileNav}>
            <h1 className={style.mobileTitle}>The Wandering Developer</h1>
            
            <button onClick={() => setIsMobilemenuOpen(prev => !prev)} className={`${style.burgerMenu} ${isMobilemenuOpen ? style.open : ''}`}>
            { isMobilemenuOpen ? <img src={BurgerMenuClose} alt="Burger-menu" height="35px" />
            :<img src={BurgerMenu} alt="Burger-menu" height="35px" />
            }
            </button>

            <div class={style.break}></div> 

            {isMobilemenuOpen && (
                <ul className={style.mobileNavLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Skill</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
            </ul>
            )}
            
        </nav>

        </>
    );
}

export default Navbar;