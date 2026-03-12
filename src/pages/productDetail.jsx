import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/Products";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-gray-950">
        <h2 className="text-2xl">Product not found!</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-start p-6">
      <div className="bg-gray-900 rounded-2xl shadow-lg max-w-4xl w-full p-6 flex flex-col md:flex-row gap-8">

        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-400">{product.name}</h1>
            <p className="text-gray-300 mb-4">{product.description || "No description yet."}</p>
            <p className="text-2xl font-bold text-blue-500 mb-6">${product.price}</p>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full font-semibold flex items-center gap-3 justify-center hover:scale-105 hover:shadow-xl transition-all duration-300">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;