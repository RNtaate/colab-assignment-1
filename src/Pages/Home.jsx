import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Header from './sections/HomePageSections/Header';
import WhatIDo from './sections/HomePageSections/WhatIDo';
import Projects from './sections/HomePageSections/Projects';
import Contact from './sections/HomePageSections/Contact';
import handleIntersecting, {
  handleContactIntersecting,
} from '../Helpers/HandleIntersecting';
import styles from '../styles/Home.module.css';

export default function Home() {
  const headerRef = useRef();
  const whatRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const containerRef = useRef();

  const buttonObj = {
    headerBtn: headerRef,
    whatBtn: whatRef,
    projectBtn: projectsRef,
    contactBtn: contactRef,
  };

  const [headerVisible, setHeaderVisible] = useState(true);
  const [whatVisible, setWhatVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const scrollBtnStatus = {
    headerBtn: headerVisible,
    whatBtn: whatVisible,
    projectBtn: projectsVisible,
    contactBtn: contactVisible,
  };

  const trackMultipleRefsIntersecting = () => {
    const refArray = [
      {
        elementRef: headerRef,
        stateSetter: setHeaderVisible,
      },
      {
        elementRef: whatRef,
        stateSetter: setWhatVisible,
      },
      {
        elementRef: projectsRef,
        stateSetter: setProjectsVisible,
      },
      {
        elementRef: containerRef, // contact button style change depends on the containerRef
        stateSetter: setContactVisible, // this state belongs to the contact ref
      },
    ];
    refArray.forEach((el, index) => {
      if (index === refArray.length - 1) {
        handleContactIntersecting(el, 150);
      } else {
        handleIntersecting(el, 50);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', trackMultipleRefsIntersecting);
    return () => {
      window.removeEventListener('scroll', trackMultipleRefsIntersecting);
    };
  }, []);

  const scrollHomeSection = (refKey) => {
    if (`${refKey}` === 'contactBtn') {
      /* since contact section is positioned sticky,
      we scroll the container div to the bottom in order to reveal the contact section. */

      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      return;
    }

    if (buttonObj[`${refKey}`]) {
      buttonObj[`${refKey}`].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // <------- The Framer motion variants start here. ------->
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

  // <------- The returned output starts here. ------->

  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.homeContainerDiv}
      ref={containerRef}
    >
      <div className={styles.forwardDiv}>
        <Header ref={headerRef} />
        <WhatIDo ref={whatRef} />
        <Projects ref={projectsRef} />
      </div>
      <Contact ref={contactRef} />

      <div
        className={`${styles.scrollBtnsDiv} d-flex flex-col justify-content-center align-items-center`}
      >
        {Object.keys(buttonObj).map((singleKey) => (
          <button
            className={`${styles.scrollBtn} d-flex justify-content-center align-items-center`}
            type="button"
            key={singleKey}
            onClick={() => scrollHomeSection(singleKey)}
          >
            <span
              className={`${styles.scrollBtnSpan} ${
                scrollBtnStatus[`${singleKey}`] ? styles.scollBtnSpanActive : ''
              }`}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
