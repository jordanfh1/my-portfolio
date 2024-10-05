const skills = ['TypeScript', 'React', 'JavaScript', 'AWS', 'Next.js'];
const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skill-icons">
      {skills.map(skill => <span key={skill}>{skill}</span>)}
    </div>
  </section>
);

export default Skills;