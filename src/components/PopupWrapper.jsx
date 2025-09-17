// src/components/PopupWrapper.jsx
export default function PopupWrapper({ children, backgroundClass = "bg-gradient-to-br from-purple-200 to-blue-200" }) {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Full-screen background */}
      <div className={`absolute inset-0 ${backgroundClass}`}></div>

      {/* Popup container */}
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-10 w-[850px] h-[550px] flex flex-col justify-between overflow-y-auto">
          {children} {/* <-- This is where page-specific content goes */}
        </div>
      </div>
    </div>
  );
}