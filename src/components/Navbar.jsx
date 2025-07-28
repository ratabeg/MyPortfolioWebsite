import React from 'react';
import Button, { ToggleButton } from './Button';
import style from './Navbar.module.css';
import { useState } from 'react';

import logo from "../assets/dark-theme.svg"; // Assuming the logo is in the assets folder

function Navbar() {

    const [dark, setDark] = useState(false);

    function toggleDarkMode() {
        // alert("Dark mode toggled");
        setDark(prev => !prev);
    }
    
    return (
        <nav className={style.navbar}>
            <h1>The Wandering Developer</h1>

            <ul className={style.navLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ToggleButton onClick={toggleDarkMode} isToggled={dark}>
                <img src={logo} alt="toggle image darkmode" height="20px" />
            </ToggleButton>

        </nav>
    );
}

export default Navbar;