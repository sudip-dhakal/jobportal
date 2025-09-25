import React from "react";
import Navbar from "../Reusable/Navbar";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const Navigate = useNavigate();
  return (
    <div className="bg-[#242627] w-full min-h-screen text-white">
      <Navbar />

      <div className="relative w-full h-[85vh]">
        <img
          src="/job.jpg"
          alt="Job Opportunities"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-black" />

        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12">
          <div className="text-right max-w-xl">
            <h1 className="text-3xl md:text-5xl overflow-hidden font-bold mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,white,#facc15)] break-words">
              Find Your Dream Tech Job
            </h1>

            <p className="text-md md:text-xl mb-6">
              Discover thousands of opportunities tailored for your future.
            </p>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded transition duration-300 cursor-pointer"
              onClick={() => Navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
