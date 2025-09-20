// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import TextType from '../components/TextType';
import PopupWrapper from "../components/PopupWrapper";
import dayBackground from '../assets/dayBackground.png';

export default function Home() {
  return (
    <div
      className="h-screen w-screen bg-center bg-cover flex justify-center items-center pixel-art"
      style={{ backgroundImage: `url(${dayBackground})` }}
    >
      {/* Popup window */}
      <PopupWrapper>
        {/* Top content row */}
        <div className="flex flex-row items-start">
          {/* Photo */}
          <div className="w-64 h-64 rounded-full bg-pink-300 flex items-center justify-center mt-16 text-white text-xl font-bold">
            Photo
          </div>

          {/* Text */}
          <div className="text-left flex-1 mt-24">
          {/* Typing text in its own container */}
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

          {/* Static paragraph below */}
          <p className="text-2xl ml-14 mt-10 text-gray-700 font-garet">
            Computer scientist, analyst, aspiring SWE, and designer (all art on this page made by me!).
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
        </PopupWrapper>
    </div>
  );
}