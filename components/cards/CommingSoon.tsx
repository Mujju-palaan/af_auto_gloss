"use client";
import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="text-center text-white px-6">
        {/* Logo or Icon */}
        <div className="mb-6">
          <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold">🚀</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Coming Soon
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">
          We’re working hard to bring you something amazing.  
          Stay tuned!
        </p>

        {/* Email Subscribe */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg w-72 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
            Notify Me
          </button>
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;
