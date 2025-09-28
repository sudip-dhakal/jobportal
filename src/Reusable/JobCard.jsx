import React from "react";
import { DollarSign, Clock, MapPin, Calendar, Briefcase } from "lucide-react";

const JobCard = () => {
  return (
    <div className="w-[300px] max-w-full bg-gray-900 border border-blue-600/50 rounded-xl p-5 shadow-2xl shadow-black/50  transition-all duration-300 transform hover:scale-[1.02] flex flex-col gap-4">
      <header className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/jobimg.jpg"
            alt="Company Logo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-700 bg-white"
          />
          <div>
            <h2 className="text-md font-semibold text-white">
              TechSoft Pvt. Ltd.
            </h2>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
              <Calendar className="w-3 h-3 text-gray-500" />
              Posted: 25 Sept 2025
            </p>
          </div>
        </div>
      </header>

      <div className="pt-2">
        <h3 className="text-2xl font-extrabold text-blue-400 leading-tight">
          Frontend Developer
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-300 border-y border-gray-700/70 py-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-blue-500" />
          <span>3+ Yrs Exp</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-500" />
          <span>Full Time</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span>Remote</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-red-500" />
          <span className="text-red-400">Expires: 15 Oct</span>
        </div>
      </div>

      <footer className="flex justify-between items-center pt-1">
        <div className="flex items-baseline">
          <DollarSign className="w-5 h-5 text-green-400 font-bold" />
          <span className="text-2xl font-extrabold text-white">1500</span>
          <span className="text-sm text-gray-400 ml-1">/ month</span>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer">
          Apply Now
        </button>
      </footer>
    </div>
  );
};

export default JobCard;
