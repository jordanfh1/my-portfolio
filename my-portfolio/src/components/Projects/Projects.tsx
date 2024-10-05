import styles from './Projects.module.css';

const projects = [
  {
    title: 'Task Management App',
    description: "I've needed a task management app that I'd enjoy using, so I've challenged myself with creating one",
    link: 'https://github.com/jordanfh1/task-management',
  },
  {
    title: 'Mini Weather App',
    description: 'A weather app which uses a weather API to brings you brief weather info of your selected location.',
    link: 'https://github.com/jordanfh1/weatherNearMe',
  },
];

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className="container">
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <div key={project.title} className={styles.projectCard}>
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
