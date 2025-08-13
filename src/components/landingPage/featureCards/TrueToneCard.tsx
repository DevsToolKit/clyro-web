/* eslint-disable @next/next/no-img-element */
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

function TrueToneCard() {
  return (
    <div className="border-b border-l border-r border-t border-solid border-border p-[30px] md:p-[40px] rounded-xl md:flex-1 md:h-full overflow-hidden relative w-full min-h-[500px] shadow-md bg-white">
      <div className="flex flex-col justify-start gap-[10px] w-full z-[10]">
        <h4 className="text-[#2a3c54] text-[20px] tracking-[-0.3px] leading-[1.4em]">
          Clyro Colors: Perfect Contrast, Everywhere
        </h4>
        <p className="text-gray-400 poppins-regular">
          Clyro Colors ensures your interface meets WCAG color contrast
          guidelines while staying visually stunning. Easily preview your
          palettes, test accessibility across themes, and fine-tune colors for
          better readability and user comfort on any screen, in any mode.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="./assets/images/figmaThumbnail.png"
          alt=""
          className="bg-contain w-full"
        />
      </div>
    </div>
  );
}

export default TrueToneCard;
