import React from "react";
import Button from "./Button";
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
        <a href="#projects">
          View My Work 👉
        </a>
        <a href={window.location.href + "/Resume.pdf"} download>
          <Button text={"Download CV"} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
