import React from 'react';
import styles from './Button.module.css';

const Button = ({ children ,text, onClick, type = 'button'}) => {
    return (
        <button type={type} className={styles.btn} onClick={onClick}>
            {text || children ||'Click Me'}
        </button>
    );
};


export const SmallButton = ({ children, onClick, type = 'button' }) => {
    return (
        <button type={type} className={styles.smallBtn} onClick={onClick}>
            {children || 'Click Me'}
        </button>
    );
};

export const ToggleButton = ({ children, onClick, isToggled }) => {
    return (
        <button className={styles.toggleBtn} onClick={onClick}>
            <div className={`${styles.thumb} ${isToggled ? styles.isToggled : ''}`}>
                {children}
            </div>
        </button>
    );
}

export default Button;