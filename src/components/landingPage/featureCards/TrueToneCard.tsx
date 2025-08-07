/* eslint-disable @next/next/no-img-element */
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

function TrueToneCard() {
  return (
    <div className="border-b border-l border-r border-t border-solid border-border p-[30px] md:p-[40px] rounded-xl md:flex-1 md:h-full overflow-hidden relative w-full min-h-[500px] shadow-md bg-white">
      <div className="flex flex-col justify-start gap-[10px] w-full z-[10]">
        <h4 className="text-[#2a3c54] text-[20px] tracking-[-0.3px] leading-[1.4em]">
          TrueTone: Perfect Color Contrast for Your Website
        </h4>
        <p className="text-gray-400 poppins-regular">
          TrueTone helps ensure your website's color contrast is accessible and
          visually appealing across all devices. Quickly check your color
          combinations and optimize your design for better readability and user
          experience.
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
