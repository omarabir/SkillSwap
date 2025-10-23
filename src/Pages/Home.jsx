import React, { useState, useEffect } from "react";
import BannerSlider from "../Components/BannerSlider";
import { Link, useLoaderData } from "react-router";
import SkillCard from "../Components/SkillCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import AOS from "aos";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const skills = useLoaderData();

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false);
   
      AOS.refresh();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BannerSlider></BannerSlider>
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Popular Skills
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the most sought-after skills on our platform.
            </p>
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.slice(0, 6).map((skill) => (
                  <SkillCard key={skill.skillId} skill={skill} />
                ))}
              </div>
              {skills.length > 6 && (
                <div className="mt-12 text-center">
                  <Link
                    to="/all-skills"
                    className="font-semibold text-center bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white py-2 px-2 rounded-md transition-colors duration-300"
                  >
                    View All Skills
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
