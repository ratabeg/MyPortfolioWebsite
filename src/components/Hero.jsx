import { FaArrowDown, FaDownload } from "react-icons/fa6";
import style from "./Hero.module.css";
import Socials from "./Socials";

function Hero() {
  return (
    <section className={style.hero} aria-labelledby="hero-title">
      <div className={style.terminal}>
        <div className={style.terminalBar} aria-hidden="true">
          <span className={style.windowControls}><i /><i /><i /></span>
          <span>raouf_portfolio.exe</span>
          <span className={style.secure}>● SECURE</span>
        </div>
        <div className={style.terminalScreen}>
          <div className={style.bootLog} aria-hidden="true">
            <p><span>[OK]</span> Loading developer profile...</p>
            <p><span>[OK]</span> Connecting projects and experience...</p>
            <p><span>[OK]</span> Portfolio interface ready.</p>
          </div>
          <div className={style.heroContent}>
            <p className={style.prompt}><span>visitor@portfolio</span>:~$ whoami<i aria-hidden="true" /></p>
            <h1 className={style.title} id="hero-title">
              <span>Front-end developer</span>
              <strong>Raouf Atabeg</strong>
            </h1>
            <p className={style.quote}>Building responsive interfaces and useful digital experiences.</p>
            <Socials />
            <div className={style.actions}>
              <a className={style.workButton} href="#projects">
                <span>View My Work</span>
                <span className={style.workIcon} aria-hidden="true"><FaArrowDown /></span>
              </a>
              <a className={style.downloadButton} href="/Resume.pdf" download>
                <span>Download CV</span>
                <span className={style.downloadIcon} aria-hidden="true"><FaDownload /></span>
              </a>
            </div>
            <p className={style.availability}><span aria-hidden="true" /> Available for new opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
