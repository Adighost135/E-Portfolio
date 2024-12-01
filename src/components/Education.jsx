import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Education = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  return (
    <animated.div style={props} className="education">
      <h3>Education</h3>
      <ul>
        <li>
          <strong>De La Salle University Manila</strong> - Manila
          <br />
          <em>Bachelor of Science in Computer Science Major in Software Technology</em>
          <br />
          <em>Sept 2022 - Aug 2026</em>
        </li>
        <li>
          <strong>De La Salle University Integrated School</strong> - Laguna
          <br />
          <em>Science, Technology, Engineering, and Mathematics (STEM) Strand</em>
          <br />
          <em>Jun 2019 - Aug 2021</em>
        </li>
      </ul>
    </animated.div>
  );
};

export default Education;