import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm}`);
      setSearchTerm("");
      setMenuOpen(false); // close menu on mobile after search
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-colors">
          <Link to="/">E-Shop</Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-800 rounded-full overflow-hidden focus-within:ring-2 ring-blue-500"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-full text-gray-200 bg-gray-800 placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 flex items-center justify-center transition-all duration-300"
            >
              <FaSearch />
            </button>
          </form>

          <Link className="hover:underline hover:text-blue-400 transition-all duration-300" to="/">Home</Link>
          <Link className="hover:underline hover:text-blue-400 transition-all duration-300" to="/products">Products</Link>
          <Link className="hover:underline hover:text-blue-400 transition-all duration-300" to="/about">About</Link>
          <Link className="hover:underline hover:text-blue-400 transition-all duration-300" to="/contact">Contact</Link>
          <Link className="hover:underline flex items-center gap-1 hover:text-blue-400 transition-all duration-300" to="/cart">
            <FaShoppingCart /> Cart ({cartItems.length})
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-4">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-800 rounded-full overflow-hidden focus-within:ring-2 ring-blue-500 w-full"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-full text-gray-200 bg-gray-800 placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 flex items-center justify-center transition-all duration-300"
            >
              <FaSearch />
            </button>
          </form>

          <Link onClick={() => setMenuOpen(false)} className="block hover:underline hover:text-blue-400 transition-all duration-300" to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} className="block hover:underline hover:text-blue-400 transition-all duration-300" to="/products">Products</Link>
          <Link onClick={() => setMenuOpen(false)} className="block hover:underline hover:text-blue-400 transition-all duration-300" to="/about">About</Link>
          <Link onClick={() => setMenuOpen(false)} className="block hover:underline hover:text-blue-400 transition-all duration-300" to="/contact">Contact</Link>
          <Link onClick={() => setMenuOpen(false)} className="block hover:underline flex items-center gap-1 hover:text-blue-400 transition-all duration-300" to="/cart">
            <FaShoppingCart /> Cart ({cartItems.length})
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/signup"
            className="block bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 text-center"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;