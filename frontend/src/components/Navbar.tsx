"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between bg-white p-4 shadow relative z-20">
            <div className="flex items-center z-30">
                <a href="/">
                    <Image 
                    src={`/headerlogo.webp`} 
                    alt="Logo" 
                    width={190}
                    height={190}
                    style={{height: 'auto'}}
                    priority={true}
                    quality={70} />
                </a>
            </div>
            
           {/* Desktop Menu */}
           <div className="hidden md:flex items-center space-x-4 md:space-x-8 mr-8">
                <a
                    href="/"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    Home
                </a>
                <a
                    href="/about"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    About
                </a>
                <a
                    href="/services"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    Services
                </a>
                <a
                    href="/contact"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    Contact
                </a>
            </div>

            <div className="md:hidden flex items-center z-30">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-800 focus:outline-none"
                >
                    <div className="relative w-8 h-6 flex items-center justify-center">
                        <div
                            className={`absolute h-0.5 w-6 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                                isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                            }`}
                        />
                        <div
                            className={`absolute h-0.5 w-6 bg-gray-800 transform transition-opacity duration-300 ease-in-out ${
                                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <div
                            className={`absolute h-0.5 w-6 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                                isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                            }`}
                        />
                    </div>
                </button>
            </div>

            {isMobileMenuOpen && (
                 <div className="fixed inset-0 bg-white p-4 flex flex-col items-center justify-center space-y-8 z-20 md:hidden">
                 <a
                     href="/"
                     className="text-gray-800 text-xl w-full text-center py-4 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out rounded-lg"
                 >
                     Home
                 </a>
                 <a
                     href="/about"
                     className="text-gray-800 text-xl w-full text-center py-4 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out rounded-lg"
                 >
                     About
                 </a>
                 <a
                     href="/services"
                     className="text-gray-800 text-xl w-full text-center py-4 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out rounded-lg"
                 >
                     Services
                 </a>
                 <a
                     href="/contact"
                     className="text-gray-800 text-xl w-full text-center py-4 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out rounded-lg"
                 >
                     Contact
                 </a>
             </div>
            )}
        </nav>
    );
};

export default Navbar;
