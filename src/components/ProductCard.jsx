import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const ProductCard = ({ product }) => {
  if (!product) return null;

  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Order placed for ${product.name}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setShowOrderForm(false);
  };

  return (
    <div className=" bg-gray-800 p-4 rounded-lg  shadow-md text-white flex flex-col justify-between hover:scale-105 transform transition-all duration-300">
      
      {/* Product Info */}
      <div className="group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40  object-cover rounded group-hover:brightness-90 transition duration-300"
        />
        <h3 className="mt-2 font-bold text-lg group-hover:text-blue-400 transition-colors duration-300">{product.name}</h3>
        <p className="mt-1 text-gray-300">${product.price}</p>
      </div>

      {/* Order Button */}
      <button
        onClick={() => setShowOrderForm(!showOrderForm)}
        className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300 w-full"
      >
        {showOrderForm ? "Close Form" : "Order Now"}
      </button>

      {/* Order Form */}
      {showOrderForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-gray-700 p-4 rounded flex flex-col gap-2"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 rounded text-white bg-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 rounded text-white bg-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            className="w-full px-3 py-2 rounded text-white bg-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={1}
            min={1}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 py-2 rounded hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            Place Order
          </button>
        </form>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ProductCard;