import React from 'react';
import { motion } from 'framer-motion';

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
      variants={projectsPageVaraints}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Projects Page</h1>
    </motion.div>
  );
};

export default ProjectsPage;
