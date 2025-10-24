import { useLoaderData, useParams } from "react-router";

import NotFoundPage from "./NotFoundPage";

const CourseDetails = () => {
  const skills = useLoaderData();
  const { id } = useParams();
  const skill = skills.find((s) => s.skillId == id);

  if (!skill) {
    return <NotFoundPage />;
  }

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div data-aos="fade-right">
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-full object-cover sm:rounded-lg"
            />
          </div>

          <div
            className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"
            data-aos="fade-left"
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {skill.skillName}
            </h1>

            <p className="text-2xl text-gray-900 mt-2">${skill.price}</p>

            <div className="mt-4 flex items-center">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="ml-2 text-sm text-gray-500">
                {skill.rating} star rating
              </p>
            </div>

            <div className="mt-6 text-gray-700 space-y-3">
              <p>{skill.description}</p>
              <p>
                <span className="font-semibold">Provider:</span>{" "}
                {skill.providerName}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {skill.category}
              </p>
              <p>
                <span className="font-semibold">Slots Available:</span>{" "}
                {skill.slotsAvailable}
              </p>
            </div>
          </div>
        </div>
        <form className="mt-20 max-w-xl text-black">
          <h3 className="text-xl font-bold mb-4">Book a Session</h3>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value=""
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 "
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value=""
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 "
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white py-3 px-6 rounded-md  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseDetails;
