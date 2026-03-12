import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3 text-blue-400">
        <FaShoppingCart /> Your Cart
      </h1>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-40 mb-6 opacity-70"
          />
          <p className="text-xl">Your cart is empty</p>
          <p className="text-sm mt-2">Add products to start shopping</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-900 border border-gray-800 p-4 rounded-xl shadow-lg hover:shadow-blue-900/40 transition"
              >
                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-blue-400 font-bold mt-1">
                      ${item.price}
                    </p>
                  </div>

                </div>

                <button
                  className="bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                  Remove
                </button>

              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg h-fit">

            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-gray-300">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-5 text-gray-300">
              <span>Total Price</span>
              <span className="font-bold text-white">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;