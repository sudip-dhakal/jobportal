import React from "react";
import { toast } from "react-toastify";

import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaBuilding,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigation = useNavigate();
  return (
    <>
      {localStorage.getItem("user") === "1" ? (
        <div className="flex relative z-10 text-white bg-zinc-700 p-4 justify-between">
          <span
            className="w-[4rem] ml-10 rounded-full h-[4rem] cursor-pointer"
            onClick={() => Navigation("/")}
          >
            <img
              src="/logo.png"
              className="w-full h-full rounded-full border-amber-500  border-solid border-2 object-center object-cover"
              alt=""
            />
          </span>
          <ul className="flex justify-end gap-x-10 text-[1rem] pr-10  ">
            {/* <li
              onClick={() => Navigation("/")}
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
            >
              <FaHome className="hidden sm:visible" size={20} />
              Home
            </li> */}

            <li
              onClick={() => Navigation("/jobs")}
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
            >
              <FaBuilding className="hidden sm:visible" size={20} />
              Explore Jobs
            </li>

            <li
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
              onClick={() => Navigation("/profile")}
            >
              <CgProfile className="hidden sm:visible" size={20} />
              Profile
            </li>

            <li
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
              onClick={() => Navigation("/contact")}
            >
              <FaPhoneAlt className="hidden sm:visible" size={20} />
              Contact Us
            </li>

            {/* <li
              className="flex gap-x-3 items-center cursor-pointer duration-300 bg-red-700 px-4 rounded-md"
              onClick={() => Navigation("/login")}
            >
              <FaUser className="hidden sm:visible" size={20} />
              Login/Register
            </li> */}
          </ul>
        </div>
      ) : (
        <div className="flex relative z-10 text-white bg-zinc-700 p-4 justify-between">
          <span
            className="w-[4rem] ml-10 rounded-full h-[4rem] cursor-pointer"
            onClick={() => Navigation("/")}
          >
            <img
              src="/logo.png"
              className="w-full h-full rounded-full border-amber-500  border-solid border-2 object-center object-cover"
              alt=""
            />
          </span>
          <ul className="flex justify-end gap-x-10 text-[1rem] pr-10  ">
            <li
              onClick={() => Navigation("/")}
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
            >
              <FaHome className="hidden sm:visible" size={20} />
              Home
            </li>

            <li
              onClick={() => toast.error("Please login to explore jobs")}
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
            >
              <FaBuilding className="hidden sm:visible" size={20} />
              Explore Jobs
            </li>

            {/* <li
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
              onClick={() => Navigation("/profile")}
            >
              <CgProfile className="hidden sm:visible" size={20} />
              Profile
            </li> */}

            <li
              className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
              onClick={() => Navigation("/contact")}
            >
              <FaPhoneAlt className="hidden sm:visible" size={20} />
              Contact Us
            </li>

            <li
              className="flex gap-x-3 items-center cursor-pointer duration-300 bg-red-700 px-4 rounded-md"
              onClick={() => Navigation("/login")}
            >
              <FaUser className="hidden sm:visible" size={20} />
              Login/Register
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
