import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard,ArticlesCard } from "./ProjectCard";

export const Projects = () => {
  return (<>
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
    <section className={styles.container} id="articles">
      <h2 className={styles.title}>Articles</h2>
      <div className={styles.projects}>
       
          <ArticlesCard />
     
      </div>
    </section>
    </>
  );
};
