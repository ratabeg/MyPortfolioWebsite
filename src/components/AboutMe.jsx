import React from "react";
import style from "./AboutMe.module.css";
import Profile from "../assets/profile.jpg"; // Assuming the profile image is in the assets folder

function AboutMe() {
  return (
    <section className={style.aboutMe} id="about">
      <h2 className={style.title}>About Me|</h2>
      <div className={style.content}>
      <img
        width={300}
        height={"auto"}
        src={Profile}
        alt="Profile"
        className={style.profileImage}
      />
      <p>
        I'm a passionate developer with a love for creating innovative
        solutions. I enjoy exploring new technologies and continuously improving
        my skills. My journey in tech has been a blend of learning, building,
        and sharing knowledge. I'm excited to connect with like-minded
        individuals and contribute to meaningful projects. When I'm not coding,
        you can find me exploring the outdoors, reading, or diving into the
        latest tech trends. Feel free to reach out if you'd like to collaborate
        or just chat about tech!
      </p>
      </div>
    </section>
  );
}

export default AboutMe;
