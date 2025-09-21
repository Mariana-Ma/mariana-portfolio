// src/App.jsx
import { useState } from 'react'; // <--- add this
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Contact from './pages/Contact';
import { BackgroundProvider, useBackground } from './context/BackgroundContext';
import dayIcon from './assets/dayIcon.png';
import nightIcon from './assets/nightIcon.png';
import dayBackground from './assets/dayBackground.png';
import nightBackground from './assets/nightBackground.png';
import FadeContent from './components/FadeContent';
import './App.css';

function AppContent() {
  const { isDay, toggleBackground } = useBackground();

  const [isFading, setIsFading] = useState(false);

  const handleToggle = () => {
    if (isFading) return; // ignore clicks while fading
    setIsFading(true);
    toggleBackground();
    setTimeout(() => setIsFading(false), 1000); // duration matches FadeContent
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background with fade effect */}
      <FadeContent duration={1000} easing="ease-in-out">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 pixel-art"
          style={{
            backgroundImage: `url(${isDay ? dayBackground : nightBackground})`,
          }}
        />
      </FadeContent>

      {/* Toggle Button - fixed globally */}
      <button
        onClick={handleToggle}
        className="fixed top-7 left-12 flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer transform transition-transform duration-300 hover:scale-110 z-50"
      >
        <img
          src={isDay ? dayIcon : nightIcon}
          alt={isDay ? "Day Mode" : "Night Mode"}
          className="w-24 h-24"
        />
        <div className="text-center text-black font-garet text-lg leading-tight">
          <span className="block">Switch to {isDay ? "Night" : "Day"}</span>
        </div>
      </button>

      {/* Router / pages */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/art" element={<Art />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

// Wrap AppContent with BackgroundProvider
function App() {
  return (
    <BackgroundProvider>
      <AppContent />
    </BackgroundProvider>
  );
}

export default App;