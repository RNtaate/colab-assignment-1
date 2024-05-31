import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/ProjectsPage.module.css';
import aboutStyles from '../styles/About.module.css';
import projectsHomeStyles from '../styles/Projects.module.css';
import PageHeading from '../components/PageHeading';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../services/moreProjects';
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

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const getScrollPosition = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition);

    return () => {
      window.removeEventListener('scroll', getScrollPosition);
    };
  }, []);

  return (
    <motion.div
      className={`${aboutStyles.aboutPageMainDiv} ${styles.projectsPageMainDiv}`}
      variants={projectsPageVaraints}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="d-flex flex-col align-items-center">
        <PageHeading
          elementText="PROJECTS"
          aosStyle="fade-right"
          aosDuration="1000"
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

      {showScrollButton && (
        <button
          type="button"
          className={`${styles.scrollTopBtnDiv} justify-content-center align-items-center`}
          onClick={scrollToTop}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <i className="fa-solid fa-angle-up" />
        </button>
      )}
    </motion.div>
  );
};

export default ProjectsPage;
