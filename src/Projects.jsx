import styles from "./Projects.module.css";
import Card from "./components/Card";
import Button from "./components/Button";
import tweentyfourtyeight from './assets/2048.png'; // Assuming the profile image is in the assets folder
import theCentralAsianChronicles from './assets/theCentralAsianChronicles.png'; // Assuming the profile image is in the assets folder
import Profile from './assets/profile.jpg'; // Assuming the profile image is in the assets folder


function Projects() {

    
  const projectData = [
    {
      title: "My Website Portfolio",
      subTitle: "React Portfolio",
      imageURL: Profile,
      content:
        "A personal portfolio website built with React showcasing my projects and skills.",
    },
    {
      title: "The Central Asian Chronicles",
      subTitle: "E-commerce Store",
      imageURL: theCentralAsianChronicles,
      content:
        "A full-featured e-commerce web app with product listings, cart, and checkout functionality.",
    },
    {
      title: "2048 Game",
      imageURL:tweentyfourtyeight,
      subTitle: "Blog Platform",
      content:
        "A modern blog platform allowing users to create, edit, and share posts with a rich text editor.",
    },
  ];
 

  return (
    <section id="projects" className={styles.projects}>
      <span>
        <h2 className={styles.title}>My Projects|</h2>
        <h2 className={styles.subTitle}>A Showcase of What I’ve Built</h2>
      </span>

      <div className={styles.projectContainer}>
        {/* <Button style={styles.leftButton}>&lt;</Button> */}

        
        <div className={`${styles.projectList} `}>
            
          {projectData.map((project, index) => (
            <Card
              key={index}
              className={styles.projectCard}
              title={project.title}
              subTitle={project.subTitle}
              content={project.content}
              imageURL={project.imageURL}
            />
          ))}

        </div>

        {/* <Button style={styles.rightButton}>&lt;</Button> */}
      </div>
    </section>
  );
}

export default Projects;
