import React from 'react';

import ProjectCard from '../../../components/ProjectCard';
import styles from '../../../styles/Projects.module.css';
import projectsData from '../../../services/projects';

const animationNamesArray = ['fade-left', 'fade-up', 'fade-right'];

export default function Projects() {
  return (
    <section className="bg-secondary text-center">
      <h2 data-aos="fade-down">PORTFOLIO</h2>
      <div className={`${styles.projectsContainer}`}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            name={animationNamesArray[index % animationNamesArray.length]}
          />
        ))}
      </div>
    </section>
  );
}
