import React, { forwardRef } from 'react';

import frontendImage from '../../../assets/frontend3.svg';
import backendImage from '../../../assets/backend1.svg';
import mobileImage from '../../../assets/mobile-dev.svg';
import WhatIDoCard from '../../../components/WhatIDoCard';
import whatIDoImage from '../../../assets/whatIDo.svg';
import styles from '../../../styles/WhatIDo.module.css';
import SkillsCarousel from '../../../components/SkillsCarousel';

const WhatIDo = (props, ref) => {
  const svgDimensions = 100;

  return (
    <section
      className={`${styles.whatIDoSection} bg-primary d-flex flex-col align-items-center`}
      ref={ref}
    >
      <h2
        className={`${styles.whatIDoHeading} text-center`}
        data-aos="fade-down"
      >
        WHAT I DO
      </h2>

      <div
        className={`${styles.whatIDoContainer} d-flex align-items-center justify-content-center`}
      >
        <div
          className={`${styles.imageDiv} d-flex align-items-center justify-content-center`}
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          <img src={whatIDoImage} alt="What I do" />
        </div>
        <div
          className={`${styles.cardsContainerDiv} d-flex justify-content-center`}
        >
          <WhatIDoCard
            imgSrc={frontendImage}
            size={svgDimensions}
            title="Frontend Development"
            corner="borderTopRightRadius"
          />
          <WhatIDoCard
            imgSrc={backendImage}
            size={svgDimensions}
            title="Backend Development"
            corner="borderBottomRightRadius"
          />
          <WhatIDoCard
            imgSrc={mobileImage}
            size={svgDimensions}
            title="Mobile Development"
            corner="borderBottomLeftRadius"
          />
        </div>
      </div>

      <SkillsCarousel />
    </section>
  );
};

export default forwardRef(WhatIDo);
