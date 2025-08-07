import { GlobalArcs } from "@/constants/GlobeArcs";
import { useScroll, useTransform, motion } from "framer-motion";
import dynamic from "next/dynamic";

import React from "react";

const World = dynamic(() => import("../../ui/globe").then((m) => m.World), {
  ssr: false,
});

function OpenSourceCard() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="relative border border-border flex flex-col gap-10 p-[30px] md:p-[40px] rounded-xl md:flex-1 md:h-full overflow-hidden w-full h-[500px] bg-white shadow-md">
      <div className="flex flex-col justify-start gap-[10px] w-full z-10">
        <h4 className="text-[#2a3c54] text-[20px] tracking-[-0.3px] leading-[1.4em]">
          Open-Source Tools – Contribute Today!
        </h4>
        <p className="text-[#6a6f7c] poppins-regular">
          All the tools featured here are open-source, and we welcome
          contributions from anyone who wants to help improve the project.
          Whether you're a developer, designer, or enthusiast, your input is
          valuable. Together, we can make these tools even better for everyone.
        </p>
        <div>
          <p className="text-white/80 underline-offset-4 hover:text-white hover:underline transition duration-300 ease-in-out poppins-regular">
            Learn more and contribute
          </p>
        </div>
      </div>

      {/* Huge Globe Positioned with Negative Offset */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
        <World data={GlobalArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}

export default OpenSourceCard;
