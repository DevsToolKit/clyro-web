import React from "react";
import { Badge } from "../ui/badge";
import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";
import ClyroComponentsFeatureCard from "./featureCards/ClyroComponentsFeatureCard";
import TrueToneCard from "./featureCards/TrueToneCard";
import PixelShiftFeature2Card from "./featureCards/PixelShiftFeature2Card";
import OpenSourceCard from "./featureCards/OpenSourceCard";

function WhatWeHave() {
  return (
    <section className="flex flex-col gap-[32px] justify-center items-center">
      <div className="flex flex-col gap-[16px] justify-center items-center">
        <Badge variant={"secondary"}>
          <GoGoal className="text-[#141414] text-[14px]" />
          <span className="text-[#141414] secondaryFont text-[12px]">
            What we have
          </span>
        </Badge>
        <h2 className="text-[32px] leading-[1.2em] md:text-[48px] text-[#242424] text-center calSans max-w-[900px]">
          Build beautiful, consistent UI fast
        </h2>
        <p className="text-[18px] text-[#898989] font-normal max-w-[800px] text-center">
          Clyro is a unified design + dev component library for React, React
          Native, and Figma. We help teams ship faster with perfectly synced
          components across platforms.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5 h-auto max-w-screen-xl overflow-visible p-0 w-full rounded-md relative mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-2.5 h-fit md:h-[560px] overflow-visible p-0 w-full relative"
        >
          <ClyroComponentsFeatureCard />
          <TrueToneCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-2.5 h-fit md:h-[560px] overflow-visible   p-0 w-full relative"
        >
          <PixelShiftFeature2Card />
          <OpenSourceCard />
        </motion.div>
      </div>
    </section>
  );
}

export default WhatWeHave;
