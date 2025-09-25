import React, { useState } from "react";
import skills from "../Data/Skill";
import { ImCross } from "react-icons/im";

const DropdownSkills = ({setAddSkills}) => {
  const [selectedSkills, setSelectedSkills] = useState(new Set([]));

  const handleSelectSkill = (skill) => {
    setSelectedSkills((prev) => new Set(prev).add(skill));
  };

  const handleDeleteSkill = (skill) => {
    setSelectedSkills((prev) => {
      const newSet = new Set(prev);
      newSet.delete(skill);
      return newSet
    });
  };

  return (
    <>
      <div className="flex fixed inset-0 items-center justify-center backdrop-blur-sm m-auto ">
        <div className="text-white  bg-opacity-50 z-50 h-[60%] w-[90%] rounded-2xl  border-amber-600 border border-dotted bg-gray-800 p-4">
          <div className="flex justify-between items-center pb-4 border-b border-solid border-gray-300">
            <h1 className="font-bold text-white text-2xl">Select skills</h1>
            <div className="flex justify-between gap-x-10 items-center">
              <button className="px-4 py-2 cursor-pointer hover:bg-blue-600 duration-300 bg-blue-700 border-gray-200 rounded-lg">
                Save
              </button>
              <button className="px-4 py-2 cursor-pointer hover:bg-red-600 duration-300 bg-red-700 border-gray-200 rounded-lg"onClick={()=>setAddSkills(false)}>
                Close
              </button>
            </div>
          </div>

          <div className="w-[80%] bg-[#d9d9d9] p-2 mx-auto rounded-sm min-h-[10%] mt-5 flex flex-wrap gap-x-3 gap-y-2">
            {Array.from(selectedSkills).map((skill, id) => {
              return (
                <div
                  key={id}
                  className="bg-blue-700 flex items-center gap-x-3 text-white px-2 rounded-md py-1 "
                >
                  {skill}
                  <span className="cursor-pointer">
                    <ImCross
                      size={12}
                      onClick={() => handleDeleteSkill(skill)}
                    />
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-full gap-3 mt-3 border-x border-solid border-gray-600 h-[50%] flex text-[#d9d9d9] flex-wrap ">
            {skills.map((skill, id) => {
              return (
                <div
                  key={id}
                  className=" hover:bg-amber-800 px-4 py-2 rounded-md cursor-pointer border items-center "
                  onClick={() => handleSelectSkill(skill)}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownSkills;
