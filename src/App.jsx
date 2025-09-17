
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TextType from './components/TextType';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import Art from './pages/Art.jsx';
import Contact from './pages/Contact.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
    
            <div className="h-screen w-screen bg-red flex justify-center items-center relative overflow-hidden">
              {/* Placeholder background */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-200 to-blue-200"></div>

              {/* Popup window */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-20 w-[850px] h-[550px] flex flex-col justify-between">
                {/* Top content row */}
                <div className="flex flex-row items-start gap-6">
                  {/* Photo */}
                  <div className="w-64 h-64 rounded-full bg-pink-300 flex items-center justify-center mt-4 text-white text-xl font-bold">
                    Photo
                  </div>

                  {/* Text */}
                  <div className="text-left flex-1">
                    <TextType 
                      text={["Hi, I'm Mariana,", "Welcome to my portfolio!"]}
                      typingSpeed={75}
                      pauseDuration={2500}
                      showCursor={true}
                      cursorCharacter="|"
                      className = "text-4xl font-bold mt-10 mb-4 ml-8 font-serif"
                      textColors={["black"]}
                    />
                    <p className="ml-8 text-gray-700">
                      I’m a computer science and statistics double major at Northwestern University with a Managerial Analytics Certificate from
                      the Kellogg School of Management. I'm passionate about exploring the intersection of these 3 fields, especially through 
                      academics, projects, and work.
                    </p>
                  </div>
                </div>

                {/* Buttons row at bottom */}
                <div className="flex justify-center gap-4">
                  <Link to="/aboutme">
                    <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-pink-100 transition duration-300">
                      About Me
                    </button>
                  </Link>

                  <Link to="/projects">
                    <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-pink-100 transition duration-300">
                      Projects
                    </button>
                  </Link>

                  <Link to="/art">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
                      Art & Design
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-100 transition duration-300">
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          }
        />

        {/* Other pages */}
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;