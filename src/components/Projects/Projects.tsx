import styles from "./Projects.module.css";

const projects = [
  {
    number: "01",
    title: "JobDone",
    category: "Full-stack SaaS",
    description:
      "A quote-building and business management platform designed to help tradespeople create, manage and send professional quotes.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    link: "https://job-done-pi.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "Task Management",
    category: "Web Application",
    description:
      "A task management application built around a simple idea: create something I'd genuinely enjoy using.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/jordanfh1/task-management",
  },
  {
    number: "03",
    title: "Weather Near Me",
    category: "API Application",
    description:
      "A lightweight weather application using an external API to provide useful weather information for a selected location.",
    technologies: ["React", "JavaScript", "REST API"],
    link: "https://github.com/jordanfh1/weatherNearMe",
  },
];

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>03 / Selected work</span>

        <h2>
          Things I&apos;ve
          <br />
          <span>built.</span>
        </h2>

        <p>
          A selection of projects, experiments and applications I&apos;ve
          built while learning, solving problems and occasionally breaking
          things.
        </p>
      </div>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <article
            key={project.number}
            className={`${styles.project} ${
              project.featured ? styles.featured : ""
            }`}
          >
            <div className={styles.projectBackground} />

            <div className={styles.projectTop}>
              <span className={styles.projectNumber}>
                {project.number}
              </span>

              <span className={styles.projectCategory}>
                {project.category}
              </span>
            </div>

            <div className={styles.projectBody}>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className={styles.projectLink}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={`View ${project.title}`}
              >
                <span>View project</span>
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;