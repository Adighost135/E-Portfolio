import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Profile = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.div style={props} className="profile">
        <img src="profilepic.jpg" alt="Adi Profile" height="250" />
        <p>
        I am Bryce Andrei C. Miranda, a computer science student at De La Salle University (DLSU).
        </p>
        <p>
        Reflecting on my personality and abilities based on the APQ results, I recognize that I am a thoughtful, introverted individual who values independence and prefers tasks that allow for concentration and self-direction. I am reliable, organized, and show respect for structure and rules, which fosters trust and dependability in my commitments. My sensitivity enables me to empathize with others and appreciate creative pursuits, which aligns with my balanced approach to both practical and artistic interests. While I am not naturally inclined to leadership roles, I excel as a considerate and cooperative team member, contributing effectively without seeking the spotlight. My calmness and resourcefulness in challenging situations further highlight my capacity for rational decision-making and resilience.
        </p>
        <p>
        Reflecting on my abilities and strengths as highlighted by my PCK results, I excel in mathematical reasoning, verbal communication, and spatial visualization, demonstrating strong analytical and interpretative skills. My natural aptitude for structured problem-solving and detail-oriented tasks complements my preference for roles that involve investigation, precision, and creativity. Additionally, I value a supportive and fair work environment, seek recognition for my contributions, and strive for a sense of accomplishment in all my endeavors. These strengths make me well-suited for careers in STEM, software development, and other intellectually stimulating fields requiring a blend of technical skills and innovative thinking.
        </p>
    </animated.div>
  );
};

export default Profile;