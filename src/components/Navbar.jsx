import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-white text-xl font-bold">
          GoREST APIs
        </Link>
        <div className="md:hidden">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className={`md:block ${isMenuOpen ? "block" : "hidden"} absolute top-12 left-0 w-full md:w-auto md:static md:block bg-gray-800 md:shadow-none shadow md:bg-transparent md:z-auto z-10`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 ml-10">
            <li className="my-2">
              <Link to="/" className="text-white text-base font-medium">
                Users
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/users/register"
                className="text-white text-base font-medium"
              >
                Create user
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/posts/create"
                className="text-white text-base font-medium"
              >
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
