import React from "react";

const TopProviders = ({ skills }) => {
  const topProviders = skills
    .map((skill) => ({
      name: skill.providerName,
      img: skill.providerImage,
      skill: skill.skillName,
    }))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Top Rated Providers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet our community's most loved skill-sharers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topProviders.map((provider, index) => (
            <div key={index} data-aos="zoom-in" className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto shadow-lg"
                src={provider.img}
                alt={provider.name}
              />
              <h3 className="mt-4 text-xl font-semibold">{provider.name}</h3>
              <p className="text-gray-600">{provider.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProviders;
