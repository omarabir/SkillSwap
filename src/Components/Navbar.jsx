import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          email: currentUser.email,
          uid: currentUser.uid,
        };
        setUser(userData);
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, [setUser]);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-lg font-medium transition-colors ${
      isActive ? "text-red-600 font-bold" : "text-gray-700 hover:text-red-600"
    }`;

  return (
    <nav className="bg-[#fae5e3] sticky top-0 z-50 rounded-b-3xl shadow-md px-4 lg:px-8 py-3">
      <div className=" ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 text-3xl font-bold">
            <img
              src={logo}
              alt="SkillSwap Logo"
              className="h-44 w-40  -ml-[50px] -mr-16 object-contain"
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
            <NavLink to="/about-us" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>
              Contact Us
            </NavLink>
            {user && (
              <NavLink to="/myprofile" className={navLinkClass}>
                My Profile
              </NavLink>
            )}
          </div>

          {/* Right side: Avatar + Buttons */}
          <div className="flex items-center space-x-3">
            {/* Avatar (always visible) */}
            {user && (
              <div className="relative group">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User avatar"}
                    className="h-10 w-10 rounded-full object-cover border-2 border-[#ffbaba]"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-[#ffefef] text-[#e42625] flex items-center justify-center font-bold border-2 border-[#ffbaba]">
                    {user.displayName
                      ? user.displayName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)
                      : "U"}
                  </div>
                )}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-[#ffc4c4] text-[#e42625] font-semibold text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {user.displayName || user.email}
                </div>
              </div>
            )}

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <button
                  onClick={() => {
                    signOut(auth).then(() => {
                      navigate("/", { replace: true });
                    });
                  }}
                  className="px-3 py-2 text-sm font-medium text-[#FF1E1E] border border-[#FF1E1E] rounded-md hover:bg-[#FF1E1E] hover:text-white transition-all"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-[#FF1E1E] border border-[#FF1E1E] rounded-md hover:bg-[#FF1E1E] hover:text-white transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#FF1E1E] to-[#FF6560] rounded-md hover:opacity-90 transition-all  hover:from-[#FF6560] hover:to-[#FF1E1E]"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
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
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#fff5f5] shadow-inner transition-all duration-300 ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
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
          {user && (
            <NavLink
              to="/myprofile"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </NavLink>
          )}

          <div className="flex flex-col w-4/5 gap-2 mt-4">
            {user ? (
              <button
                onClick={() => {
                  signOut(auth).then(() => {
                    navigate("/", { replace: true });
                    setIsMenuOpen(false);
                  });
                }}
                className="text-center px-4 py-2 text-sm font-medium text-[#FF1E1E] border border-[#FF1E1E] rounded-md hover:bg-[#FF1E1E] hover:text-white transition-all"
              >
                Logout
              </button>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
