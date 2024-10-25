// src/About.js
import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa'; 
import resume from "../assets/CV_NurMohammad.pdf"
const About = () => {
    return (
        <section
            id="about"
            className="md:h-screen bg-black flex items-center justify-center text-white"
        >
            <div className="bg-opacity-80 p-6 md:p-4 rounded-lg max-w-lg text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                <p className="text-lg mb-4">
                    I'm a fresh graduate in Computer Science with a passion for technology and innovation.
                </p>

                <p className="text-lg mb-4">
                    I enjoy developing dynamic web applications and love the challenge of solving complex problems.
                </p>

                <p className="text-lg mb-4">
                    As a problem solver, I thrive on tackling challenges head-on and finding effective solutions. My analytical mindset helps me to deconstruct issues and come up with innovative strategies.
                </p>

                <p className="text-lg mb-4">
                    My experience includes working with technologies such as JavaScript, React, Node.js. I am always eager to learn and adapt to new tools and methodologies.
                </p>

                <p className="text-lg mb-6">
                    In my free time, I explore new frameworks, contribute to open-source projects, and stay updated with the latest trends in the tech world.
                </p>

                <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4">
                    <a
                        href="https://drive.google.com/file/d/1H7NE-HqXFBju8GdvTAm-lMhR_yWi2EWp/view?usp=drive_link" target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-6 py-2 rounded mb-2 md:mb-0 hover:bg-green-600 transition duration-300"
                    >
                        <FaEye className="mr-2" />
                        View Resume
                    </a>
                    <a
                        href={resume}
                        download
                        className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-purple-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        <FaDownload className="mr-2" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
