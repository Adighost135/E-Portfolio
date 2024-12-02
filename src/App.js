import React from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
// import Experience from './components/Experience';
// import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import Reflection from './components/Reflection';
import './App.scss';
import "xp.css/dist/XP.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <div id="target-section"/>
      <Profile />
      <Projects />
      {/* <Reflection /> */}
      <Footer />
    </div>
  );
}

export default App;