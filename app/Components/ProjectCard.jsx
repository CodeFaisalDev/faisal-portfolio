import React from 'react'
import Image from "next/image";
import AvatarCircles from "@/components/magicui/avatar-circles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShineBorder from "@/components/magicui/shine-border";
import CoolButton from "./CoolButton";
import Link from 'next/link';

const avatarUrls = ["/p1.png"];

const ProjectCard = () => {
  return (
    <div className='flex justify-center my-3'>
        <ShineBorder borderRadius={25} className={"p-5 hover:scale-105 transition-all duration-700"} color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
        <div className="w-full h-fit ">
          <Image
            src="/p1.png"
            width={1920}
            height={1080}
            className="w-full shadow-xl md:h-[25rem] lg:h-[20rem] 2xl:h-[30rem] object-cover "
            // objectFit="cover"
            alt="Portfolio Item"
          />
          <div className="h-full">
            <h1 className="text-center font-rubik text-gray-800 font-bold max-md:text-xl text-4xl mt-6">
              Shols Ecommarce Website
            </h1>
            <div className="grid max-md:justify-center md:flex mt-10 h-fit justify-between">
              <div className='max-md:flex max-md:justify-center max-md:mb-5'>
                <AvatarCircles numPeople={3} avatarUrls={avatarUrls} />
              </div>
              <div className="flex gap-3">
                <a href="/">
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      View Github
                    </span>
                  </ShimmerButton>
                </a>
                <Link href="/">
                  <CoolButton />
                </Link >
              </div>
            </div>
          </div>
        </div>
        </ShineBorder>
    </div>
  )
}

export default ProjectCard