import React from "react";
import Hero from "./Hero";
import Testimonial_card from "./Testimonial_card";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <div className="w-screen ">
        <Hero />
        <div className="pt-5 mt-10 w-[70%] mx-auto ">
          <div className="flex justify-between">
            <span className="">
              <h1 className="text-5xl font-bold text-center text-yellow-600 overflow-hidden">
                Several years of providing Jobs to thousands
              </h1>

              <p
                className="text-justify mt-3 text-xl text-[#656565] leading-relaxed
 "
              >
                Over the years, we have proudly empowered thousands of
                individuals by connecting them with meaningful job
                opportunities. At the heart of our mission is a commitment to
                transforming careers, supporting job seekers, and helping
                businesses grow with the right talent. Jobease stands as a
                trusted platform where ambition meets opportunity, delivering
                reliable, efficient, and impactful hiring solutions for
                everyone.
              </p>

              <div className="flex gap-x-10 justify-center mt-7">
                <button className="w-[10rem] h-[3rem] border-2 border-solid border-amber-900 rounded-lg bg-amber-950 text-white text-xl cursor-pointer duration-300 hover:bg-red-600">
                  Join Us
                </button>
                <button className="w-[10rem] h-[3rem] border-2 border-solid border-amber-900 rounded-lg text-xl cursor-pointer duration-300 hover:bg-red-600 hover:text-white">
                  Browse Jobs
                </button>
              </div>
            </span>
          </div>
        </div>

        <div className="pt-5 mt-12 w-[70%] mx-auto ">
          <h1 className="text-5xl font-bold text-center text-yellow-600 overflow-hidden">
            Testimonials
          </h1>

          {
            <div>
              <Testimonial_card />
            </div>
          }
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Landing;
