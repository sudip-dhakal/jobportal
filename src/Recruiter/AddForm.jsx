import React from "react";

const AddForm = ({setAddCompany}) => {
  return (
    <form className="flex flex-col justify-center space-y-3 bg-gray-800 p-6 rounded-2xl w-[80%] mx-auto shadow-xl text-white">
      <h2 className="text-2xl font-bold text-amber-500 text-center mb-4">
        Add New Company
      </h2>

      <div className="flex flex-col sm:flex-row sm:gap-4">
        <div className="flex-1 flex flex-col mb-3 sm:mb-0">
          <label className="mb-1 font-medium text-gray-300">Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            className="p-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="mb-1 font-medium text-gray-300">Address</label>
          <input
            type="text"
            placeholder="Enter address"
            className="p-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-4 items-end">
        <div className="flex-1 flex flex-col mb-3 sm:mb-0">
          <label className="mb-1 font-medium text-gray-300">Logo</label>
          <input
            type="file"
            accept="image/*"
            className="p-1 rounded-lg border border-gray-600 bg-gray-900 text-white file:bg-amber-500 file:text-black file:px-2 file:py-1 file:rounded-lg file:border-none cursor-pointer focus:outline-none"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="mb-1 font-medium text-gray-300">
            Total Members
          </label>
          <input
            type="number"
            placeholder="0"
            className="p-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-300">Description</label>
        <textarea
          rows="3"
          placeholder="Write a short description..."
          className="p-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-4">
        <div className="flex-1 flex flex-col">
          <label className="mb-1 font-medium text-gray-300">Website</label>
          <input
            type="url"
            placeholder="https://example.com"
            className="p-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          className="px-4 py-2 cursor-pointer rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          onClick={() => setAddCompany(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddForm;
