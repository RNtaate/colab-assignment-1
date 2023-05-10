import React, { forwardRef } from 'react';

import ProjectCard from '../../../components/ProjectCard';
import styles from '../../../styles/Projects.module.css';
import projectsData from '../../../services/projects';

const animationNamesArray = [
  'fade-left',
  'flip-left',
  'fade-right',
  'fade-up',
  'zoom-in',
  'flip-up',
];

const Projects = (props, ref) => (
  <section className="bg-secondary text-center" ref={ref}>
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

export default forwardRef(Projects);
