import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

import ProjectCard from '../../../components/ProjectCard';
import styles from '../../../styles/Projects.module.css';
import projectsData from '../../../services/projects';
import formStyles from '../../../styles/ContactForm.module.css';
import { ANIMATION_NAMES_ARRAY } from '../../../services/HelperConstants';

const Projects = (props, ref) => (
  <section className="bg-secondary text-center" ref={ref}>
    <h2 data-aos="fade-down">PORTFOLIO</h2>
    <div>
      <div className={`${styles.projectsContainer}`}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            name={ANIMATION_NAMES_ARRAY[index % ANIMATION_NAMES_ARRAY.length]}
          />
        ))}
      </div>

      <div className={`${styles.moreButtonDiv}`}>
        <NavLink to="/projects">
          <button
            className={`${formStyles.contactFormSubmitButton} ${styles.moreButton}`}
            type="button"
          >
            MORE PROJECTS
          </button>
        </NavLink>
      </div>
    </div>
  </section>
);

export default forwardRef(Projects);
