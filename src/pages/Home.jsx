// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import TextType from '../components/TextType';
import PopupWrapper from "../components/PopupWrapper";
import marianaPicture from '../assets/marianaPicture.png'
import aboutMeIcon from '../assets/aboutMeIcon.png'
import projectsIcon from '../assets/projectsIcon.png'
import artIcon from '../assets/artIcon.png'
import contactMeIcon from '../assets/contactMeIcon.png'

export default function Home() {
  return (
      <PopupWrapper>
        <div className="h-screen overflow-hidden">
          <h1 className="absolute top-3 left-12 z-50 text-3xl text-black font-minecraft">
            Home
          </h1>
          {/* Top content row */}
          <div className="flex flex-row items-start">
            <div className="flex flex-col items-center ml-5 mt-14">
              {/* Photo */}
              <div 
                className="w-60 h-60 rounded-full flex items-center justify-center text-white text-xl font-bold z-10"
                style={{
                  backgroundImage: `url(${marianaPicture})`, 
                  backgroundSize: '110%',                 
                  backgroundPosition: 'center',
                  border: "6px solid #9387dc"
                }}>
              </div>
              <div className="text-center mt-1">
                <h1 className="text-base font-garet text-gray-700">Mariana Ma | Northwestern University</h1>
              </div>
            </div>

            {/* Text section */}
            <div className="text-left flex-1 mt-24">
              {/* Typing Text */}
              <div className="mb-4 ml-14">
                <TextType 
                  text={["Hi, I'm Mariana,", "Welcome to my portfolio!"]}
                  typingSpeed={75}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-3xl font-minecraft tracking-wide"
                  textColors={["black"]}
                />
              </div>
              
              {/* Static Paragraph */}
              <p className="text-2xl ml-14 mt-10 text-gray-700 font-garet">
                Computer scientist, analyst, aspiring SWE, and designer (all art on this page made by me!).
              </p>

            </div>
          </div>

          {/* Buttons row at bottom */}
          <div className="absolute bottom-10 left-0 w-full flex justify-center gap-8 mt-8 z-10">
            <Link to="/aboutme">
              <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-110">
                <img
                  src={aboutMeIcon} 
                  alt="About Me" 
                  className="w-24 h-20"
                />
                <span className="text-lg font-garet text-gray-800 text-center">About Me</span>
              </div>
            </Link>

            <Link to="/projects">
              <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-110">
                <img
                  src={projectsIcon} 
                  alt="Projects" 
                  className="w-24 h-20"
                />
                <span className="text-lg font-garet text-gray-800 text-center">Projects</span>
              </div>
            </Link>

            <Link to="/art">
              <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-110">
                <img
                  src={artIcon} 
                  alt="Art & Design" 
                  className="w-24 h-20"
                />
                <span className="text-lg font-garet text-gray-800 text-center">Art & Design</span>
              </div>
            </Link>

            <Link to="/contact">
              <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-110">
                <img
                  src={contactMeIcon} 
                  alt="Contact" 
                  className="w-24 h-20"
                />
                <span className="text-lg font-garet text-gray-800 text-center">Contact Me</span>
              </div>
            </Link>
          </div>
        </div>
      </PopupWrapper>
  );
}