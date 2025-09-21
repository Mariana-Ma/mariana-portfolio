// src/pages/Art.jsx
import { useState } from 'react';

import PopupWrapper from "../components/PopupWrapper";
import nuaznLogo from "../assets/nuaznLogo.png"
import strangerDesign from "../assets/strangerDesign.png"
import skincareDesign from "../assets/skincareDesign.png"
import toteBagDesign from "../assets/toteBagDesign.png"

import catPainting from "../assets/catPainting.webp";
import duckPainting from "../assets/duckPainting.webp";
import skyPainting from "../assets/skyPainting.webp";
import winterPainting from "../assets/winterPainting.webp";
import JoshuaTreePark from "../assets/JoshuaTreePark.webp";
import totoroPainting from "../assets/totoroPainting.webp";

import catDigitalArt from "../assets/catDigitalArt.webp";
import portraitDigitalArt from "../assets/portraitDigitalArt.webp";
import flowerDigitalArt from "../assets/flowerDigitalArt.webp";
import toastDigitalArt from "../assets/toastDigitalArt.webp";
import frenchToastDigitalArt from "../assets/frenchToastDigitalArt.webp";
import dessertDigitalArt from "../assets/dessertDigitalArt.webp";

import mangoSticker from "../assets/mangoSticker.webp";
import matchaSticker from "../assets/matchaSticker.webp";
import berrySticker from "../assets/berrySticker.webp";
import cakeSticker from "../assets/cakeSticker.webp";
import slimeSticker from "../assets/slimeSticker.webp";
import drinkSticker from "../assets/drinkSticker.webp";
import orangeSticker from "../assets/orangeSticker.webp";
import peachSticker from "../assets/peachSticker.webp";
import strawberrySticker from "../assets/strawberrySticker.webp";

import BackButton from "../components/BackButton";

const graphicDesignProjects = [
  {
    title: "nuAZN Logo Design",
    description: `● Designed a logo for nuAZN, Northwestern's only Asian-interest magazine.`,
    imageUrl: nuaznLogo,
    link: "https://www.instagram.com/nu_azn/?hl=en",
    linkText: "See nuAZN on Instagram",
    skills: ["Procreate", "Logo Design & Branding"]
  },
  {
    title: "Tote Bag Design",
    description: `● Designed a tote bag for for nuAZN fundraising inspired by various Asian cuisines.`,
    imageUrl: toteBagDesign,
    skills: ["Procreate", "Merch Design"]
  },
  {
    title: "nuAZN: Ephemera Page Design",
    description: `● Designed and illustrated spread (pg. 34) for nuAZN's 33rd edition magazine Ephemera. 
                  ● Created digital artwork in a watercolor-inspired style, balancing it with clear visual storytelling.`,
    imageUrl: strangerDesign,
    link: "https://issuu.com/nuazn/docs/single_pages_the_final_ephemera",
    linkText: "Read the full issue here",
    skills: ["Procreate", "Adobe InDesign"]
  },
  {
    title: "nuAZN: Mythos Page Design",
    description: `● Designed and illustrated full spread (pg. 5-6) for nuAZN's 32nd edition magazine Mythos.
                  ● Uitlized a mix of hand-illustrated elements, graphic design, and layout choices to create a cohesive spread.`,
    imageUrl: skincareDesign,
    link: "https://issuu.com/nuazn/docs/nuaznmythos24",
    linkText: "Read the full issue here",
    skills: ["Procreate", "Adobe InDesign"]
  }
];

const paintings = [
  catPainting,
  duckPainting,
  skyPainting,
  winterPainting,
  JoshuaTreePark,
  totoroPainting
];

const digitalArt = [
  catDigitalArt,
  portraitDigitalArt,
  flowerDigitalArt,
  toastDigitalArt,
  frenchToastDigitalArt,
  dessertDigitalArt
];


const stickers = [
  mangoSticker,
  matchaSticker,
  berrySticker,
  cakeSticker,
  slimeSticker,
  drinkSticker,
  orangeSticker,
  peachSticker,
  strawberrySticker
];

const artProjects = [
];

const miscProjects = [ 
];

