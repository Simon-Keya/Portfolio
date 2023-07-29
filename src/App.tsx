import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

// Import SCSS files
import './App.scss'; // Global styles
import './components/Navbar/Navbar.scss'; // Navbar styles
import './components/Footer/Footer.scss'; // Footer styles
import './components/Home/Home.scss'; // Home component styles
import './components/About/About.scss'; // About component styles
import './components/Projects/Projects.scss'; // Projects component styles
import './components/Contact/Contact.scss'; // Contact component styles
import './components/Skills/Skills.scss'; // Skills component styles

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
