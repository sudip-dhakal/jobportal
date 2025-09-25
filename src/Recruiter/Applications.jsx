import React from "react";
import Background from "../Reusable/Background";
import RecruiterNav from "../Reusable/RecruiterNav";

const Applications = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>
      <RecruiterNav />

      <div className="mt-5 rounded-md w-[80%] mx-auto border border-gray-400 border-solid h-[90vh]">
        <div className="bg-gray-900 h-full w-full p-6 overflow-auto">
          <table className="w-full text-white border-collapse">
            <thead>
              <tr className="bg-gray-700 text-left">
                <th className="border border-gray-600 px-4 py-2">S.N</th>
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Resume</th>
                <th className="border border-gray-600 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-800">
                <td className="border border-gray-600 px-4 py-2">1</td>
                <td className="border border-gray-600 px-4 py-2">Sudip Dhakal</td>
                <td className="border border-gray-600 px-4 py-2">
                  <a href="#" className="text-blue-400 hover:underline">
                    View
                  </a>
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                    Select
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="border border-gray-600 px-4 py-2">2</td>
                <td className="border border-gray-600 px-4 py-2">Krishna Kanhaiya</td>
                <td className="border border-gray-600 px-4 py-2">
                  <a href="#" className="text-blue-400 hover:underline">
                    View
                  </a>
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                    Select
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Applications;
