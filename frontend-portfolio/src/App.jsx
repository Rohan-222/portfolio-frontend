import React from 'react';
import BlurBackground from './components/blurBackground'; // Correct import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Contacts from './components/Contacts';
const App = () => {
  return (
    <div>
      <BlurBackground /> {/* Correct JSX usage */}
      <Navbar/>
      <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 '>
        <Navbar/>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Testimonial />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
