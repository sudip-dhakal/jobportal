import React, { useState } from "react";

const AddExperience = ({ setAddExperience }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");

  console.log(role, company, duration);
  return (
    <>
      <div className="fixed flex justify-center items-center inset-0 backdrop-blur-sm m-auto">
        <div className="h-[55%] bg-gray-800 w-[50%] bg-opacity-50 border border-solid border-gray-400 text-white rounded-xl p-4">
          <div className="flex justify-between items-center pb-2 border-b border-solid border-gray-400">
            <h1 className="font-bold text-2xl">Add Experience</h1>
            <div className="flex gap-x-10">
              <button className="border-gray-400 border border-solid px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-600 duration-300 cursor-pointer">
                Save
              </button>
              <button
                className="border-gray-400 border border-solid px-4 py-2 rounded-md bg-red-700 hover:bg-red-600 duration-300 cursor-pointer"
                onClick={() => setAddExperience(false)}
              >
                Close
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Role</label>
              <input
                type="text"
                className="h-[2rem] w-[50%] rounded-md bg-gray-400 focus:bg-gray-200 focus:outline-blue-700 text-black"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                className="h-[2rem] w-[50%] rounded-md bg-gray-400 focus:bg-gray-200 focus:outline-blue-700 text-black"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Duration</label>
              <input
                type="text"
                className="h-[2rem] w-[50%] rounded-md bg-gray-400 focus:bg-gray-200 focus:outline-blue-700 text-black"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExperience;
