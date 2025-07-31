import React from 'react';
import Button from './Button';
import style from './Hero.module.css';
import Socials from './Socials';
import Typewriter from '../hooks/useTypewriter';

function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.heroContent}>
                <h1 className={style.title}>Hi! I'm Raouf 👋</h1>
                {/* <h1>Welcome to My Portfolio</h1> */}
                {/* <p>I'm Raouf Atabeg, a passionate developer.</p> */}
                <Socials/>
                <Typewriter text= "I'm a developer!"/>
                <a href="#projects" className="hero-btn">View My Work</a>
                <Button text={"Download CV"}/>
            </div>
        </section>
    );
}

export default Hero;