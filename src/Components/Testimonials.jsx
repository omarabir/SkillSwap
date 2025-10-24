import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Sarah L.",
      quote:
        "SkillSwap is a game-changer! I learned how to bake sourdough from a local baker and it's been an amazing experience. The platform is so easy to use.",
      avatar: "https://picsum.photos/seed/sarah/100",
      rating: 5,
    },
    {
      name: "Michael B.",
      quote:
        "I've always wanted to learn Python. Found a great instructor in my neighborhood through SkillSwap. The one-on-one sessions are fantastic.",
      avatar: "https://picsum.photos/seed/michael/100",
      rating: 5,
    },
    {
      name: "Jessica P.",
      quote:
        "As a provider, I love sharing my passion for yoga. SkillSwap has connected me with so many wonderful students. It's a great way to build community.",
      avatar: "https://picsum.photos/seed/jessica/100",
      rating: 5,
    },
  ];
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from our vibrant community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-[#fbd2d1] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="grow">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  className="w-14 h-14 rounded-full mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
