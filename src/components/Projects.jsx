import React, { useRef, useState} from 'react';
import { useSpring, animated } from '@react-spring/web';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

const ProjectsCarousel = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 });
  const handleDragStart = (e) => e.preventDefault();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChanged = (event) => {
    setCurrentIndex(event.item);
  };

  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const responsive = {
    0: { items: 1 }
  };

  const items = [
    <div className="item" data-value="1">
      <img className="d-block w-100 carousel-image" src="proj1.png" alt="Sokoban AI" onDragStart={handleDragStart} role="presentation"/>
      <strong>Sokoban AI</strong>
    </div>,
    <div className="item" data-value="2">
      <img className="d-block w-100 carousel-image" src="proj2.png" alt="MERN Website" onDragStart={handleDragStart} role="presentation" />
      <strong>MERN Website</strong>
    </div>,
    <div className="item" data-value="3">
      <img className="d-block w-100 carousel-image" src="proj3.png" alt="Valentines Website" onDragStart={handleDragStart} role="presentation"/>
      <strong>Website</strong>
    </div>,
    <div className="item" data-value="4">
      <img className="d-block w-100 carousel-image" src="proj4.png" alt="Valentines Website" onDragStart={handleDragStart} role="presentation" />
      <strong>NLP Challenge</strong>
  </div>
  ];

  return (
    <animated.div style={{
      ...props,
      backgroundImage: 'url(hero3.png)',
      bbackgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}  className="projects">
      <div style={{ width: 800}} className="window">
        <div style={{padding: '9px 5px 9x 3px'}} class="title-bar">
        <div class="title-bar-text">Projects.exe</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close"></button>
        </div>
      </div>
      <div style={{
        margin: '0px 3px 6px 3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'column'
      }} className="window-body">
      <div className="carousel-body">
        <AliceCarousel
          mouseTracking
          ref={carouselRef}
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayInterval={3000}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={handleSlideChanged}
          infinite
        />
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevClick}>{'<'}</button>
        <button onClick={handleNextClick}>{'>'}</button>
      </div>
      </div>
      <div class="status-bar">
      <p class="status-bar-field">Press F1 for help</p>
      <p class="status-bar-field">Slide {currentIndex + 1}</p>
      <p class="status-bar-field">CPU Usage: 14%</p>
      </div>

      </div>
      
    </animated.div>
  );
};

export default ProjectsCarousel;

