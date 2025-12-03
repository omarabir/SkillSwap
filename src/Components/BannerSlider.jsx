import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router";

const BannerSlider = () => {
  const slides = [
    {
      image: "https://i.ibb.co/Z12Z0Gps/image.png",
      title: "Unlock Your Potential",
      subtitle: "Learn new skills from local experts in your community.",
    },
    {
      image: "https://i.ibb.co.com/HWVq1JX/image.png",
      title: "Share Your Passion",
      subtitle: "Become a provider and earn by teaching what you love.",
    },
    {
      image: "https://i.ibb.co.com/hJhCmmB9/image.png",
      title: "Connect & Grow",
      subtitle: "Join a vibrant network of learners and teachers.",
    },
  ];
  return (
    <div className="relative w-full  h-[60vh] md:h-[80vh] mt-4 rounded-4xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/90 flex items-center justify-center">
                <div
                  className="text-center text-white p-4 relative z-10"
                  data-aos="fade-up"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p>{slide.subtitle}</p>
                  <Link
                    to="/all-skills"
                    className="mt-8 px-2 lg:px-8 py-1 lg:py-3 bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white font-semibold rounded-lg shadow-md  transition-colors btn  hover:from-[#FF6560] hover:to-[#FF1E1E] border-none"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
