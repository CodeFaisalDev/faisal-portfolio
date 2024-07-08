import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

const CoolButton = () => {
  return (
    <button class="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white shadow-xl rounded-full text-sm md:text-md font-bold hover:bg-white group py-2 px-6 md:py-4 md:px-8">
      <span class="w-56  h-48 rounded bg-gray-900 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative text-center w-full  text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white">
        View Demo
      </span>
    </button>
  );
};

export default CoolButton;
