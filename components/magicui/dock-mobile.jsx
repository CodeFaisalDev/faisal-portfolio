"use client";;
import React, { useRef } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 40;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto  w-max h-[58px] p-2 flex items-center gap-12 "
);

const Dock = React.forwardRef((
  {
    className,
    children,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    ...props
  },
  ref,
) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        mouseX: mouseX,
        magnification: magnification,
        distance: distance,
      });
    });
  };

  return (
    (<motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(dockVariants({ className }), className)}>
      {renderChildren()}
    </motion.div>)
  );
});

Dock.displayName = "Dock";

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [30, magnification, 30]);

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    (<motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square shadow-2xl shadow-[#E796F3] cursor-pointer items-center justify-center rounded-full bg-white",
        className
      )}
      {...props}>
      {children}
    </motion.div>)
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
