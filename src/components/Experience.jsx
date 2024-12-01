import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Experience = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <animated.div style={props} className="experience">
      <h3>Experience</h3>
      <ul>
        <li>
          <strong>Internal Relations Executive - CSG AY2023-2024</strong>
          <br />
          <em>Served as Internal Relations Executive, fostering collaboration and synergy between various organizations within the school community. Coordinated inter-organization initiatives, facilitated communication to align goals, and organized joint events to strengthen partnerships. Acted as a liaison to ensure smooth operations and effective conflict resolution, contributing to a cohesive and dynamic school environment.</em>
        </li>
        <li>
          <strong>Internal Relations Executive - CCS Week 2023</strong>
          <br />
          <em>Served as Internal Relations Executive, successfully connecting and coordinating the Lasallian Computer Science Society, Behavioral Sciences Society, Google Developer Student Club for Computer Science Week 2023. Organized joint initiatives, streamlined communication between organizations, and facilitated collaboration to ensure the success of the event. Played a key role in fostering partnerships and enhancing the school community's engagement through well-executed activities.</em>
        </li>
        <li>
          <strong>Top 50 - Open Kattis</strong>
          <br />
          <em>Check it out yourself! https://open.kattis.com/universities/dlsu.edu.ph</em>
        </li>
      </ul>
    </animated.div>
  );
};

export default Experience;