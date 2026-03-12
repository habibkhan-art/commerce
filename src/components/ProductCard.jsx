import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
      />
      <div className="p-5 flex flex-col justify-between h-48">
        <div>
          <h2 className="font-bold text-xl mb-1">{product.name}</h2>
          <p className="text-blue-400 font-semibold text-lg">${product.price}</p>
        </div>

        {/* Dynamic Link */}
        <Link
          to={`/product/${product.id}`}
          className="mt-3 inline-block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;