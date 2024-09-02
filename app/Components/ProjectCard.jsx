"use client";

import React from 'react';
import Image from "next/image";
import AvatarCircles from "@/components/magicui/avatar-circles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShineBorder from "@/components/magicui/shine-border";
import CoolButton from "./CoolButton";
import Link from 'next/link';

const ProjectCard = ({ name, img, git, demo, tech }) => {
  return (
    <div className="flex w-full justify-center my-3">
      <ShineBorder borderRadius={25} className="p-5 hover:scale-105 transition-all duration-700" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
        <div className="lg:w-[30vw] h-full md:w-[40vw] w-[80vw]">
          <div className="relative w-full h-[15rem] md:h-[25rem] lg:h-[20rem] 2xl:h-[30rem] overflow-hidden rounded-lg shadow-xl">
            <Image
              src={img}
              layout="fill"
              objectFit="cover"
              alt="Portfolio Item"
              className="w-full h-full"
            />
          </div>
          <div className="h-fit">
            <h1 className="text-center font-rubik text-gray-800 font-bold max-md:text-lg text-3xl mt-6">
              {name}
            </h1>
            <div className="grid justify-center mt-10 h-fit">
              <div className="flex w-full justify-center mb-5 max-md:mb-8">
                <AvatarCircles numPeople={2} avatarUrls={tech} />
              </div>
              <div className="flex gap-3">
                <a href={git}>
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      View Github
                    </span>
                  </ShimmerButton>
                </a>
                <Link href={demo}>
                  <CoolButton />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ShineBorder>
    </div>
  );
}

export default ProjectCard;
