import Link from "next/link";
import React from "react";
import Image from "next/image";
import SparklesText from "@/components/magicui/sparkles-text";
import { CoolMode } from "@/components/magicui/cool-mode";

const Contact = () => {
  return (
    <section id="contact">
      <div className="font-rubikshadow-[#5471e457] max-md:w-[90vw] rounded-2xl bg-[#ffffff7c] md:p-24 flex flex-col justify-center xl:mt-32 w-[70vw]">
        <div className="justify-center text-center">
          <h1 className="font-bold max-md:text-4xl text-6xl">Contact</h1>
        </div>
        <div className=" max-md:justify-center  max-md:grid max-md:grid-rows-3 max-md:gap-20  flex justify-between md:py-32 py-10 items-center">
          <span
            className="
         w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 2xl:w-40 2xl:h-40 hover:scale-110 transition-all duration-700"
          >
            <CoolMode>
              <Link href="https://lucide.dev/icons/">
                <Image
                  src="/Upwork.png"
                  alt="upwork logo"
                  width={500}
                  height={500}
                />
                <SparklesText
                  className="text-center md:m-3 font-bold max-md:text-xl text-2xl"
                  text="Upwork"
                />
              </Link>
            </CoolMode>
          </span>

          <span className=" w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 2xl:w-40 2xl:h-40 hover:scale-110 transition-all duration-700 ">
            <CoolMode>
              <Link href="/">
                <Image
                  src="/LinkedIn.png"
                  alt="linkedin logo"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <SparklesText
                  className="text-center md:m-3 font-bold max-md:text-xl text-2xl"
                  text="LinkedIn"
                />
              </Link>
            </CoolMode>
          </span>

          <span className=" w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 2xl:w-40 2xl:h-40 hover:scale-110 transition-all duration-700">
            <CoolMode>
              <Link href="/">
                <Image
                  src="/Fiver.png"
                  alt="fiver logo"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <SparklesText
                  className="text-center md:m-3 font-bold max-md:text-xl text-2xl"
                  text="Fiver"
                />
              </Link>
            </CoolMode>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
