import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto text-center">
                <nav className="mb-4">
                    <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
                        <li className="flex items-center">
                            <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li className="hidden md:flex text-gray-500 mx-2">|</li>
                        <li className="flex items-center">
                            <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
                                About
                            </Link>
                        </li>
                        <li className="hidden md:flex text-gray-500 mx-2">|</li>
                        <li className="flex items-center">
                            <Link href="/services" className="text-gray-300 hover:text-white transition duration-300">
                                Services
                            </Link>
                        </li>
                        <li className="hidden md:flex text-gray-500 mx-2">|</li>
                        <li className="flex items-center">
                            <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p className="text-gray-500">&copy; Blissmember 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
