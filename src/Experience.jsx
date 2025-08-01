import React, { useState } from "react";
import style from "./Experience.module.css";

function Experience() {

  const workExperience = [
    {
    title:"Front End Developer",
    company:"LobbyIQ & Queen St Analytics",
    location:"London, Ontario Canada",
    desc:"Creating responsive, user-friendly interfaces that align with modern design trends and performance standards",
    techStack:["Javascript","Typescript","Python","C#"]
  },
  {
    title:"Wordpress Developer",
    company:"MindPress Inc",
    location:"Toronto, Canada",
    desc:"Specializing in custom themes, plugins, and dynamic content solutions that empower businesses to manage and grow their websites with ease. ",
    techStack:["WordPress","PHP","SQL"]
  },
  {
    title:"IT Admin",
    company:"Western University",
    desc:"Provided technical support and system administration for faculty, staff, and students. Managed user accounts, maintained network integrity, and ensured smooth operation of campus-wide IT services.",
    location:"London, Canada",
    techStack:["Javascript","Golang","C#"]
  },

  ] 

  const [currentExperience,setCurrentExperience] = useState(workExperience[2]);


  return (
    <section id="experience" className={style.experience}>
      <h2 className={style.title}>My Experience_</h2>
      {/* Add your experience details here */}
      <div className={style.experienceContainer}>
        <ul>
           <p className={style.instructions}>* Hover over an experience card for more details.</p>
          {
            workExperience.map((data,key)=>{
              return(
               
                <li onMouseOver={()=>setCurrentExperience(workExperience[key])} className={style.jobList}>
                    <h3>{data.title}</h3>
                    <h4>{data.company}</h4>
                    <p>{data.location}</p>
                </li>
          
              )
            })
          }
    
        </ul>

        <div className={style.currentExperience}>
          <li>
            <span className={style.currentExperienceTitle}>
              {/* <h3>Software Engineer @ Tech Company</h3> */}
              <h3>{currentExperience.title}</h3>
              <h4>{currentExperience.company}</h4>

              <p>{currentExperience.location}</p>
            </span>
            <p>{currentExperience.desc}</p>
          </li>

            <h3 className={style.technologies}>Technologies</h3>
            <div className={style.stackContainer}>
              {
                currentExperience.techStack.map((i)=>{
                  return(
                  <p className={style.techStack}>{i}</p>
                  )
                })
              }
              {/* <p className={style.techStack}>Javascript</p>
              <p className={style.techStack}>C++</p>
              <p className={style.techStack}>Go Lang</p> */}
            </div>

       
        </div>
      </div>
    </section>
  );
}

export default Experience;
