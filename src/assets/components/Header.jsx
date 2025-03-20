import React, { useState } from "react";
import Lottie from "lottie-react";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (

        <>


            <div className=" fixed h-12 w-full bg-gray-800 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FaLaptopCode className="text-white bg-blue-900 p-1 rounded" size={24} />
                    <h1 className="text-white text-lg">Portfolio</h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex p-5">
                    <ul className="flex gap-20">
                        <Link to="/"><li className="text-white font-bold cursor-pointer hover:text-gray-300 ">Home</li></Link>
                        <Link to="/About"><li className="text-white font-bold cursor-pointer  hover:text-blue-200">About</li></Link>
                        <Link to="/Project"><li className="text-white font-bold cursor-pointer  hover:text-blue-200 ">Project</li></Link>
                        <Link to="/Contact"><li className="text-white font-bold cursor-pointer  hover:text-blue-200 ">Contact</li></Link>
                        <li><button>🌞</button></li>
                    </ul>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="p-2 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-12 left-0 w-full bg-gray-900 md:hidden z-50">
                        <ul className="flex flex-col items-center py-4">
                            <Link to="/" onClick={toggleMenu}><li className="text-white py-2">Home</li></Link>
                            <Link to="/About" onClick={toggleMenu}><li className="text-white py-2">About</li></Link>
                            <Link to="/Project" onClick={toggleMenu}><li className="text-white py-2">Project</li></Link>
                            <Link to="/Contact" onClick={toggleMenu}><li className="text-white py-2">Contact</li></Link>
                        </ul>
                    </div>
                )}
            </div>

        </>
    );
}

export default Header;
