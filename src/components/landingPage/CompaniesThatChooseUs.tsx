import React from "react";
import Marquee from "react-fast-marquee";

function CompaniesThatChooseUs() {
  return (
    <div className="flex flex-col md:flex-row justify-start md:justify-center items-center pl-0 md:pl-[64px] w-full">
      <div className="mb-4 md:mb-0 md:mr-8">
        <p className="text-[14px] leading-[16px] secondaryFont w-[200px] flex-1 text-[#141414] text-center md:text-left">
          Trusted by fast-growing companies around the world
        </p>
      </div>
      <div className="w-full">
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#f4f4f4"
          direction="left"
          gradientWidth={100}
        >
          {logoSources.map((src, index) => (
            <ImageContainer key={index} src={src} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

// Logo sources (adjust as needed)
const logoSources = [
  "./assets/logos/1.png",
  "./assets/logos/2.png",
  "./assets/logos/3.png",
  "./assets/logos/4.png",
  "./assets/logos/5.png",
  "./assets/logos/6.png",
  "./assets/logos/7.png",
  "./assets/logos/8.png",
];

const ImageContainer = ({ src }: { src: string }) => {
  return (
    <div className="ml-6 md:ml-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="w-[80px] sm:w-[100px] md:w-[120px] h-[50px] sm:h-[60px] md:h-[80px] object-contain filter grayscale opacity-80"
      />
    </div>
  );
};

export default CompaniesThatChooseUs;
