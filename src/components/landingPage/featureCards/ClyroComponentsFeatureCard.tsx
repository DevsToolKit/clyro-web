/* eslint-disable @next/next/no-img-element */
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

function ClyroComponentsFeatureCard() {
  const { scrollYProgress } = useScroll();
  const moveX1 = useTransform(scrollYProgress, [0, 1], ["70%", "0%"]);
  const moveX2 = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const moveX3 = useTransform(scrollYProgress, [0, 1], ["-70%", "0%"]);

  return (
    <section className="flex flex-col bg-white rounded-[16px] md:flex-[1.5_0_0px] gap-[60px] justify-start overflow-hidden p-[30px] md:p-[40px] relative w-full border-[1px] border-solid border-[#e1e2e3] md:h-full shadow-md">
      <div className="flex flex-col justify-start gap-[10px] w-full z-[10]">
        <h3 className="text-[#2A3C54] text-[20px] tracking-[-0.3px] leading-[1.4em]">
          PixelShift: The Simple, Free Solution for Responsive Testing
        </h3>
        <p className="text-[#6A6F7C] poppins-regular">
          Pixelshift is an open-source tool designed for effortless{" "}
          <strong>responsive design testing</strong>. It allows you to preview
          and adjust your website's layout across{" "}
          <strong>multiple screen sizes</strong> and devices, ensuring
          consistent user experience and perfect alignment. Save time and ensure
          cross-device compatibility with Pixelshift's easy-to-use interface.
        </p>
        <div>
          <a
            href="#learn-more"
            className="text-[#0052CC] underline-offset-4 hover:text-[#003B8A] hover:underline transition duration-300 ease-in-out poppins-regular"
          >
            Learn more
          </a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute overflow-hidden inset-0 flex-none rounded-[16px] z-0"
        style={{
          background:
            "radial-gradient(97% 98% at 1.5% 99.1%, #FFFFFF 0%, #FFFFFF 100%)",
        }}
      ></motion.div>
      <div className="w-full justify-center items-center z-10 relative hidden md:flex">
        <motion.div
          style={{ x: moveX1 }}
          className="absolute top-0 left-0 w-[255px] h-[447px] flex flex-row gap-2.5 justify-center items-center align-content-center border-[1px] rounded-[13px] shadow-[inset_-10px_0_30px_#000c2499,_-.5px_-.5px_0_0.4px_#ffffff40] filter-none overflow-visible p-[3px_0_0_0] border-white/10 z-0"
        >
          <div className="absolute top-[0px]">
            <img
              src="./assets/images/clyroCard1.png"
              alt="Responsive Design Preview using Pixelshift"
            />
          </div>
        </motion.div>
        <motion.div
          style={{ x: moveX2 }}
          className="absolute top-[40px] left-[calc(50%-117px)] w-[234px] h-[315px] flex-none overflow-visible rounded-[13px] shadow-[inset_-20px_0_30px_#0009,_-.5px_-.5px_0_0.4px_#ffffff40] filter-none"
        >
          <div>
            <img src="./assets/images/clyroCard2.png" alt="Pixelshift Layout" />
          </div>
        </motion.div>

        <motion.div
          style={{ x: moveX3 }}
          className="absolute top-[80px] right-0 w-[234px] h-[315px] flex-none overflow-hidden rounded-[13px] shadow-[inset_-20px_0_30px_#0009,_-.5px_-.5px_0_0.4px_#ffffff40] p-0"
        >
          <div>
            <img
              src="./assets/images/clyroCard3.png"
              alt="Responsive Design using Pixelshift"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ClyroComponentsFeatureCard;
