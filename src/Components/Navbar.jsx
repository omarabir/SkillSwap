import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-lg font-medium transition-colors ${
      isActive ? "text-red-600 font-bold" : "text-gray-700 hover:text-red-600"
    }`;

  return (
    <nav className="bg-[#faf0f0] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 text-2xl font-bold text-[#e42625]"
          >
            <img
              src={logo}
              alt="SkillSwap Logo"
              className="h-20 w-20 object-contain"
            />
            SkillSwap
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/all-skills" className={navLinkClass}>
              Courses
            </NavLink>
            <NavLink to="/myprofile" className={navLinkClass}>
              My Profile
            </NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-[#FF1E1E] border border-[#FF1E1E] rounded-md hover:bg-[#FF1E1E] hover:text-white transition-all"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] rounded-md hover:opacity-90 transition-all"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-[#fbd2d1] focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              {isMenuOpen ? (
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#fff5f5] shadow-inner transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-skills"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/myprofile"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            My Profile
          </NavLink>

          <div className="flex flex-col w-4/5 gap-2 mt-4">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-center px-4 py-2 text-sm font-medium text-[#FF1E1E] border border-[#FF1E1E] rounded-md hover:bg-[#FF1E1E] hover:text-white transition-all"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="text-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] rounded-md hover:opacity-90 transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
