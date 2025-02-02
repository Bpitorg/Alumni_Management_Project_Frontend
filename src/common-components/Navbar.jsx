import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full font-poppins">
      <nav className="p-2 bg-gray-100 shadow-md">
        <div className="flex justify-between items-center w-full p-2">
          <div className="flex items-center">
            <h1 className="font-nexus text-2xl">BPIT</h1>
            <h1 className="font-nexus text-xl tracking-wider">Alumni</h1>
          </div>
          <div className="hidden md:flex gap-10 items-center text-lg">
            <Link to="/student-portfolio" >Dashboard</Link>
            <Link>Mentorship</Link>
            <Link >Jobs</Link>
            <Link >Events</Link>
            <Link >Achievements</Link>
            <Link>Gallery</Link>
          </div>
          <div className="hidden md:flex justify-center gap-2">
            <Link
              to="/signin"
              className="border-1 bg-gray-600 text-sm text-white flex justify-center items-center border-solid border-gray-700 px-4 py-2 rounded-lg"
            >
              LOG IN
            </Link>

          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center gap-4 p-4">
              <Link to="/" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <Link to="/mentorship" onClick={() => setIsOpen(false)}>Mentorship</Link>
              <Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link>
              <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
              <input
                className="w-full p-2 border-gray-500 border-solid border-1 rounded-lg"
                type="text"
                placeholder="Search"
              />
              <Link
                to="/signup"
                className="border-1 bg-gray-600 text-sm text-white flex justify-center items-center border-solid border-gray-700 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                SIGN UP
              </Link>
              <Link
                to="/signin"
                className="border-1 bg-gray-600 text-sm text-white flex justify-center items-center border-solid border-gray-700 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                SIGN IN
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="bg-gray-700 h-[1px] w-full"></div>
    </div>
  );
};

export default Navbar;