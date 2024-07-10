import Hero from "./Components/Hero";
import Particles from "@/components/magicui/particles";
import Skills from "./Components/Skills";
import ReviewsMain from "./Components/Reviews";
import { EducationAndCertification } from "./Components/EduCri";
import { EducationAndCertificationMobile } from "./Components/EduCriMobile";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

export default function Home() {
  const color = "indigo";
  return (
    <main className="flex text-gray-700 min-h-fit flex-col items-center justify-between md:p-36">
      <Particles
        className="absolute -z-10 inset-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />
      <Hero />
      <div className="max-md:hidden">
        <EducationAndCertification />
      </div>
      <div className="md:hidden">
        <EducationAndCertificationMobile />
      </div>
      <Skills />
      <ReviewsMain />
      <Portfolio />
      <Contact />
    </main>
  );
}
