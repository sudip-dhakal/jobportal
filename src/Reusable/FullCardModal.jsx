import React from "react";

const FullCardModal = ({ setCardModal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center">
        <div className=" w-[80vw] h-[80vh] bg-zinc-800 rounded-lg p-4">
          <div className="flex gap-x-10 items-center">
            <div className="w-20 h-20 rounded-full border-2 border-amber-500 overflow-hidden">
              <img
                src="/jobimg.jpg"
                alt="Job"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold p-4">
                Product Designer
              </h2>
              <div className="flex gap-x-5">
                <p className="p-2 rounded-xl  bg-red-700 text-white">
                  Experience: 1 year
                </p>
                <p className="p-2 rounded-xl  bg-blue-700 text-white">
                  Job Type : Full Time
                </p>
                <p className="p-2 rounded-xl  bg-green-700 text-white">
                  Salary : 40000
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 p-4 text-justify">
            We are seeking a motivated Frontend Developer to join our dynamic
            team. The ideal candidate will have strong experience with React,
            JavaScript, HTML, and CSS, and a passion for building user-friendly,
            responsive web applications. You will collaborate with designers and
            backend developers to implement high-quality interfaces, optimize
            performance, and ensure cross-browser compatibility. The role
            requires problem-solving skills, attention to detail, and the
            ability to work in an agile environment to deliver projects on time
            while continuously learning and contributing to innovative
            solutions.
          </p>

          <div className=" w-[70%] mx-auto flex flex-col justify-between gap-y-5 mt-auto pt-4">
            <button className="bg-blue-700 text-white cursor-pointer px-4 py-2 rounded-xl">
              Easy Apply
            </button>
            <button
              className="bg-red-700 text-white cursor-pointer px-4 py-2 rounded-xl"
              onClick={() => setCardModal(false)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCardModal;
