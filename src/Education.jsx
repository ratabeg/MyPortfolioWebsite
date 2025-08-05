import React from 'react';
import style from "./Education.module.css";
import Bage from "./assets/badgetechnology.png"; // Assuming the profile image is in the assets folder


function Education() {
    return (
        <section id="education" className={style.education}>
            <h2 className={style.title}>Education|</h2>

            {/* <img src='https://educationontario.com/app/uploads/2022/04/Western_Logo_RGB.jpg' width="500"/> */}
            <span className={style.container}>
            <div className={style.content}>
                <h2>
                <strong>University of Western Ontario</strong> 
                </h2>
                <h3>
                    Bachelor of Computer Science 
                </h3>
                <p>(Sep 2018 - Oct 2023)</p>
            </div>
            <ul className={style.courseList}>
                <li><strong>Coursework: </strong> 
                Math, 
                Data Structures,
                Algorithms, 
                Operating Systems, 
                Computer Architecture, 
                Compilers, 
                Networking, 
                Databases, 
                Distributed Systems, 
                and more</li>
            </ul>
            <img src={Bage} width={150}/>
            </span>
        </section>
    );
}

export default Education;