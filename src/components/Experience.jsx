import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Experience = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });
  const [selectedTab, setSelectedTab] = useState('exp');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <animated.div style={props} className="experience">
    <div style={{ width: 800}} className="window">
      <div style={{padding: '9px 5px 9x 3px'}} class="title-bar">
        <div class="title-bar-text">Credentials</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <menu role="tablist">
          <button
            role="tab"
            aria-selected={selectedTab === 'exp'}
            aria-controls="exp"
            onClick={() => handleTabClick('exp')}
          >
            Experience
          </button>
          <button
            role="tab"
            aria-selected={selectedTab === 'edu'}
            aria-controls="edu"
            onClick={() => handleTabClick('edu')}
          >
            Education
          </button>
        </menu>
        <article role="tabpanel" id="exp" hidden={selectedTab !== 'exp'}>
          <strong>Internal Relations Executive - CSG AY2023-2024</strong>
          <br />
          <em>Served as Internal Relations Executive, fostering collaboration and synergy between various organizations within the school community. Coordinated inter-organization initiatives, facilitated communication to align goals, and organized joint events to strengthen partnerships. Acted as a liaison to ensure smooth operations and effective conflict resolution, contributing to a cohesive and dynamic school environment.</em>
          <br />
          <strong>Internal Relations Executive - CCS Week 2023</strong>
          <br />
          <em>Served as Internal Relations Executive, successfully connecting and coordinating the Lasallian Computer Science Society, Behavioral Sciences Society, Google Developer Student Club for Computer Science Week 2023. Organized joint initiatives, streamlined communication between organizations, and facilitated collaboration to ensure the success of the event. Played a key role in fostering partnerships and enhancing the school community's engagement through well-executed activities.</em>
          <br />
          <strong>Top 50 - Open Kattis</strong>
          <br />
          <em>Check it out yourself! https://open.kattis.com/universities/dlsu.edu.ph</em>
        </article>
        <article role="tabpanel" id="edu" hidden={selectedTab !== 'edu'}>
          <strong>De La Salle University Manila</strong> - Manila
          <br />
          <em>Bachelor of Science in Computer Science Major in Software Technology</em>
          <br />
          <em>Sept 2022 - Aug 2026</em>
          <br />
          <strong>De La Salle University Integrated School</strong> - Laguna
          <br />
          <em>Science, Technology, Engineering, and Mathematics (STEM) Strand</em>
          <br />
          <em>Jun 2019 - Aug 2021</em>
        </article>
      </div>  
      </div>
    </animated.div>
  );
};

export default Experience;