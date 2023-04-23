import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
