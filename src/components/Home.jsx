// src/Home.js
import React from 'react';
import myImage from '../assets/rahul.png'; 
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col mt-14  md:flex-row items-center justify-center md:h-screen bg-black text-white" 
    >
      {/* Image Section */}
      <div className="w-full md:w-[50%] p-4 flex justify-center">
        <img
          src={myImage}
          alt="About Me"
          className="w-3/4 max-w-xs md:h-auto rounded-lg shadow-md"
        />
      </div>

      {/* About Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-start">
        <h1 className="text-4xl font-bold">Hi, I'm</h1>
        <h1 className="text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-600">
            Nur Mohammad
          </span>
        </h1>
        <p className="mt-4 text-lg">
          I am a fresh graduate in Computer Science, eager to apply my skills in software development and contribute to innovative projects.
        </p>
        <p className="mt-2 text-lg">
          Passionate about learning new technologies and solving real-world problems.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-flex items-center bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-4 py-2 rounded border-2 border-transparent hover:bg-transparent hover:text-white hover:border-dashed hover:border-green-800 transition duration-300 transform hover:scale-105"
        >
          View Projects
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Home;
