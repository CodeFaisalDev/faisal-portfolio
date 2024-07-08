import React from "react";
import NumberTicker from "@/components/magicui/number-ticker";
import LetterPullup from "@/components/magicui/letter-pullup";

export const EducationAndCirtification = () => {
  return (
    <div className="h-fit w-[95vw] md:w-[70vw] lg:mt-10 font-rubik text-gray-700 mt-10">
      <div className="lg:text-3xl text-sm md:text-xl font-bold grid grid-cols-2 justify-between text-center ">
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center ">
          <div className="">
            <NumberTicker value={3} />+
          </div>
          <div className="">
            <LetterPullup words={" Years of Expreance"} delay={0.05} />
          </div>
        </div>
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center ">
          <div>
            <NumberTicker value={25} />+
          </div>
          <div className="">
            <LetterPullup words={" Interactive Project"} delay={0.05} />
          </div>
        </div>
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center ">
          <div className="">
            <LetterPullup words={" Bachelor in"} delay={0.05} />
          </div>
          <div className="">
            <LetterPullup words={" Computer Science"} delay={0.05} />
          </div>
        </div>
        <div className="h-32 md:h-44 lg:h-64 border border-dashed rounded-xl m-2 bg-[#ffffffbb] flex flex-col justify-center items-center ">
          <div className="">
            <LetterPullup words={" Cirtified"} delay={0.05} />
          </div>
          <div className="">
            <LetterPullup words={" Full-Stack Developer"} delay={0.05} />
          </div>
        </div>
      </div>
    </div>
  );
};
