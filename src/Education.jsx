import { FaAward, FaCalendarCheck, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import WesternBadge from "./assets/badgetechnology.png";
import style from "./Education.module.css";

const coursework = [
  { code: "CS-01", group: "Foundations", courses: ["Data Structures", "Algorithms", "Software Design"] },
  { code: "CS-02", group: "Systems", courses: ["Operating Systems", "Computer Architecture", "Compilers"] },
  { code: "CS-03", group: "Data & Networks", courses: ["Database Management", "Networking", "Cyber Security"] },
  { code: "BM-01", group: "Business", courses: ["Business Management"] },
];

function Education() {
  return (
    <section id="education" className={style.education} aria-labelledby="education-title">
      <header className={style.sectionHeader}>
        <p><span>visitor@portfolio</span>:~$ verify --education</p>
        <h2 id="education-title">EDUCATION.CERT</h2>
        <span>Academic foundation and selected areas of study.</span>
      </header>

      <div className={style.educationGrid}>
        <article className={style.degreeCard}>
          <div className={style.cardBar}>
            <span>degree_record.json</span>
            <span>VERIFIED</span>
          </div>
          <div className={style.degreeBody}>
            <div className={style.institution}>
              <div className={style.badgeFrame}>
                <img src={WesternBadge} alt="Western University Technology badge" />
                <span aria-hidden="true" />
              </div>
              <div>
                <p className={style.eyebrow}><FaGraduationCap aria-hidden="true" /> Undergraduate degree</p>
                <h3>Bachelor of Science in Computer Science</h3>
                <h4>Western University</h4>
              </div>
            </div>

            <dl className={style.degreeMeta}>
              <div>
                <dt><FaCalendarCheck aria-hidden="true" /> Graduated</dt>
                <dd>October 2023</dd>
              </div>
              <div>
                <dt><FaLocationDot aria-hidden="true" /> Campus</dt>
                <dd>London, Ontario</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd><i aria-hidden="true" /> Degree completed</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className={style.courseTerminal}>
          <div className={style.terminalTabs}>
            <span>coursework.yml</span>
            <i aria-hidden="true">● ● ●</i>
          </div>
          <div className={style.terminalBody}>
            <p className={style.command}><span>$</span> query --relevant-coursework</p>
            <ul className={style.courseGrid}>
              {coursework.map(({ code, group, courses }) => (
                <li key={code}>
                  <span>{code}</span>
                  <h3>{group}</h3>
                  <p>{courses.join(" · ")}</p>
                </li>
              ))}
            </ul>

            <p className={style.command}><span>$</span> cat ./recognition.txt</p>
            <div className={style.award}>
              <FaAward aria-hidden="true" />
              <div>
                <strong>Entrepreneur Award</strong>
                <span>Business &amp; Social Innovation · Yokohama University, Japan</span>
              </div>
              <i>ACHIEVEMENT.UNLOCKED</i>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
