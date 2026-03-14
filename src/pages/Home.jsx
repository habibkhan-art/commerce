import React from "react";
import { Link } from "react-router-dom";
import products from "../data/Products";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">

        {/* Left Side Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Welcome to <span className="text-blue-500 animate-pulse">E-Shop</span>
          </h1>

          <p className="text-gray-300 mb-6 text-lg">
            Discover the latest electronics, gadgets, and accessories.
            Premium quality products with fast delivery and secure checkout.
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className=" animate-pulse bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Right Side Brand */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="brand"
            className="rounded-xl shadow-lg w-[420px] hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      {/* About Shop Section */}
      <section className="bg-gray-800 py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">Why Shop With Us?</h2>

        <p className="max-w-3xl mx-auto text-gray-300">
          E-Shop provides high-quality electronics and accessories with
          affordable prices. Our mission is to deliver the best online
          shopping experience with fast shipping, easy returns, and secure
          payment methods.
        </p>

      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>

                <p className="text-blue-500 font-bold mt-2">
                  ${product.price}
                </p>

                <Link
                  to="/products"
                  className="inline-block mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;