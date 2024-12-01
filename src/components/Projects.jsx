import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

const ProjectsCarousel = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 });

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1  },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <img className="d-block w-100 carousel-image" src="proj1.png" alt="Sokoban AI" onDragStart={handleDragStart} role="presentation"/>
      <p>Sokoban AI</p>
    </div>,
    <div className="item" data-value="2">
      <img className="d-block w-100 carousel-image" src="proj2.png" alt="MERN Website" onDragStart={handleDragStart} role="presentation" />
      <p>MERN Website</p>
    </div>,
    <div className="item" data-value="3">
      <img className="d-block w-100 carousel-image" src="proj3.png" alt="Valentines Website" onDragStart={handleDragStart} role="presentation"/>
      <p>Website</p>
    </div>,
    <div className="item" data-value="4">
      <img className="d-block w-100 carousel-image" src="proj4.png" alt="Valentines Website" onDragStart={handleDragStart} role="presentation" />
      <p>NLP Challenge</p>
  </div>
  ];

  return (
    <animated.div style={props} className="projects">
    <h3>Projects</h3>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="Alternate"
        infinite
      />
    </animated.div>
  );
};

export default ProjectsCarousel;

