import React from 'react';
import Socials from './Socials';
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} The Wandering Developer. All rights reserved.</p>
            <Socials/>
        </footer>
    );
}

export default Footer;