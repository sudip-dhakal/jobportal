import React, { useEffect, useRef, useState, useContext } from "react";
import Navbar from "../Reusable/Navbar";
import Background from "../Reusable/Background";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DropdownSkills from "./DropdownSkills";
import AddExperience from "./AddExperience";
import { UserContext } from "../context/UserContextProvider";

const Profile = () => {
  const { user } = useContext(UserContext);
  const Navigate = useNavigate();
  const [hoverName, setHoverName] = useState(false);
  const [hoverGmail, setHoverGmail] = useState(false);
  const [addSkills, setAddSkills] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [message, setMessage] = useState("");

  const nameRef = useRef(null);
  const gamilRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nameRef.current && !nameRef.current.contains(event.target)) {
        setHoverName(false);
      }
      if (gamilRef.current && !gamilRef.current.contains(event.target)) {
        setHoverGmail(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>

      <Navbar />

      <div className="mx-10 mt-6 relative text-white">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-6 relative overflow-hidden">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full border-4 border-yellow-600 overflow-hidden">
                <img
                  src="/myimage.jpg"
                  alt="Profile"
                  className="w-full h-full object-top object-cover"
                />
              </div>
              <h2
                className="text-2xl font-bold mt-4 flex items-center gap-2 group"
                ref={nameRef}
              >
                {hoverName ? (
                  <input
                    type="text"
                    className="border border-gray-300 border-solid focus:outline-blue-700 rounded-lg "
                  />
                ) : (
                  "Sudip Dhakal"
                )}

                <MdEdit
                  className="text-yellow-400 hidden group-hover:inline-block duration-300 hover:text-yellow-300 cursor-pointer transition"
                  size={24}
                  onClick={() => {
                    setHoverGmail(false);
                    setHoverName(true);
                  }}
                />
              </h2>
              <p
                className="text-gray-400 text-sm flex items-center group"
                ref={gamilRef}
              >
                {hoverGmail ? (
                  <input
                    type="text"
                    className="border border-gray-300 border-solid focus:outline-blue-700 rounded-lg "
                  />
                ) : (
                  "dhakalsudip900@gmail.com"
                )}

                <MdEdit
                  className="text-yellow-400 hidden group-hover:inline-block duration-300 hover:text-yellow-300 cursor-pointer transition"
                  size={24}
                  onClick={() => {
                    setHoverName(false);
                    setHoverGmail(true);
                  }}
                />
              </p>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold mb-2">Resume</h3>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    Navigate("/");
                    toast.success("Logged out successfully ");
                  }}
                  className="bg-red-600 px-2 py-1 mb-4 hover:bg-red-700 duration-300 transition-all text-white rounded-lg cursor-pointer"
                >
                  Logout
                </button>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-between">
                <p className="text-gray-400 text-sm">resume_sudipdhakal.pdf</p>
                <button className="px-3 py-1 bg-yellow-600 rounded-lg hover:bg-yellow-500 transition text-sm cursor-pointer">
                  Upload
                </button>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center  border-b border-gray-600">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <h3
                  className="text-yellow-700 cursor-pointer hover:underline duration-300"
                  onClick={() => setAddSkills(true)}
                >
                  Add Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                  React.js
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                  UI/UX Design
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between border-b border-gray-600 ">
                <h3 className="text-xl font-semibold mb-2">Experiences</h3>
                <h3
                  className="text-yellow-700 cursor-pointer hover:underline "
                  onClick={() => setAddExperience(true)}
                >
                  Add Experiences
                </h3>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold">Frontend Developer</h4>
                  <p className="text-gray-400 text-sm">
                    ABC Company (2021 - 2023)
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold">Intern - Web Developer</h4>
                  <p className="text-gray-400 text-sm">XYZ Solutions (2020)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                Applied Jobs
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-gray-800 p-4 rounded-lg hover:shadow-xl transition">
                  <h4 className="font-bold">UI/UX Designer</h4>
                  <p className="text-gray-400 text-sm">
                    DesignHub - Applied on Aug 2025
                  </p>
                </div>
                <div className="flex-1 bg-gray-800 p-4 rounded-lg hover:shadow-xl transition">
                  <h4 className="font-bold">Full Stack Developer</h4>
                  <p className="text-gray-400 text-sm">
                    TechWorld - Applied on Jul 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addSkills && <DropdownSkills setAddSkills={setAddSkills} />}
      {addExperience && <AddExperience setAddExperience={setAddExperience} />}
    </>
  );
};

export default Profile;
