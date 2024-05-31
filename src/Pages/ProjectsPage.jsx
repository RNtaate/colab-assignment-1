import React from 'react';
import { motion } from 'framer-motion';

import aboutStyles from '../styles/About.module.css';
import projectsHomeStyles from '../styles/Projects.module.css';
import PageHeading from '../components/PageHeading';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../services/projects';
import { ANIMATION_NAMES_ARRAY } from '../services/HelperConstants';

const ProjectsPage = () => {
  const projectsPageVaraints = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`${aboutStyles.aboutPageMainDiv}`}
      variants={projectsPageVaraints}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="d-flex flex-col align-items-center">
        <PageHeading
          elementText={'PROJECTS'}
          aosStyle={'fade-right'}
          aosDuration={'1000'}
        />

        <section>
          <div className={`${projectsHomeStyles.projectsContainer}`}>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                name={
                  ANIMATION_NAMES_ARRAY[index % ANIMATION_NAMES_ARRAY.length]
                }
              />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
