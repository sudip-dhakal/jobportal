import React, { useState } from "react";
import { Save, XCircle } from "lucide-react";

const AddExperience = ({ setAddExperience }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");

  const handleSave = () => {
    setAddExperience(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/50">
      <div className="h-[55%] w-[50%] bg-gray-900 border border-cyan-500/30 text-white rounded-xl p-6 shadow-2xl shadow-cyan-900/50 flex flex-col">
        <header className="flex justify-between items-center pb-4 border-b border-gray-700">
          <h1 className="font-bold text-2xl text-cyan-400">Add Experience</h1>
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-300  transform hover:bg-blue-600"
            >
              Save
            </button>

            <button
              className="flex items-center gap-2 border border-gray-600 bg-red-700 hover:bg-red-600 hover:text-white px-5 py-2 rounded-lg transition duration-300"
              onClick={() => setAddExperience(false)}
            >
              Close
            </button>
          </div>
        </header>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-2">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="role" className="text-sm font-medium text-gray-300">
              Role
            </label>
            <input
              id="role"
              type="text"
              value={role}
              className="h-10 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors"
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Senior Frontend Developer"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="company"
              className="text-sm font-medium text-gray-300"
            >
              Company Name
            </label>
            <input
              id="company"
              type="text"
              value={company}
              className="h-10 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors"
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g., Tech Solutions Inc."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="duration"
              className="text-sm font-medium text-gray-300"
            >
              Duration
            </label>
            <input
              id="duration"
              type="text"
              value={duration}
              className="h-10 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors"
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g., 2020 - Present, or Jan 2021 - Dec 2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
