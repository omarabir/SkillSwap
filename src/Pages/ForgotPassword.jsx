import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

 
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email.");

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent to your email!");
      window.open("https://mail.google.com", "_blank"); 
      navigate("/login"); 
    } catch (err) {
      toast.error("Something went wrong!");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <form
        onSubmit={handleReset}
        className="bg-[#fae5e3] p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Reset your password
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Send Reset Link
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-center mt-3 text-sm text-red-500 cursor-pointer"
        >
          Back to Login
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
