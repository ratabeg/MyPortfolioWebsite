import { FaBriefcase, FaCodeBranch, FaLocationDot } from "react-icons/fa6";
import Profile from "../assets/profile.jpg";
import style from "./AboutMe.module.css";

const skills = ["React", "TypeScript", "JavaScript", "WordPress", "PHP", "Python", "Go", "Git"];

function AboutMe() {
  return (
    <section className={style.aboutMe} id="about" aria-labelledby="about-title">
      <header className={style.sectionHeader}>
        <p><span>visitor@portfolio</span>:~$ open profile</p>
        <h2 id="about-title">PROFILE://RAOUF</h2>
        <span>Identity, experience, and the tools behind the work.</span>
      </header>

      <div className={style.profileGrid}>
        <article className={style.identityCard}>
          <div className={style.cardBar}>
            <span>identity.json</span>
            <span>RA-001</span>
          </div>
          <div className={style.photoFrame}>
            <img src={Profile} alt="Raouf Atabeg" />
            <span aria-hidden="true">SCANNING PROFILE</span>
          </div>
          <dl className={style.identityData}>
            <div>
              <dt><FaBriefcase aria-hidden="true" /> Role</dt>
              <dd>Front-end Developer</dd>
            </div>
            <div>
              <dt><FaLocationDot aria-hidden="true" /> Location</dt>
              <dd>London, Ontario</dd>
            </div>
            <div>
              <dt><FaCodeBranch aria-hidden="true" /> Focus</dt>
              <dd>Interfaces &amp; web solutions</dd>
            </div>
          </dl>
          <p className={style.status}><i aria-hidden="true" /> Open to opportunities</p>
        </article>

        <article className={style.bioTerminal}>
          <div className={style.terminalTabs}>
            <span className={style.activeTab}>about.txt</span>
            <span>stack.config</span>
            <i>● ● ●</i>
          </div>
          <div className={style.terminalBody}>
            <p className={style.command}><span>$</span> cat ./profile/about.txt</p>
            <div className={style.bioCopy}>
              <p>
                I&apos;m a front-end developer based in London, Ontario, with experience building
                responsive interfaces, WordPress solutions, and internal tools.
              </p>
              <p>
                I enjoy turning complex requirements into clear, dependable experiences and
                working across the gap between design and implementation.
              </p>
            </div>

            <p className={style.command}><span>$</span> list --skills</p>
            <ul className={style.skills} aria-label="Technologies">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>

            <p className={style.command}><span>$</span> cat ./profile/offline.txt</p>
            <p className={style.offline}>Outdoors, reading, and keeping up with the latest technology.</p>
            <p className={style.ready}><span>[READY]</span> Let&apos;s build something useful.<i aria-hidden="true" /></p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
