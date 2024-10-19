import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Nur Mohammad</div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#profile" className="text-gray-300 hover:text-white">Profile</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#education" className="text-gray-300 hover:text-white">Education</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-6">
          <a href="#home" className="block text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="block text-gray-300 hover:text-white">About</a>
          <a href="#skills" className="block text-gray-300 hover:text-white">Skills</a>
          <a href="#profile" className="block text-gray-300 hover:text-white">Profile</a>
          <a href="#projects" className="block text-gray-300 hover:text-white">Projects</a>
          <a href="#education" className="block text-gray-300 hover:text-white">Education</a>
          <a href="#contact" className="block text-gray-300 hover:text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
