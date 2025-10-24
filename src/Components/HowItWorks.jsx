import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three simple steps to start your journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div data-aos="fade-down">
            <div className="flex items-center justify-center h-16 w-16 rounded-full  bg-[#fbd2d1]  text-[#e63c3b] mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Skills</h3>
            <p className="text-gray-600">
              Find the perfect skill you want to learn from our diverse
              categories.
            </p>
          </div>
          <div data-aos="fade-down">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#fbd2d1]  text-[#e63c3b] mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Book a Session</h3>
            <p className="text-gray-600">
              Connect with a local expert and book a session that fits your
              schedule.
            </p>
          </div>
          <div data-aos="fade-down">
            <div className="flex items-center justify-center h-16 w-16 rounded-full  bg-[#fbd2d1]  text-[#e63c3b] mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
            <p className="text-gray-600">
              Enjoy your personalized learning experience and expand your
              horizons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
