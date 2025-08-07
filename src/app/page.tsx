"use client";
import CompaniesThatChooseUs from "@/components/landingPage/CompaniesThatChooseUs";
import LandingCTA from "@/components/landingPage/LandingCTA";
import LayoutContainer from "@/components/layout/layoutContainer";
import React from "react";
import WithUsSection from "../components/landingPage/WithUsSection";
import WhatWeHave from "@/components/landingPage/WhatWeHave";

function page() {
  return (
    <main className="secondaryFont min-h-screen w-full bg-[#f4f4f4]">
      <LayoutContainer className="pb-0 pt-[92px] ">
        <LandingCTA />
      </LayoutContainer>
      <LayoutContainer>
        <CompaniesThatChooseUs />
      </LayoutContainer>
      <LayoutContainer className="py-[60px] md:py-[94px]">
        <WithUsSection />
      </LayoutContainer>
      <LayoutContainer className="py-[60px] md:py-[94px]">
        <WhatWeHave />
      </LayoutContainer>
    </main>
  );
}

export default page;
