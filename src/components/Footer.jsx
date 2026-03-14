import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaAmazon, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-Shop</h2>
          <p className="text-sm">
            Your one-stop shop for the latest electronics, gadgets, and
            accessories. Quality products with fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-400 transition">Products</a>
            </li>
            <li>
              <a href="/cart" className="hover:text-blue-400 transition">Cart</a>
            </li>
            <li>
              <a href="/login" className="hover:text-blue-400 transition">Login</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer transition">Help Center</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Return Policy</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-2xl">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1877F2] transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E4405F] transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0A66C2] transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://amazon.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF9900] transition duration-300"
            >
              <FaAmazon />
            </a>

            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#25D366] transition duration-300"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;