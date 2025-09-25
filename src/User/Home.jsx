import React from "react";
import Navbar from "../Reusable/Navbar";
import JobCard from "../Reusable/JobCard";

const Home = () => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/job.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <Navbar />

      <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-5 px-4">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />

     
      </div>
    </div>
  );
};

export default Home;