export default function Art() {
  const [popupImage, setPopupImage] = useState(null); // null = no popup

  const handleImageClick = (imgUrl) => {
    setPopupImage(imgUrl);
  };

  const closePopup = () => setPopupImage(null);
  
  const renderImageCard = (imageUrl) => (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 aspect-square"
      onClick={() => handleImageClick(imageUrl)}
    >
      <img
        src={imageUrl}
        alt="Artwork"
        className="w-full md:h-48 lg:h-56 object-cover"
      />
    </div>
  );

  const renderProjectCard = ({ title, description, imageUrl, link, linkText, skills = [] }) => (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col w-full h-[400px]">
      {/* Fixed-size image container */}
      <div className="w-full h-40 overflow-hidden rounded-md mb-2 flex-shrink-0 cursor-pointer transform transition-transform duration-300 hover:scale-110"
           onClick={() => handleImageClick(imageUrl)}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
  
      {/* Title */}
      <h3 className="font-minecraft text-lg mb-2 mt-2 flex-shrink-0 text-center">{title}</h3>
  
      {/* Skills */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-2 flex-shrink-0">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full font-garet">
              {skill}
            </span>
          ))}
        </div>
      )}
  
      {/* Scrollable description */}
      <div className="text-left text-[18px] ml-4 mt-2 whitespace-pre-line text-gray-700 overflow-y-auto flex-1 font-garet">
        {description}
      </div>
  
      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 flex-shrink-0 text-center"
        >
          {linkText || "View Project"}
        </a>
      )}
    </div>
  );

  return (
    <div className="w-screen h-screen relative">
      <PopupWrapper>
        <BackButton className="absolute top-3 left-7 z-50" />
        <div className="flex flex-col justify-center items-center h-full">
          {/* Scrollable container */}
          <div className="ml-5 pr-5 text-left max-h-[58vh] overflow-y-auto">
            {/* Page Title */}
            <h1 className="text-4xl font-minecraft mb-6 mt-6">Art & Design</h1>
            <p className="mb-5 font-garet text-xl text-gray-700">
              Outside of work and academics, I’m extremely passionate about various forms of art, design, and creative expression. 
              I’ve worked on university publications, designed merchandise and branding, and created digital and visual art projects 
              that explore storytelling, culture, and personal style.
            </p>
            <p className="mb-10 font-garet text-xl text-gray-700">
              Hover over and click the project images to view them full-size!
            </p>
            {/* Work Projects */}
            <h1 className="text-3xl font-minecraft mb-6">Graphic / Digital Design</h1>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {graphicDesignProjects.map((proj, idx) => (
                <div key={idx}>{renderProjectCard(proj)}</div>
              ))}
            </div>

            {/* Personal Projects */}
            <h1 className="text-3xl font-minecraft mb-6">Other Visual Art</h1>
            <h1 className="text-2xl font-minecraft mb-4 mt-10">Paintings (Traditional Art)</h1>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {paintings.map((img, idx) => (
                  <div key={idx}>{renderImageCard(img)}</div>
                ))}
              </div>

              <h1 className="text-2xl font-minecraft mb-4 mt-10">Digital Art</h1>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {digitalArt.map((img, idx) => (
                  <div key={idx}>{renderImageCard(img)}</div>
                ))}
              </div>

              <h1 className="text-2xl font-minecraft mb-4 mt-10">Stickers</h1>
              <p className="mb-5 font-garet text-xl text-gray-700">
                For more of my sticker work, you can check out my{' '}
                <a
                  href="https://www.redbubble.com/people/mariiscribbles8/shop?anchor=profile&asc=u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  RedBubble shop
                </a>
                !
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {stickers.map((img, idx) => (
                  <div key={idx}>{renderImageCard(img)}</div>
                ))}
              </div>

            {/*
              // Misc Projects section (potential future update)
              <h1 className="text-3xl font-minecraft mb-6 mt-10">Bonus: some of my favorite crochet pieces!</h1>
              <div className="grid grid-cols-2 gap-6">
                {artProjects.map((proj, idx) => (
                  <div key={idx}>{renderProjectCard(proj)}</div>
                ))}
              </div>
            */}
          </div>
        </div>
        {popupImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 cursor-pointer"
            onClick={closePopup}
          >
            <div className="bg-white rounded-xl p-4 shadow-xl max-h-[90%] max-w-[90%] flex items-center justify-center">
              <img
                src={popupImage}
                alt="Full size artwork"
                className="max-h-[70vh] max-w-[70vw] object-contain rounded-md"
              />
            </div>
          </div>
        )}
      </PopupWrapper>
    </div>
  );
}