// src/components/PopupWrapper.jsx
import popupWindow from '../assets/popupWindow.png';

export default function PopupWrapper({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex justify-center items-center">
      {/* Popup container */}
      <div 
        className="relative z-10 rounded-3xl bg-transparent flex flex-col justify-between overflow-y-auto pixel-art"
        style={{
          backgroundImage: `url(${popupWindow})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '850px',
          height: '554px',
          padding: '60px'
        }}
      >
        {children}
      </div>
    </div>
  );
}