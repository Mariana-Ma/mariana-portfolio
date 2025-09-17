// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import Art from './pages/Art.jsx';
import Contact from './pages/Contact.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;