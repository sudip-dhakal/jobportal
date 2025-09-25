import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-gray-300 pb-2 pt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-y-10">
        {/* About */}
        <div className="w-full sm:w-[48%] md:w-[23%]">
          <h2 className="text-xl font-bold text-white mb-4">JobEase</h2>
          <p className="text-sm leading-relaxed">
            Empowering careers and businesses by connecting the right talent to
            the right opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-[48%] md:w-[23%]">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Employers */}
        <div className="w-full sm:w-[48%] md:w-[23%]">
          <h3 className="text-lg font-semibold text-white mb-3">Employers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Find Candidates
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Plans & Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full sm:w-[48%] md:w-[23%]">
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect with Us
          </h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm">contact@jobease.com</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JobEase. All rights reserved to Sudip
        Dhakal who made this website.
      </div>
    </footer>
  );
};

export default Footer;
