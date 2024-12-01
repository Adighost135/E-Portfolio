import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Footer = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  return (
    <animated.div style={props} className="footer">
      <strong>Contact:</strong>
      <p>Email: bryce_andrei_c_miranda@dlsu.edu.ph </p>
      <p>Phone: 0917 778 5212</p>
      <p>Github: https://github.com/Adighost135</p>
    </animated.div>
  );
};

export default Footer;