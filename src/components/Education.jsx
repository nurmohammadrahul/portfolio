// src/Education.js
import React from 'react';

const educationData = [
    {
        institution: 'Noakhali Science and technology University',
        degree: 'Masters of Science in Computer Science & Telecommunication Engineering',
        year: '2024-Ongoing',
        result: '#',
      //  description: 'Focused on software development, algorithms,competitive programming and data structures.',
    },
    {
        institution: 'Noakhali Science and technology University',
        degree: 'Bachelor of Science in Computer Science & Telecommunication Engineering',
        year: '2018 - 2024',
        result: 'CGPA-3.26',
        description: 'Focused on software development, algorithms,competitive programming and data structures.',
    },
    {
        institution: 'Dhaka Residential Model College',
        degree: 'Higher-Secondary School Certificate',
        year: '2015 - 2017',
        result: 'GPA-5.00',
        description: 'Graduated with honors, with a focus on STEM subjects.',
    },
    {
        institution: 'Feni Government Pilot High School',
        degree: 'Secondary School Certificate',
        year: '2010 - 2015',
        result: 'GPA-5.00',
        description: 'Graduated with honors, with a focus on STEM subjects.',
    }
    // Add more education entries as needed
];

const Education = () => {
    return (
        <section id="education" className="bg-black text-white py-10 min-h-screen">
            <div className="container mx-auto text-center px-4 sm:px-6 md:p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-100 to-orange-200 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-700">
                            <h3 className="text-3xl font-semibold text-gray-900">{edu.degree}</h3>
                            <p className="mt-2 text-2xl text-gray-700">{edu.institution}</p>
                            <p className="mt-1 text-2xl text-gray-700">{edu.year}</p>
                            <p className="mt-2 text-xl font-bold text-gray-600">{edu.result}</p>
                            <p className="mt-2 text-xl text-gray-600">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
