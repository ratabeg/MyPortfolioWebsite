import React from 'react';
import styles from "./Socials.module.css"

function Socials() {
    return (
        <div className={styles.socials}>
            {/* Social media links go here */}
            <uL className={styles.socialContainer}>
                <li>
                    <a href='https://www.linkedin.com/in/ratabeg/' className={styles.socialLinkBtn}>
                        <img src='https://img.icons8.com/ios_filled/512/linkedin.png' width={50} alt='Linkedin icon'/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ratabeg' className={styles.socialLinkBtn}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' width={50} alt='Linkedin icon'/>
                    </a>
                </li>
            </uL>
        </div>
    );
}

export default Socials;