import React, { useState } from "react";
import Background from "../Reusable/Background";
import RecruiterNav from "../Reusable/RecruiterNav";
import companies from "../Data/CompanyData";
import { IoIosAddCircle } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import AddForm from "./AddForm";

const Companies = () => {
  const [addCompany, setAddCompany] = useState(false);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>
      <RecruiterNav />

      <div className="mt-5 w-[85%] mx-auto ">
        {addCompany ? (
          <AddForm setAddCompany={setAddCompany} />
        ) : (
          <h1 className="text-4xl text-amber-600 font-bold text-center mb-6 overflow-hidden">
            Registered Companies
          </h1>
        )}

        <div className="relative z-100">
          <div
            className="fixed bottom-7 right-10 cursor-pointer group"
            onClick={() => setAddCompany(!addCompany)}
          >
            <IoIosAddCircle color="yellow" size={60} />
            <div className="fixed bottom-25 right-5 opacity-0 group-hover:opacity-100 bg-amber-600 text-black px-4 z-100 py-2 rounded-lg transition-opacity">
              <p>Add New Company</p>
            </div>
            <div className="fixed bottom-20 z-100 right-13 opacity-0 group-hover:opacity-100 transition-opacity">
              <FaCaretDown size={35} color="#d97706" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:border-blue-500 transition w-full sm:w-[45%] lg:w-[30%]"
            >
              <h2 className="text-xl font-semibold text-white">{company.name}</h2>
              <p className="text-gray-400 text-sm mt-1">{company.industry}</p>

              <div className="mt-4 flex justify-between items-center">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Visit Website
                </a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
