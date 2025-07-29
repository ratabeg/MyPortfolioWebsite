import React from 'react';
import style from './AboutMe.module.css';
import Profile from '../assets/profile.jpg'; // Assuming the profile image is in the assets folder

function AboutMe() {
    return (
        <section className={style.aboutMe} id="about">
            <h2 className={style.title}>About Me|</h2>
            <img width={250} height={"auto"} src={Profile} alt="Profile" className={style.profileImage} />
            <p>
                Hello! I'm a passionate developer with experience in building modern web applications using React.
                I enjoy solving problems, learning new technologies, and collaborating on exciting projects.
            </p>
        </section>
    );
}

export default AboutMe;