import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Online Forum for Gamers</h2>
                    <p className="text-lg">Join our community to discuss games, share tips, and connect with fellow gamers!</p>
                </div>
                <div className="flex space-x-8 mb-6 md:mb-0">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                        <FaInstagram size={32} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                        <FaFacebookF size={32} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                        <FaTwitter size={32} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                        <FaGithub size={32} />
                    </a>
                </div>
                <div className="text-sm text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Online Forum for Gamers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
