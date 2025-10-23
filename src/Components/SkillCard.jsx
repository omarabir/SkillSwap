import React from "react";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
    >
      <div className="relative">
        <img
          className="h-56 w-full object-cover"
          src={skill.image}
          alt={skill.skillName}
        />
        <div className="absolute top-3 right-3 bg-[#f5d5d6]  text-[#FF1E1E] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          {skill.category}
        </div>
      </div>
      <div className="p-6 grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {skill.skillName}
        </h3>
        <div className="flex justify-between items-center text-gray-600 mb-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">{skill.rating}</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">
            ${skill.price}
          </span>
        </div>
        <div className="mt-auto">
          <Link
            to={`/skill/${skill.skillId}`}
            className="block font-semibold w-full text-center bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white py-2 rounded-md  transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
