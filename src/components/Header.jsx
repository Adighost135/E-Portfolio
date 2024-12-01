import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Header = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="header">
      <h1>Adi Miranda</h1>
      <h2>Computer Science Major in Software Technology</h2>
    </animated.div>
  );
};

export default Header;