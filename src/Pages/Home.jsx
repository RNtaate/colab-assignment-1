import React from 'react';
import { motion } from 'framer-motion';

import Header from './sections/HomePageSections/Header';
import WhatIDo from './sections/HomePageSections/WhatIDo';
import Projects from './sections/HomePageSections/Projects';
import Contact from './sections/HomePageSections/Contact';
import styles from '../styles/Home.module.css';

export default function Home() {
  const homeVariants = {
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
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.forwardDiv}>
        <Header />
        <WhatIDo />
        <Projects />
      </div>
      <Contact />
    </motion.div>
  );
}
