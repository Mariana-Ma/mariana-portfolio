// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import TextType from '../components/TextType';
import PopupWrapper from "../components/PopupWrapper";
import marianaPicture from '../assets/marianaPicture.png'
import aboutMeIcon from '../assets/aboutMeIcon.png'
import projectsIcon from '../assets/projectsIcon.png'
import artIcon from '../assets/artIcon.png'
import contactMeIcon from '../assets/contactMeIcon.png'

const items = [

];

export default function Home() {
  return (
      <PopupWrapper>
        <h1 className="absolute top-3 left-12 z-50 text-3xl text-black font-minecraft">
          Home
        </h1>
        {/* Top content row */}
        <div className="flex flex-row items-start">
          {/* Photo */}
          <div 
            className="w-64 h-64 rounded-full flex items-center justify-center mt-12 ml-5 text-white text-xl font-bold z-10"
            style={{
              backgroundImage: `url(${marianaPicture})`, // <-- use template string
              backgroundSize: '110%',                 // optional, ensures it covers the div
              backgroundPosition: 'center',
              border: "6px solid #9387dc"
            }}>
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
        <div className="flex justify-center gap-8 mt-8 z-10">
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
      </PopupWrapper>
  );
}