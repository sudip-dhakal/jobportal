import React from "react";

const Background = () => {
  return (
    <>
      <div
        className="min-h-screen relative bg-cover bg-center"
        style={{ backgroundImage: "url('/job.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
    </>
  );
};

export default Background;
