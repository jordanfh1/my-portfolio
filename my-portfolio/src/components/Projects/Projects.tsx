import styles from './Projects.module.css';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/projects/project1.jpg',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/projects/project2.jpg',
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className="container">
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <div key={project.title} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
