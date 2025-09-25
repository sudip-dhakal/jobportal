import React from "react";
import Background from "../Reusable/Background";
import Navbar from "../Reusable/Navbar";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { hiringData, applicationData } from "../Data/ChartData";
import RecruiterNav from "../Reusable/RecruiterNav";


const Rec_Home = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>
      <RecruiterNav/>
      <div className="flex w-[90%] h-[85vh] justify-between text-white mx-auto p-6 mt-6 rounded-xl bg-gray-900 shadow-lg gap-6">
        <div className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center">
          <h1 className="font-bold text-center text-2xl text-yellow-400">
            Hiring Per Month
          </h1>
          <div className="h-[75%] mt-6">
            <Bar
              data={hiringData}
              options={{
                plugins: {
                  legend: { labels: { color: "#f9fafb" } },
                },
                scales: {
                  x: { ticks: { color: "#f9fafb" } },
                  y: { ticks: { color: "#f9fafb" } },
                },
              }}
            />
          </div>
        </div>
        <div className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center">
          <h1 className="font-bold text-center text-2xl text-yellow-400">
            Applications Per Month
          </h1>
          <div className="h-[75%] flex items-center justify-center mt-6">
            <Doughnut
              data={applicationData}
              options={{
                plugins: {
                  legend: {
                    labels: { color: "#f9fafb", font: { size: 14 } },
                    position: "bottom",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rec_Home;
