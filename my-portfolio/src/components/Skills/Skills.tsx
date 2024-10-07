import styles from './Skills.module.css';


const skills = [
  { name: 'TypeScript', icon: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png`},
  { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { name: 'Jest', icon: 'https://static-00.iconduck.com/assets.00/jest-icon-1855x2048-ifiupldr.png' },
  { name: 'Vercel', icon: 'https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png' },
  { name: 'Next.js', icon: 'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg' },
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
