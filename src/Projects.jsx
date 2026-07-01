import styles from "./Projects.module.css";
import Card from "./components/Card";
import Button from "./components/Button";
import tweentyfourtyeight from "./assets/2048.png"; // Assuming the profile image is in the assets folder
import theCentralAsianChronicles from "./assets/theCentralAsianChronicles.png"; // Assuming the profile image is in the assets folder
import Profile from "./assets/profile.jpg"; // Assuming the profile image is in the assets folder
import Carousel from "./components/Carousel";

function Projects() {
  const projectData = [
    {
      title: "My Website Portfolio",
      subTitle: "React Portfolio",
      imageURL: Profile,
      content:
        "A personal portfolio website built with React showcasing my projects and skills.",
      link: "https://ratabeg.cv",
    },
    {
      title: "The Central Asian Chronicles",
      subTitle: "E-commerce Store",
      imageURL: theCentralAsianChronicles,
      content:
        "A WordPress-powered publication dedicated to exploring the rich culture, history of Central Asia.",
      link: "https://thecentralasianchronicles.asia/",
    },
    {
      title: "2048 Game",
      imageURL: tweentyfourtyeight,
      subTitle: "Blog Platform",
      content:
        "2048 is a single-player sliding block puzzle game. The objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.",
      link: "https://ratabeg.github.io/2048-game/",
    },
      {
      title: "2048 Game",
      imageURL: tweentyfourtyeight,
      subTitle: "Blog Platform",
      content:
        "2048 is a single-player sliding block puzzle game. The objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.",
      link: "https://ratabeg.github.io/2048-game/",
    },
     {
      title: "My Website Portfolio",
      subTitle: "React Portfolio",
      imageURL: Profile,
      content:
        "A personal portfolio website built with React showcasing my projects and skills.",
      link: "https://ratabeg.cv",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <span>
        <h2 className={styles.title}>My Projects|</h2>
        <h2 className={styles.subTitle}>A Showcase of What I’ve Built</h2>
      </span>

      <Carousel>
        {projectData.map((project, index) => (
          <Card key={index} {...project} className={styles.projectCard} />
        ))}
      </Carousel>
    </section>
  );
}

export default Projects;
