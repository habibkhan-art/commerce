import React from "react";
import { FaGoogle, FaFacebookF, FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-700 p-4">
      
      {/* Login Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 flex justify-center items-center gap-2">
          <FaUser /> Login / Signup
        </h1>
        <p className="text-gray-600 mb-6">
          Use your account or continue with social login.
        </p>

        {/* Email Login Button */}
        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mb-4 hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
          Login with Email
        </button>

        {/* Social Login Buttons */}
        <div className="flex gap-4 justify-center mb-4">
          <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
            <FaFacebookF /> Facebook
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          By logging in, you agree to our <span className="underline">Terms & Conditions</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;