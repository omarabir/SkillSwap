import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInFunc } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInFunc(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const code = error.code || "";
        if (
          code === "auth/wrong-password" ||
          code === "auth/invalid-credential"
        ) {
          toast.error("Incorrect password. Please try again.");
        } else if (code === "auth/user-not-found") {
          toast.error("No user found with this email. Please sign up.");
        } else {
          toast.error(error.message || "Failed to log in. Please try again.");
        }
      });
  };
  const handleGoogleLogin = (e) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully!");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          error.message || "Failed to log in with Google. Please try again."
        );
      });
  };

  //   const handleGoogleLogin = () => {
  //     signInWithGoogleFunc()
  //       .then(() => {
  //         toast.success("Logged in successfully!");
  //         const from = location.state?.from?.pathname || "/";
  //         navigate(from, { replace: true });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         toast.error(err.message || "Google sign-in failed");
  //       });
  //   };
  return (
    <div className="min-h-screen px-4 rounded-lg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#fae5e3] py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
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
                  autoComplete="current-password"
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

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/forgotpassword"
                  state={{ email: document.getElementById("email")?.value }}
                  className="font-medium text-red-500 hover:text-red-600"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-linear-to-r from-[#FF1E1E] to-[#FF6560]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2  text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#fbd3d1] text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="flex items-center gap-1">
                  {" "}
                  <FaGoogle /> Login with Google
                </span>
              </button>
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-red-500 hover:text-red-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
