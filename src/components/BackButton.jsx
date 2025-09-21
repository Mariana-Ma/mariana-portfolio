// src/components/BackButton.jsx
import { Link } from 'react-router-dom';

export default function BackButton({ to = "/", className = "" }) {
  return (
    <Link to={to}>
      <button
        className={`font-minecraft text-2xl cursor-pointer transform transition-transform duration-300 hover:scale-110 ${className}`}
      >
        ← Back to home
      </button>
    </Link>
  );
}