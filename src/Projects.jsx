import styles from "./Projects.module.css";
import Card from "./components/Card";
import tweentyfourtyeight from "./assets/2048.png"; // Assuming the profile image is in the assets folder
import theCentralAsianChronicles from "./assets/theCentralAsianChronicles.png"; // Assuming the profile image is in the assets folder
import PortfolioPreview from "./assets/laptop.jpg";
import Carousel from "./components/Carousel";
import VoyageNYC from "./assets/voyageNYC.png"; // Assuming the profile image is in the assets folder


function Projects() {
  const projectData = [
    {
      title: "My Website Portfolio",
      subTitle: "React Portfolio",
      imageURL: PortfolioPreview,
      content:
        "A responsive developer portfolio that brings my work, experience, and technical identity together in one interactive interface.",
      link: "https://ratabeg.cv",
      status: "LIVE",
      stack: ["React", "Vite", "CSS Modules"],
      slug: "portfolio-ui",
    },
    {
      title: "The Central Asian Chronicles",
      subTitle: "WordPress Publication",
      imageURL: theCentralAsianChronicles,
      content:
        "An editorial WordPress platform designed to make Central Asian culture, history, and long-form stories easy to explore.",
      link: "https://thecentralasianchronicles.asia/",
      status: "LIVE",
      stack: ["WordPress", "PHP", "SEO"],
      slug: "central-asian-chronicles",
    },
    {
      title: "2048 Game",
      imageURL: tweentyfourtyeight,
      subTitle: "Puzzle Game",
      content:
        "A browser-based recreation of the classic sliding puzzle with responsive controls, score tracking, and smooth tile interactions.",
      link: "https://ratabeg.github.io/2048-game/",
      status: "LIVE",
      stack: ["JavaScript", "HTML", "CSS"],
      slug: "2048-game",
    },
      {
      title: "VoyageNYC",
      imageURL: VoyageNYC,
      subTitle: "Website",
      content:
        "A responsive travel experience for a fictional New York tour company, focused on visual storytelling and clear trip discovery.",
      link: "https://ratabeg.github.io/voyage-nyc/",
      status: "LIVE",
      stack: ["JavaScript", "Responsive UI", "GitHub Pages"],
      slug: "voyage-nyc",
    },
  ];

  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <header className={styles.sectionHeader}>
        <p><span>visitor@portfolio</span>:~$ ls ./featured-work</p>
        <h2 id="projects-title">PROJECTS.DIR</h2>
        <span>Selected builds, experiments, and digital products.</span>
      </header>

      <Carousel>
        {projectData.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </Carousel>
    </section>
  );
}

export default Projects;
