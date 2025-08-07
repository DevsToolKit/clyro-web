/* eslint-disable @next/next/no-img-element */
import FigmaArrow from "@/components/ui/figmaArrow";
import React from "react";
import { motion } from "framer-motion";

function FigmaCard() {
  return (
    <div className="relative w-full h-full">
      <div>
        {/* TODO : Add figma logo here! */}
        <div className="absolute w-[120px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-[70px] left-[60px]">
        <FigmaArrow name={"Piyush"} variant={"blue"} />
      </div>
      <div className="absolute bottom-[70px] right-[120px]">
        <FigmaArrow name={"Shubham"} variant={"orange"} />
      </div>

      <div>
        {/* TODO : Add figma logo here! */}
        <motion.div
          className="absolute w-[220px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0  blur-xl opacity-40"
          initial={{ opacity: 0, scale: 0.5, y: 0, x: 0 }}
          whileInView={{ opacity: 0.3, scale: 1, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default FigmaCard;
