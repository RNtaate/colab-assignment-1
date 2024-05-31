import React from 'react';

import aboutStyles from '../styles/About.module.css';

const PageHeading = ({ elementText, aosStyle, aosDuration }) => (
  <h1
    className={`${aboutStyles.aboutHeading} text-center`}
    data-aos={aosStyle}
    data-aos-duration={aosDuration}
  >
    {elementText}
  </h1>
);

export default PageHeading;
