// src/context/BackgroundContext.jsx
import { createContext, useState, useContext } from "react";
import dayBackground from "../assets/dayBackground.png";
import nightBackground from "../assets/nightBackground.png";

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
  const [isDay, setIsDay] = useState(true);

  const toggleBackground = () => setIsDay(prev => !prev);

  return (
    <BackgroundContext.Provider value={{ isDay, toggleBackground, backgroundImage: isDay ? dayBackground : nightBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}

// Custom hook for easier usage
export const useBackground = () => useContext(BackgroundContext);