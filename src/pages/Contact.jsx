import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show toast notification
    toast.success("Message sent! Thank you for contacting us.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6 pt-32">
      <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;