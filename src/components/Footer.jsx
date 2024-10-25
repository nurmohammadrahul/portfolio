
import React from 'react';
import {  FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white  py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} Nur Mohammad. </p>
                <p className='mb-2'>All rights reserved.</p>
                <div className="flex justify-center space-x-6">
                    <a 
                        href="https://github.com/nurmohammadrahul" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-purple-500 flex items-center"
                    >
                        <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a 
                        href="https://linkedin.com/in/yourprofilehttps://www.linkedin.com/in/nur-mohammad-0167861b5" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-purple-500 flex items-center"
                    >
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                    <a 
                        href="https://www.facebook.com/profile.php?id=61567305930356" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-purple-500 flex items-center"
                    >
                        <FaFacebookF className="mr-2" /> Facebook
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
