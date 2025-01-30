import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad } from 'react-icons/fa'; // Importing the gamepad icon

function Navbar() {
  return (
    <nav className="bg-vilet-950 text-white py-4 px-6 shadow-md  ">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <FaGamepad size={30} className="mr-2" /> {/* Gamepad icon as logo */}
          <span className="text-lg font-bold">Online Forum for Gamers</span>
        </div>
        
        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          <Link to="/team" className="hover:text-gray-300">Team</Link>
          <Link to="/" className="hover:text-gray-300">Register</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/logout" className="hover:text-gray-300">Logout</Link>       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

