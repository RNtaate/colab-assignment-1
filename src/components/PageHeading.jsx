import React from 'react';
import PropTypes from 'prop-types';

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

PageHeading.defaultProps = {
  elementText: 'ABOUT',
  aosStyle: 'fade-up',
  aosDuration: '1000',
};

PageHeading.propTypes = {
  elementText: PropTypes.string,
  aosStyle: PropTypes.string,
  aosDuration: PropTypes.string,
};

export default PageHeading;
