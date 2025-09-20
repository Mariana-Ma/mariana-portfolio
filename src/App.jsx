// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Contact from './pages/Contact';
import { BackgroundProvider, useBackground } from './context/BackgroundContext';
import './App.css';

// Create a wrapper for routes so we can use the background globally
function AppContent() {
  const { backgroundImage, toggleBackground } = useBackground();

  return (
    <div
      className="absolute inset-0 bg-cover bg-center pixel-art"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Router>
        {/* Toggle Button - Fixed globally to top-right */}
        <button
          onClick={toggleBackground}
          className="fixed top-5 right-5 bg-gray-300 px-4 py-2 rounded shadow z-50 hover:bg-gray-400 transition"
        >
          Toggle Day/Night
        </button>

        {/* Routes */}
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