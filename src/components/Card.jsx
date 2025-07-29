import React from 'react';
import styles from './Card.module.css'; // Assuming you have a CSS module for styling
import Button from './Button';

function Card({title,subTitle, content,imageURL}) {
    return (
        <div className={styles.card}>
            <img src={imageURL} width="200px" alt="Project Thumbnail" />
            
            <div className={styles.cardContent}>
                <h2>{title}</h2>
                <h2>{subTitle}</h2>
                <p>{content}</p>
            </div>

            <Button>Check it out...</Button>
        </div>
    );
}

export default Card;