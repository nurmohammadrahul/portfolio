// src/Skills.js
import React from 'react';

import cLogo from '../assets/icons/C_Logo.png';
import cppLogo from '../assets/icons/ISO_C++_Logo.svg.png';
import pythonLogo from '../assets/icons/Python-logo-notext.png';
import jsLogo from '../assets/icons/JavaScript-logo.png';
import reactLogo from '../assets/icons/React_Logo_SVG.svg.png';
import nodeLogo from '../assets/icons/Node.js_logo.svg.png';
import htmlLogo from '../assets/icons/HTML5.png';
import cssLogo from '../assets/icons/CSS3_logo.png';
import tailwindLogo from '../assets/icons/Tailwind_CSS_logo.svg.png';
import mongodbLogo from '../assets/icons/MongoDB_Fores-Green.svg.png';
import mysqlLogo from '../assets/icons/MySQL_logo.svg.png';
import firebaseLogo from '../assets/icons/New_Firebase_logo.svg.png';
import expressLogo from '../assets/icons/Expressjs.png';
import gitLogo from '../assets/icons/Git-logo.svg.png';

const skillsData = [
    { name: 'HTML', icon: htmlLogo },
    { name: 'CSS', icon: cssLogo },
    { name: 'Tailwind CSS', icon: tailwindLogo },
    { name: 'C', icon: cLogo },
    { name: 'C++', icon: cppLogo },
    { name: 'Python', icon: pythonLogo },
    { name: 'JavaScript', icon: jsLogo },
    { name: 'React', icon: reactLogo },
    { name: 'Node.js', icon: nodeLogo },
    { name: 'MongoDB', icon: mongodbLogo },
    { name: 'MySQL', icon: mysqlLogo },
    { name: 'Firebase', icon: firebaseLogo },
    { name: 'Express', icon: expressLogo },
    { name: 'Git', icon: gitLogo },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-black text-white p-4 py-10 min-h-screen flex flex-col justify-center"
        >
            <div className="container mx-auto text-center px-4 sm:px-6 md:p-4"> 
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-100 to-orange-200 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-700">
                            <img src={skill.icon} alt={skill.name} className="h-16 mb-2 transition-transform transform hover:scale-110" />
                            <h3 className="text-black text-lg font-semibold">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
