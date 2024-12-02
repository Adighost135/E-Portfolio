import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Profile = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const [selectedTab, setSelectedTab] = useState('exp');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <animated.div style={{
      ...props,
      backgroundImage: 'url(/hero2.png)', // Replace 'hero2.png' with the actual image file name
      backgroundSize: '500px 500px', // Set the size of the background image
      backgroundPosition: '0px 250px', // Position the image at a specific position
      backgroundRepeat: 'no-repeat',
    }} className="profile">
      <div style={{ width: 286, height: 304}} className="window">
        <div style={{padding: '9px 5px 9x 3px'}} class="title-bar">
        <div class="title-bar-text">profilepic.jpg</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close"></button>
        </div>
      </div>
      <div>
        <div style={{margin: '0 0 0 3px'}} className="window-body">
          <img src="profilepic.jpg" alt="Adi Profile" height="280"/>
        </div>
      </div>
      </div>
      <div style={{width: 700}} className="window">
      <div style={{padding: '9px 5px 9x 3px'}} class="title-bar">
        <div class="title-bar-text">About Me - Notepad</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close"></button>
        </div>
      </div>
      <div>
        <button style={{margin: "0 0 0 3px"}} className="notepad-buttons">File</button>
        <button className="notepad-buttons">Edit</button>
        <button className="notepad-buttons">Format</button>
        <button className="notepad-buttons">View</button>
        <button className="notepad-buttons">Help</button>
        <div className="window-body"
        style={{
          backgroundColor: 'white',
          height: '300px',
          padding: '0px 0px 0px 0px',
          margin: '0px 3px 0 3px'
        }}>
        
        {/*
        <p>Reflecting on my personality and abilities based on the APQ results, I recognize that I am a thoughtful, introverted individual who values independence and prefers tasks that allow for concentration and self-direction. I am reliable, organized, and show respect for structure and rules, which fosters trust and dependability in my commitments. My sensitivity enables me to empathize with others and appreciate creative pursuits, which aligns with my balanced approach to both practical and artistic interests. While I am not naturally inclined to leadership roles, I excel as a considerate and cooperative team member, contributing effectively without seeking the spotlight. My calmness and resourcefulness in challenging situations further highlight my capacity for rational decision-making and resilience.</p>
        <p>Reflecting on my abilities and strengths as highlighted by my PCK results, I excel in mathematical reasoning, verbal communication, and spatial visualization, demonstrating strong analytical and interpretative skills. My natural aptitude for structured problem-solving and detail-oriented tasks complements my preference for roles that involve investigation, precision, and creativity. Additionally, I value a supportive and fair work environment, seek recognition for my contributions, and strive for a sense of accomplishment in all my endeavors. These strengths make me well-suited for careers in STEM, software development, and other intellectually stimulating fields requiring a blend of technical skills and innovative thinking.</p>
        <p href='https://dlsu-vcf-csm.symplicity.com/profiles/adi.miranda'>LSlink</p> */}
        <textarea id="text24" 
          style={{
          width: "100%", 
          height: "100%", 
          overflow: "scroll"}}>
            I am Bryce Andrei C. Miranda, a computer science student at De La Salle University (DLSU). Yes you can type here. :D                                                                                                                                                                                                                                                             Reflecting on my personality and abilities based on the APQ results, I recognize that I am a thoughtful, introverted individual who values independence and prefers tasks that allow for concentration and self-direction. I am reliable, organized, and show respect for structure and rules, which fosters trust and dependability in my commitments. My sensitivity enables me to empathize with others and appreciate creative pursuits, which aligns with my balanced approach to both practical and artistic interests. While I am not naturally inclined to leadership roles, I excel as a considerate and cooperative team member, contributing effectively without seeking the spotlight. My calmness and resourcefulness in challenging situations further highlight my capacity for rational decision-making and resilience.                                                                                                                                                     GO AHEAD AND TYPE HERE!!!!

          </textarea>
        </div>
      </div>
      </div>
      <div style={{ width: 600}} className="window">
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

export default Profile;