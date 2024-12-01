import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Reflection from './components/Reflection';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Projects />
      <Reflection />
      <Footer />
    </div>
  );
}

export default App;