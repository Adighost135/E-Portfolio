import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';


const Hero = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [buttonPosition, setButtonPosition] = useState({ x: 754, y: 367 });
  
  const buttonSpring = useSpring({
    left: buttonPosition.x,
    top: buttonPosition.y,
    config: { tension: 170, friction: 26 }
  });

  const handleAcceptClick = () => {
    const targetSection = document.getElementById('target-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCancelClick = () => {
    const parentDiv = document.querySelector('.header');
    const parentWidth = parentDiv.clientWidth;
    const parentHeight = parentDiv.clientHeight;

    const randomX = Math.floor(Math.random() * (parentWidth - 75)); // 75 is the button width
    const randomY = Math.floor(Math.random() * (parentHeight - 23)); // 23 is the button height

    setButtonPosition({ x: randomX, y: randomY });
  };
  return (
    <animated.div
      style={{
        ...props,
        // backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7)), url(/xpbackground.jpg)', // Replace 'xpbackground.jpg' with the actual image file name
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Ensure the image does not repeat
        height: '101vh' // Adjust the height as needed
      }}
      className="header"
    >
    <div style={{ width: 250 }} className="window">
    <div style={{padding: '9px 5px 9x 3px'}}class="title-bar">
      <div class="title-bar-text">Adi's E-portfolio</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" />
        <button aria-label="Maximize" />
        <button aria-label="Close"></button>
      </div>
    </div>
    <div>
      <div className="window-body">
        <p style={{ textAlign: "center", margin: "0 0 6px 0"}}>Take me there: </p>
        <button className="button-accept" onClick={handleAcceptClick}>Accept</button>
        <animated.button
              className="button-cancel"
              style={{ position: 'absolute', ...buttonSpring }}
              onClick={handleCancelClick}
            >
              Cancel
        </animated.button>
      </div>
    </div>
    </div>
    </animated.div>
  );
};

export default Hero;