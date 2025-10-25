import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash} from "react-icons/fa6";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { createUserWithEmailandPasswordFunc } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setIsLoading(false);
      toast.error("Password must be at least 6 characters long.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setIsLoading(false);
      toast.error("Password must contain a lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setIsLoading(false);
      toast.error("Password must contain an uppercase letter.");
      return;
    }

    createUserWithEmailandPasswordFunc(email, password)
      .then(async (result) => {
        // Update profile if name or photo provided
        try {
          if (name || photoURL) {
            await updateProfile(result.user, {
              displayName: name || null,
              photoURL: photoURL || null,
            });
          }
          toast.success("Account created successfully!");
          navigate("/");
        } catch (profileError) {
          console.error("Error updating profile:", profileError);
          // Still navigate since account was created
          toast.success("Account created! Profile update failed.");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Signup error:", error);
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "User already exists in the database. Please use a different email."
          );
        } else if (error.code === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password is too weak. Please use a stronger password.");
        } else {
          toast.error(
            error.message || "Failed to create account. Please try again."
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#fae5e3] py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-300 focus:border-red-300 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <div className="mt-1">
                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  className="appearance-none block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-300 focus:border-red-300 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-300 focus:border-red-300 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-300 focus:border-red-300 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-linear-to-r from-[#FF1E1E] to-[#FF6560] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
              >
                {isLoading ? "Creating Account..." : "Sign up"}
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-red-500 hover:text-red-600"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
