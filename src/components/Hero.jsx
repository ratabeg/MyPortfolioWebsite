import React from "react";
import { FaArrowDown, FaDownload } from "react-icons/fa6";
import style from "./Hero.module.css";
import Socials from "./Socials";
import Typewriter from "../hooks/useTypewriter";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.heroContent}>
        <h1 className={style.title}>
          Hi! I'm <span>Raouf</span>
        </h1>
        
        <Socials />
        <h2 className={style.quote}>
         “Bored minds build brilliant things. 🧠”
        </h2>
        {/* <Typewriter text="I'm a developer!"/> */}
        <a className={style.workButton} href="#projects">
          <span>View My Work</span>
          <span className={style.workIcon} aria-hidden="true">
            <FaArrowDown />
          </span>
        </a>
        <a className={style.downloadButton} href="/Resume.pdf" download>
          <span>Download CV</span>
          <span className={style.downloadIcon} aria-hidden="true">
            <FaDownload />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
