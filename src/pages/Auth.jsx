import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // save user login
    localStorage.setItem("user", "loggedin");

    // redirect to home
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login to E-Shop" : "Create Account"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-gray-700 outline-none"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 outline-none"
            required
          />

          <button
            type="submit"
            className={`w-full py-3 rounded font-semibold ${
              isLogin
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-400 hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;