import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const AboutUs = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="https://i.ibb.co.com/0jGmqM0y/image.png"
              alt="People collaborating and learning"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About SkillSwap
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We believe that everyone has a skill to share and something new to
              learn. SkillSwap is a community-driven platform that connects
              individuals looking to learn with local experts who are passionate
              about teaching.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to make learning accessible, affordable, and
              enjoyable for everyone. Whether you want to learn a new language,
              master a musical instrument, or pick up a new hobby, SkillSwap is
              here to help you on your journey.
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white font-semibold rounded-lg shadow-md hover:from-[#FF6560] hover:to-[#FF1E1E] transition-all duration-300 btn">
                {user ? (
                  <Link to="/all-skills">Explore Skills</Link>
                ) : (
                  <Link to="/login">join SkillSwap</Link>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
