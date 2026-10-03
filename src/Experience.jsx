import { useState } from "react";
import { FaArrowUpRightFromSquare, FaBriefcase, FaLocationDot } from "react-icons/fa6";
import style from "./Experience.module.css";

const workExperience = [
  {
    id: "bolder-apps", period: "APR 2026 — PRESENT", title: "Copywriter & Video Editor",
    company: "Bolder Apps", location: "New York, NY · Remote", status: "CURRENT",
    description: "Communicating complex AI and technical concepts clearly for developer and technical audiences while working within tight production cycles.",
    highlights: ["Translate technical ideas into accessible content", "Create material for developer-focused audiences", "Deliver polished work on fast production schedules"],
    techStack: ["Technical Writing", "Video Editing", "AI Content"],
  },
  {
    id: "freelance", period: "AUG 2023 — PRESENT", title: "Full-Stack Web Developer",
    company: "Self-Employed", location: "Remote", status: "CURRENT",
    description: "Developing and deploying responsive full-stack applications for clients, from technical discovery through production delivery.",
    highlights: ["Build scalable client applications across the full stack", "Integrate APIs, authentication, and cloud services", "Translate requirements into custom solutions on schedule"],
    techStack: ["React", "TypeScript", "Java", "Python", "SQLite", "AWS", "Azure"],
  },
  {
    id: "a77", period: "APR 2025 — JAN 2026", title: "Junior Software Engineer",
    company: "A77 Growth Marketing", location: "Toronto, Ontario", status: "COMPLETED",
    description: "Shipped client-facing tools and modernized production backend systems while adding AI-powered interactions and improving cloud delivery workflows.",
    highlights: ["Designed client-facing tools with React, HTML, and CSS", "Refactored Java, Python, and Go backend systems", "Integrated ChatGPT APIs and automated AWS deployments with CI/CD"],
    techStack: ["React", "Java", "Python", "Go", "REST APIs", "AWS", "GitHub Actions"],
  },
  {
    id: "queenstreet", period: "NOV 2024 — FEB 2025", title: "React Front-End Developer",
    company: "Queen Street Analytics", location: "Toronto, Ontario", status: "COMPLETED",
    description: "Built a custom React experience connected to a headless CMS and created AI-assisted workflows for policy news, newsletters, and subscriber content.",
    highlights: ["Built a React front end backed by a Node.js CMS", "Automated transcript summaries and newsletter publishing with LLMs", "Created membership-based content delivery for subscriber tiers"],
    techStack: ["React", "Node.js", "REST APIs", "LLMs", "Sora", "Headless CMS"],
  },
  {
    id: "mindpress", period: "MAY 2024 — OCT 2024", title: "WordPress Developer & SEO Analyst",
    company: "MindPress", location: "Toronto, Ontario", status: "COMPLETED",
    description: "Maintained production WordPress sites and improved their search visibility through backend troubleshooting and practical technical SEO work.",
    highlights: ["Resolved defects in themes, plugins, and custom PHP", "Improved metadata, keywords, internal links, and URL structure", "Managed code changes and deployments with Git"],
    techStack: ["WordPress", "PHP", "SEO", "Git"],
  },
  {
    id: "lobbyiq", period: "NOV 2023 — MAY 2024", title: "Front-End Developer",
    company: "LobbyIQ", location: "London, Ontario", status: "COMPLETED",
    description: "Built policy intelligence dashboards and supporting services that transformed complex datasets into useful, responsive experiences.",
    highlights: ["Created interactive dashboards with React and TypeScript", "Developed Node.js services and APIs for policy data", "Led contributors improving architecture and content delivery"],
    techStack: ["React", "TypeScript", "Node.js", "APIs", "Data Visualization"],
  },
];

function Experience() {
  const [activeId, setActiveId] = useState(workExperience[0].id);
  const current = workExperience.find(({ id }) => id === activeId) ?? workExperience[0];

  return (
    <section id="experience" className={style.experience} aria-labelledby="experience-title">
      <header className={style.sectionHeader}>
        <p><span>visitor@portfolio</span>:~$ history --work</p>
        <h2 id="experience-title">EXPERIENCE.LOG</h2>
        <span>A timeline of roles, responsibilities, and tools.</span>
      </header>

      <div className={style.workspace}>
        <div className={style.timeline} role="tablist" aria-label="Work experience">
          <div className={style.timelineHeader}>
            <span><FaBriefcase aria-hidden="true" /> work_history</span>
            <span>{String(workExperience.length).padStart(2, "0")} records</span>
          </div>
          {workExperience.map((experience, index) => {
            const isActive = experience.id === activeId;
            return (
              <button key={experience.id} id={`experience-tab-${experience.id}`}
                className={`${style.job} ${isActive ? style.activeJob : ""}`} type="button"
                role="tab" aria-selected={isActive} aria-controls="experience-panel"
                onClick={() => setActiveId(experience.id)}>
                <span className={style.jobIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={style.jobCopy}>
                  <span className={style.period}>{experience.period}</span>
                  <strong>{experience.title}</strong><span>{experience.company}</span>
                </span>
                <FaArrowUpRightFromSquare className={style.jobArrow} aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <article id="experience-panel" className={style.detailPanel} role="tabpanel"
          aria-labelledby={`experience-tab-${current.id}`} key={current.id}>
          <div className={style.panelBar}><span>role_details.json</span><i aria-hidden="true">● ● ●</i></div>
          <div className={style.panelBody}>
            <div className={style.roleHeading}>
              <div>
                <p className={style.prompt}><span>$</span> inspect --role {current.id}</p>
                <h3>{current.title}</h3><h4>{current.company}</h4>
              </div>
              <span className={style.roleStatus}><i aria-hidden="true" /> {current.status}</span>
            </div>
            <div className={style.metadata}>
              <span><FaLocationDot aria-hidden="true" /> {current.location}</span><span>{current.period}</span>
            </div>
            <p className={style.description}>{current.description}</p>
            <div className={style.outputBlock}>
              <p className={style.prompt}><span>$</span> cat ./highlights.txt</p>
              <ul>{current.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
            <div className={style.stackBlock}>
              <p className={style.prompt}><span>$</span> list --stack</p>
              <ul aria-label="Technologies used">{current.techStack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
