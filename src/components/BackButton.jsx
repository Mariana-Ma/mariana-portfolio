// src/components/BackButton.jsx
import { Link } from 'react-router-dom';

export default function BackButton({ to = "/" }) {
  return (
    <Link to={to}>
      <button className="absolute top-5 left-5 bg-gray-300 px-4 py-2 rounded shadow hover:bg-gray-400 transition z-50">
        ← Home
      </button>
    </Link>
  );
}