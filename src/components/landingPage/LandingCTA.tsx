import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ComponentsDemo from "./ui/ComponentsDemo";
import CodingUI from "./ui/CodeingUI";
import { AnimatePresence, motion } from "framer-motion";

function LandingCTA() {
  return (
    <div
      className="w-full bg-white relative rounded-[12px] border-[1px] border-[#e1e2e3] items-center flex flex-[1_0_0%] flex-row flex-nowrap gap-0 h-min p-0 overflow-hidden p-5 md:py-[74px] md:pl-[64px]"
      style={{
        boxShadow: "0 1px 5px -4px #242424b3, 0 4px 8px #2424240d",
      }}
    >
      {/* vertical spacing left */}
      <div className="w-[64px] opacity-1 h-full flex"></div>
      <div className="items-center flex flex-none flex-col md:flex-row flex-nowrap gap-[48px] h-min justify-start max-w-[12800px] overflow-visible p-0 relative w-full">
        <LeftSideContainer />
        <RightSideContainer />
      </div>
    </div>
  );
}

const LeftSideContainer = () => {
  return (
    <div className="flex flex-col flex-nowrap items-start flex-[1_0_0px] gap-[16px] h-min max-w-[960px] overflow-visible w-[1xp]">
      <Badge variant="outline" className="outfit font-normal">
        Clyro v0 Released 🚀
      </Badge>
      <>
        <h1 className="text-[40px] md:text-[64px] text-[#242424] leading-[0.9em] md:leading-[1.1em] calSans">
          Build beautiful interfaces, everywhere
        </h1>
        <p className="secondaryFont text-[#898989] text-[14px] md:text-[16px] font-normal">
          Clyro is a modern UI component library for React, Next.js, React
          Native, and Android. Design once, implement anywhere — perfect for
          cross-platform development and scalable design systems.
        </p>
      </>
      <div className="w-full flex flex-col gap-2">
        <Button className="w-full secondaryFont">Get started!</Button>
        <Button variant="outline" className="w-full secondaryFont">
          Open Figma Library
        </Button>
      </div>
      <span className="secondaryFont text-[14px] text-[#898989]">
        Free, open-source, and built for developers and designers
      </span>
    </div>
  );
};

const RightSideContainer = () => {
  const [showCodingUI, setShowCodingUI] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const toggleLoop = () => {
      setShowCodingUI(true);

      // Show code for 5 seconds
      setTimeout(() => {
        setShowCodingUI(false);
      }, 5000);
    };

    toggleLoop(); // initial run
    intervalId = setInterval(toggleLoop, 11000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:flex flex-col flex-nowrap items-start justify-start flex-[1_0_0px] gap-12 overflow-visible p-0 relative w-px hidden h-full">
      <div className="flex-none h-auto relative w-auto">
        <div className="flex flex-nowrap items-start justify-start gap-0 h-min overflow-visible p-0 relative w-[713px] flex-row">
          <ComponentsDemo active={!showCodingUI} />

          <AnimatePresence>
            {showCodingUI && (
              <motion.div
                className="absolute w-full bottom-[-30px] left-[30px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <CodingUI />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default LandingCTA;
