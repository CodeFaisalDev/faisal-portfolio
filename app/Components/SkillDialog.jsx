import React from "react";
import { Dialog } from "@radix-ui/themes";

const SkillDialog = ({ name, desc }) => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <span className="font-rubik flex hover:-translate-y-1 transition-all duration-300 w-full px-3 py-3 lg:py-10 sm:py-6 2xl:py-16 shadow-2xl md:shadow-2xl shadow-[#5471e442] md:shadow-[#5471e43d] place-content-center bg-[#ffffff9f] cursor-pointer rounded-full  md:m-5">{name}</span>
        </Dialog.Trigger>

        <Dialog.Content className="flex flex-col justify-center items-center" maxWidth="450px">
          <Dialog.Title>
            <h1 className="text-3xl font-bold">
            {name}
            </h1>
            </Dialog.Title>
          <Dialog.Description size="3" mb="4">
            {desc}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default SkillDialog;
