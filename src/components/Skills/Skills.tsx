import React from 'react';
import styles from './Skills.module.css';
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";




const skills = [
  { name: 'TypeScript', icon: <SiTypescript />},
  { name: 'React', icon: <FaReact />},
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Vercel', icon: <IoLogoVercel />},
  { name: 'Next.js', icon: <SiNextdotjs />},
];

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <div className="container">
      <h2>Skills</h2>
      <div className={styles.skillIcons}> 
        {skills.map(skill => (
          <div key={skill.name}   className={styles.skillIconWrapper}>
           <span className={styles.skillIcon}> {skill.icon}</span>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
