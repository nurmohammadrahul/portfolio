// src/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import Modal from './Modal';

// Sample project data
const projectsData = [
    {
        title: 'Kormo - A freelancing website',
        description: '',
        image: project1,
        demoLink: 'https://kormo-3cade.web.app/',
        repoLink: 'https://github.com/nurmohammadrahul/kormo',
        githubOwner: 'nurmohammadrahul',
        githubRepo: 'kormo',
    },
    {
        title: 'Dynamic Blog Aggregator ',
        description: '', 
        image: project2,
        demoLink: 'https://blogpost957.netlify.app',
        repoLink: 'https://github.com/nurmohammadrahul/blogpost957',
        githubOwner: 'nurmohammadrahul',
        githubRepo: 'blogpost957',
    },
    
    {
        title: 'Online BookStore Application',
        description: '',
        image: project3,
        demoLink: '#',
        repoLink: 'https://github.com/nurmohammadrahul/Online_Store',
        githubOwner: 'nurmohammadrahul',
        githubRepo: 'Online_Store',
    },
    // Add more projects as needed
];

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReadmes = async () => {
            try {
                const updatedProjects = await Promise.all(
                    projectsData.map(async (project) => {
                        try {
                            const response = await axios.get(`https://api.github.com/repos/${project.githubOwner}/${project.githubRepo}/readme`, {
                                headers: {
                                    Accept: 'application/vnd.github.v3.raw',
                                   // Authorization:'process.env.local.Token'
                                },
                            });
                            
                            // Full description
                            const fullDescription = response.data;
                            // Short description (first 10 words)
                            const shortDescription = fullDescription.split(' ').slice(0, 10).join(' ');
        
                            return {
                                ...project,
                                fullDescription,  // Store the full description
                                description: shortDescription || 'No description available.', // Short description
                            };
                        } catch (error) {
                            console.error(`Failed to fetch README for ${project.githubRepo}:`, error.message);
                            return {
                                ...project,
                                fullDescription: 'No description available.',
                                description: 'README not found or unable to fetch.',
                            };
                        }
                    })
                );
                setProjects(updatedProjects);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchReadmes();
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section
            id="projects"
            className=" bg-black text-white  py-10 min-h-screen md:h-screen flex flex-col"
        >
            <div className="container mx-auto text-center px-4 sm:px-6  md:p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="mt-2 text-gray-400">{project.description}</p>
                                <div className="mt-4 flex justify-center space-x-2">
                                    <a
                                        href={project.demoLink}
                                        className="inline-block bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-transparent hover:text-white border-2 border-transparent hover:border-dashed hover:border-green-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        className="inline-block bg-gradient-to-r from-yellow-500 to-purple-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-transparent hover:text-white border-2 border-transparent hover:border-dashed hover:border-green-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub Repo
                                    </a>
                                    <button
                                        onClick={() => openModal(project)}
                                        className="inline-block bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-transparent hover:text-white border-2 border-transparent hover:border-dashed hover:border-green-800"
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Component */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                project={selectedProject}
            />
        </section>
    );
};

export default Projects;
