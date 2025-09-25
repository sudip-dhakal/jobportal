import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaBuilding, FaHome, FaPhoneAlt } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const RecruiterNav = () => {
  const Navigation = useNavigate();
  return (
    <>
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
            onClick={() => Navigation("/recruiter_home")}
            className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
          >
            <FaHome className="hidden sm:visible" size={20} />
            Home
          </li>

          <li
            onClick={() => Navigation("/companies")}
            className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
          >
            <FaBuilding className="hidden sm:visible" size={20} />
            Companies
          </li>

          <li
            className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
            onClick={() => Navigation("/applications")}
          >
            <BsFillRocketTakeoffFill className="hidden sm:visible" size={20} />
            Applications
          </li>

          {/* <li
            className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300"
            onClick={() => Navigation("/profile")}
          >
            <CgProfile className="hidden sm:visible" size={20} />
            Profile
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default RecruiterNav;
