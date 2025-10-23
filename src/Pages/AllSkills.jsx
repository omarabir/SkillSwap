import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../Components/SkillCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import Aos from "aos";
import "aos/dist/aos.css";

const AllSkills = () => {
  const skills = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (skills && skills.length > 0) {
      const uniqueCategories = [...new Set(skills.map((s) => s.category))];
      setCategories(["All", ...uniqueCategories.sort()]);
    }

    const timer = setTimeout(() => {
      setFilteredSkills(skills);
      setIsLoading(false);
      Aos.refresh();
    }, 1000);

    return () => clearTimeout(timer);
  }, [skills]);

  useEffect(() => {
    if (isLoading) return;

    setIsFiltering(true);
    const delay = setTimeout(() => {
      const term = search.toLowerCase();
      const filtered = skills.filter((skill) => {
        const matchesCategory =
          selectedCategory === "All" || skill.category === selectedCategory;
        const matchesSearch =
          skill.skillName.toLowerCase().includes(term) ||
          skill.description.toLowerCase().includes(term);
        return matchesCategory && matchesSearch;
      });

      setFilteredSkills(filtered);
      setIsFiltering(false);
    }, 400);

    return () => clearTimeout(delay);
  }, [search, selectedCategory, skills, isLoading]);

  return (
    <div className=" min-h-screen">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-down">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              All Available Skills
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Find your next passion from our collection of local skills.
            </p>
          </div>

          <div
            className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
          >
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <input
                type="text"
                placeholder="Search by name or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 
                    3.476l4.817 4.817a1 1 0 01-1.414 
                    1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isLoading || isFiltering ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <LoadingSpinner />
            </div>
          ) : filteredSkills.length > 0 ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-aos="fade-up"
            >
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.skillId} skill={skill} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16" >
              <h3 className="text-2xl font-semibold text-gray-700">
                No Skills Found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllSkills;
