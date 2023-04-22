import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const {
    title, desc, image, tags, github, live, view,
  } = project;
  return (
    <div
      className={`${styles.projectWrapper} d-flex justify-content-center align-items-center`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className={`${styles.cardDetails} d-flex flex-col justify-content-center align-items-center`}
      >
        <h3>{title}</h3>
        <p>{desc}</p>
        <div
          className={`${styles.projectTagsDiv} d-flex align-items-center justify-content-center`}
        >
          {tags.map((tag) => (
            <span key={`${tag}${crypto.randomUUID()}`}>{tag}</span>
          ))}
        </div>

        <div className={`${styles.linksDiv} d-flex align-items-center`}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <span>
                <i className="fa-brands fa-github" />
              </span>
            </a>
          )}

          {live && (
            <a href={live} target="_blank" rel="noreferrer">
              <span>
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          )}
        </div>

        <span className={styles.viewSpan}>
          <b>VIEW: </b>
          {view}
        </span>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};
