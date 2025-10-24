import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="bg-[#faf0f0] min-h-screen flex flex-col items-center justify-center  text-center px-4">
      <h1 className="text-9xl font-extrabold text-[#e42625]">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
