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
    <nav className="pt-5  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1 justify-between">
            <Link
              to="/"
              className="shrink-0 text-2xl font-bold flex items-center gap-1"
            >
              <img
                src={logo}
                alt="SkillSwap Logo"
                className="h-32 w-32 -mr-10"
              />
              <h4 className="text-[#e42625]"> SkillSwap</h4>
            </Link>
            <div className="hidden md:block flex-1">
              <div className="flex items-baseline justify-center space-x-4 ">
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/all-skills" className={navLinkClass}>
                  All Skills
                </NavLink>

                <NavLink to="/profile" className={navLinkClass}>
                  My Profile
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="space-x-2">
                <Link
                  to="/login"
                  className="text-[#FF1E1E] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-2 border-transparent hover:border-0 hover:bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] relative bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] bg-clip-text"
                >
                  <span className="absolute inset-0 rounded-md border-2 border-transparent bg-linear-to-r from-[#FF1E1E] to-[#FF6560] -z-10 opacity-20 hover:opacity-100 transition-all duration-300"></span>
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all duration-300 hover:shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
              All Skills
            </NavLink>
            {
              <NavLink
                to="/profile"
                className={navLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </NavLink>
            }
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img className="h-10 w-10 rounded-full" src="" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-gray-800"></div>
                <div className="text-sm font-medium leading-none text-gray-500"></div>
              </div>
            </div>
            <div className="px-2 space-y-2">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-[#FF1E1E] hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-0 hover:bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] relative bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] bg-clip-text"
              >
                <span className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] -z-10 opacity-20 hover:opacity-100 transition-all duration-300"></span>
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white px-3 py-2 rounded-md text-base font-medium hover:opacity-90 transition-all duration-300 hover:shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
