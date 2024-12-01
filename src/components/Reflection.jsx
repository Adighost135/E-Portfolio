import React from 'react';
import { useSpring, animated } from 'react-spring';

const reflections = [
  {
    name: 'Masid-Danas',
    content: 'My experience in resume writing and career preparation was both insightful and challenging. It pushed me to reflect deeply on my skills, accomplishments, and experiences, which helped me articulate my strengths and align them with potential career paths. I observed that I have a strong foundation in technical and analytical skills but need to focus more on effectively communicating my value to others. This process led to self-discoveries about my introverted nature and how it shapes my career choices and interpersonal dynamics.'
  },
  {
    name: 'Suri-Nilay',
    content: 'My knowledge, values, and past experiences heavily influence how I approach my career pursuits. I value structure, integrity, and continuous learning, which drives me towards roles that demand precision and innovation. My assumptions about needing perfection in my work sometimes lead me to be overly cautious, but my attitude of resilience allows me to embrace growth opportunities. These experiences instill confidence in my abilities while teaching me to balance ambition with practicality.'
  },
  {
    name: 'Taya-Kilos',
    content: 'I would like to improve my ability to step out of my comfort zone, particularly in networking and leadership. Building stronger interpersonal communication skills and developing a proactive mindset to seek out opportunities for collaboration are key areas I aim to work on. Additionally, cultivating a balance between perfectionism and flexibility will help me adapt more effectively to challenges.'
  },
  {
    name: 'Ramdam-Pakiramdam',
    content: 'My actions, such as improving technical expertise and focusing on personal development, have significant implications for my career plans and those around me. A more confident and skilled version of myself will not only open doors to fulfilling career opportunities but also enable me to contribute meaningfully to teams and projects. By aligning my actions with my aspirations, I can positively influence my future while inspiring others to pursue their goals with diligence and integrity.'
  }
];

function Reflection() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <div className="reflections">
      {reflections.map((reflection, index) => (
        <animated.div key={index} style={props} className="reflection-item">
          <h2>{reflection.name}</h2>
          <p>{reflection.content}</p>
        </animated.div>
      ))}
    </div>
  );
}

export default Reflection;