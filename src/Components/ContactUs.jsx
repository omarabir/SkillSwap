import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Send us a message and we'll get back to
            you as soon as possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className="bg-[#fae5e3] p-8 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6560]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6560]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6560]"
                ></textarea>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toast.success("Message sent successfully!");
                  e.target.closest("form").reset();
                }}
                type="submit"
                className="w-full px-8 py-3 bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white font-semibold rounded-lg shadow-md hover:from-[#FF6560] hover:to-[#FF1E1E] transition-all duration-300 btn"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-[#fae5e3] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-center">
                  <span className="font-bold mr-2">
                    <MapPin />
                  </span>{" "}
                  123 SkillSwap St, England.
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">
                    <Mail />
                  </span>{" "}
                  contact@skillswap.com
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">
                    <Phone />
                  </span>{" "}
                  +1 (123) 456-7890
                </p>
              </div>
            </div>
            <div className="bg-[#fae5e3] rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477631.079414335!2d-4.600723883190218!3d54.15830774298556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0b7d3e1f7b1f5%3A0xeadf7d33294d55b5!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1707045555555"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
