import React, { useState } from "react";
import { testimonials } from "../Data/Testimonials";

const Testimonial_card = () => {
  const [data] = useState(testimonials);

  return (
    <div className="bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => {
          const initials = item.name
            .split(" ")
            .map((word) => word[0])
            .join("");

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center text-lg font-semibold shadow-sm">
                  {initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 text-justify leading-relaxed text-[1rem]">
                  "{item.message}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial_card;
