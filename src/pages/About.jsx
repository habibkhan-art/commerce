import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6 pt-32">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-400 animate-pulse">About E-Shop</h1>
        <p className="text-gray-300 text-lg mb-4">
          Welcome to E-Shop! We are committed to providing the best online shopping experience. 
          Our platform offers a wide range of high-quality products at competitive prices.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          From electronics to fashion, we ensure fast delivery, secure payments, and excellent customer service.
          Our mission is to make your shopping simple, safe, and enjoyable.
        </p>
        <p className="text-gray-400 text-md mt-6">
          &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default About;