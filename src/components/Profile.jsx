import React from 'react';
import leetcodeIcon from '../assets/icons/LeetCode_logo_rvs.png';
import hackerrankIcon from '../assets/icons/Hackkerrank.svg';
import codechefIcon from '../assets/icons/codechef.svg';
import atcoderIcon from '../assets/icons/atcoder.png';
import codeforcesIcon from '../assets/icons/codeforces.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const programmingProfiles = [
    {
        platform: 'Codeforces',
        username: 'curly_brace957',
        link: 'https://codeforces.com/profile/curly_brace957',
        icon: codeforcesIcon,
    },
    {
        platform: 'LeetCode',
        username: 'curly_brace',
        link: 'https://leetcode.com/u/curly_brace',
        icon: leetcodeIcon,
    },
    {
        platform: 'HackerRank',
        username: 'kickass0',
        link: 'https://www.hackerrank.com/profile/kickass0',
        icon: hackerrankIcon,
    },
    {
        platform: 'CodeChef',
        username: 'kickassss',
        link: 'https://www.codechef.com/users/kickassss',
        icon: codechefIcon,
    },
    {
        platform: 'AtCoder',
        username: 'Curly_Brace09',
        link: 'https://atcoder.jp/users/Curly_Brace09',
        icon: atcoderIcon,
    },
];

const otherProfiles = [
    {
        platform: 'GitHub',
        username: 'nurmohammadrahul',
        link: 'https://github.com/nurmohammadrahul',
        icon: <FaGithub className="text-3xl inline-block mr-2" />,
    },
    {
        platform: 'LinkedIn',
        username: 'Nur Mohammad',
        link: 'https://www.linkedin.com/in/nur-mohammad-0167861b5/',
        icon: <FaLinkedin className="text-3xl inline-block mr-2" />,
    },
];

const Profile = () => {
    return (
        <section id="profile" className="bg-black text-white py-10">
            <div className="container mx-auto text-center px-4 sm:px-6 md:p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
                     Profiles
                </h2>

                

                <div className="flex items-center justify-center mb-4">
                    <h3 className="text-2xl font-bold mr-4">Competitive Programming Profiles</h3>
                </div>
                <div className="flex flex-col  justify-center items-center mb-8">
                    <div className="inline-block h-1 w-[50%] bg-gradient-to-r from-purple-500 to-yellow-500 mr-2"></div>
                    <p className="text-gray-500 text-center text-xl p-4">
                        Competitive programming ignited my love for problem-solving and logical thinking. The thrill of tackling challenging algorithms and competing against time pushes me to grow continuously. Each contest is not just a test of skill but an opportunity to learn from others and celebrate our collective achievements. This journey fuels my passion for coding and inspires me to innovate every day.
                    </p>
                    <div className="inline-block h-1 w-[50%] bg-gradient-to-r from-purple-500 to-yellow-500 ml-2"></div>
                </div>

                <ul className="space-y-4">
                    {programmingProfiles.map((profile, index) => (
                        <li key={index} className="flex items-center justify-center">
                            <img src={profile.icon} alt={`${profile.platform} logo`} className="w-8 h-8 inline-block mr-2" />
                            <span className="text-xl font-semibold">{profile.platform}:</span>
                            <a
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 ml-2 underline hover:text-white"
                            >
                                {profile.username}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-center mb-4 mt-10">
                    <h3 className="text-2xl font-bold mr-4">Other Profiles</h3>
                </div>
               
                        <ul className="space-y-4">
                        {otherProfiles.map((profile, index) => (
                            <li key={index} className="flex items-center justify-center">
                                {profile.icon}
                                <span className="text-xl font-semibold">{profile.platform}:</span>
                                <a
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 ml-2 underline hover:text-white"
                                >
                                    {profile.username}
                                </a>
                            </li>
                        ))}
                    </ul>
                   
            </div>
        </section>
    );
};

export default Profile;