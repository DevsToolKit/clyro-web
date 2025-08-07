"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { GoGoal } from "react-icons/go";
import { Button } from "../ui/button";
import RotatingIconsCARD from "./ui/RotatingIconsCARD";
import SetAvailabilityCARD from "./ui/SetAvailabilityCARD";
import FigmaCard from "./ui/FigmaCard";
// import MeetingUICARD from "./ui/MeetingUICARD";

function WithUsSection() {
  return (
    <section className="flex flex-col gap-[32px] justify-center items-center">
      {/* Headings */}
      <div className="flex flex-col gap-[16px] justify-center items-center">
        <Badge variant={"secondary"}>
          <GoGoal className="text-[#141414] text-[14px]" />
          <span className="text-[#141414] secondaryFont text-[12px]">
            How it works
          </span>
        </Badge>
        <h2 className="text-[32px] leading-[1.2em] md:text-[48px] text-[#242424] text-center calSans max-w-[900px]">
          Unlock Seamless UI Development for React, Next.js, React Native, and
          Beyond
        </h2>
        <p className="text-[18px] text-[#898989] font-normal max-w-[800px] text-center">
          Powerful and reusable components designed to accelerate your
          development for React, Next.js, and React Native. Simplify UI creation
          and streamline your workflow.
        </p>
        <Button>Start Building Now</Button>
      </div>
      {/* Card container */}
      {/*  */}
      <div className="grid flex-none max-w-[1048px] gap-2 sm:gap-3 grid-rows-[minmax(0,1fr)] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-min justify-center overflow-visible p-0 relative w-full">
        <Card
          cardId="01"
          cardTitle="Flexible UI Components for All Platforms"
          cardDescription="Integrate customizable UI components for React, Next.js, React Native, and more (Android Studio coming soon)."
        >
          <div className="h-[220px]"></div>
          <div className="w-full absolute bottom-0 left-0 h-[250px] overflow-hidden">
            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
            <div
              style={{
                transform: "translate(0, -30px)",
              }}
            >
              <RotatingIconsCARD />
            </div>
          </div>
        </Card>
        <Card
          cardId="02"
          cardTitle="Over 30+ Customizable Components"
          cardDescription="30+ reusable, fully customizable components to elevate your project’s UI design and functionality."
        >
          <div className="h-[220px]"></div>
          <div className="w-full absolute bottom-0 left-0 h-[250px] overflow-hidden pl-10">
            <SetAvailabilityCARD />
          </div>
        </Card>
        <Card
          cardId="03"
          cardTitle="Access Figma Files for Easy Collaboration"
          cardDescription="Collaborate easily with Figma files for all components, ensuring design consistency across teams."
        >
          <div className="h-[220px]"></div>
          <div className="w-full absolute bottom-0 left-0 h-[250px]">
            <FigmaCard />
          </div>
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  children,
  cardId,
  cardTitle,
  cardDescription,
}: {
  children: React.ReactNode;
  cardId: string;
  cardTitle: string;
  cardDescription: string;
}) => {
  return (
    <div className="flex flex-none flex-col flex-nowrap gap-8 h-full w-full p-6 bg-white rounded-2xl shadow-[0_1px_5px_-4px_#242424b3,0_4px_8px_#2424240d] border border-solid border-[#e1e2e3] items-center justify-start self-start justify-self-start content-center relative overflow-hidden">
      <div className="flex flex-none flex-col flex-nowrap gap-4 h-min w-full p-0 items-start content-start justify-center overflow-visible relative">
        <div className="bg-gray-200 py-2 px-4 rounded-xl">
          <span className="text-[#141414] secondaryFont text-[12px] z-1">
            {cardId}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[18px] leading-[1.2em] text-[#242424]  z-1">
            {cardTitle}
          </h4>
          <p className="secondaryFont text-[14px] leading-[1.2em] text-[#898989] mt-0 z-1">
            {cardDescription}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default WithUsSection;
