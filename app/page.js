import Image from "next/image";
import Hero from "./Components/Hero";
import DotPattern from "@/components/magicui/dot-pattern";
import Particles from "@/components/magicui/particles";
import cn from "classnames";
import Skills from "./Components/Skills";
import ReviewsMain from "./Components/Reviews";
import HeroNew from "./Components/HeroNew";
import { EducationAndCirtification } from "./Components/EduCri";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

export default function Home() {
  const color = "indigo"
  return (
      <main className="flex text-gray-700 min-h-fit flex-col items-center justify-between md:p-36">
        {/* <DotPattern className={cn(
          "-z-10 -mt-24 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
        )} /> */}
        <Particles
        className="absolute -z-10 inset-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />
        <Hero />
        <EducationAndCirtification />
        {/* <HeroNew /> */}
        <Skills/>
        <ReviewsMain />
        <Portfolio />
        <Contact />
      </main>
  );
}
