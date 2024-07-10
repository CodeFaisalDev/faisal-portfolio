"use client"
import React from "react";
import NumberTicker from "@/components/magicui/number-ticker";
import LetterPullup from "@/components/magicui/letter-pullup";

export const EducationAndCertificationMobile = () => {
  return (
    <div className="h-fit w-[95vw] md:w-[70vw] lg:mt-10 font-rubik text-gray-700 mt-10">
      <div className="lg:text-3xl text-sm md:text-xl font-bold grid grid-cols-2 justify-between text-center">
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center">
          <div>
            <h1>3+</h1>
          </div>
          <div>
            <h1>Years of Experience</h1>
          </div>
        </div>
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center">
          <div>
            <h1>25+</h1>
          </div>
          <div>
            <h1>Interactive Projects</h1>
          </div>
        </div>
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center">
          <div>
            <h1>Bachelor in</h1>
          </div>
          <div>
            <h1>Computer Science</h1>
          </div>
        </div>
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center">
          <div>
            <h1>Certified</h1>
          </div>
          <div>
            <h1>Full-Stack Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
