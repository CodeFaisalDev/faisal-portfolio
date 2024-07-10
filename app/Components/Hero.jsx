import React from "react";
import Image from "next/image";
import WordPullUp from "@/components/magicui/word-pull-up";


const Hero = () => {
  return (
    <div id="home">
      <div className="max-md:mt-36 w-[90vw] md:w-[70vw] lg:mb-36 mt-20 max-md:h-fit max-md:p-3">
        <div className="font-rubik max-md:h-full h-fit max-md:-mt-20 flex content-center items-center flex-col-reverse md:flex-row w-full gap-9">
          <div className="max-md:h-1/2 md:w-2/3 h-full items-center">
            <div className="flex h-full items-center">
              <WordPullUp
                className="font-bold h-fit max-md:font-bold max-md:text-center text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-8xl 2xl:p-10"
                words="Hello 👋 I'm Faisal Sorkar, a professional full-stack developer based in Dhaka, Bangladesh."
              />
            </div>
          </div>
          <div className="w-full h-full md:w-1/3 max-md:px-20 md:h-1/3 justify-center place-content-center">
            <Image
              src="/hero.jpeg"
              width={500}
              height={500}
              alt="hero image"
              className="rounded-full shadow-2xl hover:scale-110 transition-all duration-700 bg-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
