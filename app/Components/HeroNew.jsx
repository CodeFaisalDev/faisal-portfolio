import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const HeroNew = () => {
  return (
    <div>
      <h1>Hero</h1>
      <VelocityScroll
        text="Velocity Scroll"
        default_velocity={5}
        className="font-display text-center font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
};

export default HeroNew;
