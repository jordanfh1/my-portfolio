import styles from "./Skills.module.css";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiJest,
  SiGit,
  SiVercel,
  SiZapier,
} from "react-icons/si";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive, modern interfaces.",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    number: "02",
    title: "Backend & Data",
    description: "Building applications beyond the UI.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    number: "03",
    title: "Development",
    description: "Testing, version control and deployment.",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    number: "04",
    title: "Automation",
    description: "Connecting systems and removing repetitive work.",
    skills: [
      { name: "Zapier", icon: <SiZapier /> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>02 / Skills</span>

        <h2>
          The tools
          <br />
          <span>I work with.</span>
        </h2>
      </div>

      <div className={styles.skillGrid}>
        {skillGroups.map((group) => (
          <div key={group.number} className={styles.skillGroup}>
            <div className={styles.groupHeader}>
              <span className={styles.groupNumber}>{group.number}</span>

              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>

            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;