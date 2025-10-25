import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [errors, setErrors] = useState({});
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        setName(u.displayName || "");
        setPhotoURL(u.photoURL || "");
      }
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await updateProfile(auth.currentUser, {
        displayName: name.trim(),
        photoURL: photoURL.trim() || null,
      });

      const updatedUser = auth.currentUser;
      setUser({ ...updatedUser }); 

      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user)
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <p className="text-lg text-gray-700 mb-4">You are not signed in.</p>
        <Link
          to="/login"
          className="inline-block bg-[#FF1E1E] text-white px-4 py-2 rounded-md"
        >
          Sign in
        </Link>
      </div>
    );

  return (
    <div className="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-[#fbd2d1] shadow-lg rounded-lg overflow-hidden"
        data-aos="fade-up"
      >
        <div className="p-8 text-center">
          <div className="flex-col justify-center mx-auto md:flex md:items-center">
            <div className="md:shrink-0">
              <img
                className="h-32 w-32 rounded-full mx-auto md:mx-0 object-cover"
                src={
                  user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`
                }
                alt="User avatar"
              />
            </div>
            <div className="mt-4 text-center md:mt-0 md:ml-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {user.displayName || "No name set"}
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center  ">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full md:w-1/3 bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white py-2 px-4 rounded-md hover:opacity-95 transition-colors"
              >
                Update Profile
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Edit Profile
                </h2>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors({ ...errors, name: "" });
                      }}
                      className={`shadow-sm focus:ring-red-300 focus:border-red-300 block w-full sm:text-sm ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="photoURL"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Photo URL (optional)
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      name="photoURL"
                      id="photoURL"
                      value={photoURL}
                      onChange={(e) => {
                        setPhotoURL(e.target.value);
                        setErrors({ ...errors, photoURL: "" });
                      }}
                      placeholder="https://example.com/photo.jpg"
                      className={`shadow-sm focus:ring-red-300 focus:border-red-300 block w-full sm:text-sm ${
                        errors.photoURL ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2`}
                    />
                    {errors.photoURL && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.photoURL}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="outline outline-red-500  text-red-500 py-2 px-4 rounded-md hover:text-red-700 hover:font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Saving...
                      </span>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      setIsEditing(false);
                      setErrors({});
                  
                      setName(user.displayName || "");
                      setPhotoURL(user.photoURL || "");
                    }}
                    className="py-2 px-4 bg-linear-to-r from-[#FF1E1E] to-[#FF6560] text-white  rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
