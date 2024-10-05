import styles from './Skills.module.css';

const skills = [
  { name: 'TypeScript', icon: '' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Jest', icon: '/icons/jest.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
];

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <div className="container">
      <h2>Skills</h2>
      <div className={styles.skillIcons}> 
        {skills.map(skill => (
          <div key={skill.name} className={styles.skillIcon}>
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
