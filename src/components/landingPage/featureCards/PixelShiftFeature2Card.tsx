/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { FaPlay } from "react-icons/fa6";

function PixelShiftFeature2Card() {
  return (
    <div
      className="flex flex-col bg-white rounded-[16px] md:flex-[1_0_0px] gap-[20px] justify-start overflow-hidden p-[30px] md:p-[40px] relative w-full border-[1px] border-solid border-white/10 h-[600px] md:h-full"
      style={{ position: "relative", zIndex: "2" }}
    >
      <div className="flex flex-col justify-start gap-[10px] w-full">
        <h4 className="text-[#2a3c54] text-[20px] tracking-[-0.3px] leading-[1.4em]">
          PixelShift: Multi-Device Preview Extension for your browser
        </h4>
        <p className="text-[#6a6f7c] poppins-regular">
          PixelShift allows you to preview your website on over 50 devices,
          ensuring it looks flawless across all screen sizes. It helps you save
          up to $50,000 annually compared to alternatives. Plus, it's
          open-source, so you can customize and contribute to the project.
        </p>
        <div>
          <p className="text-white/80 underline-offset-4 hover:text-white hover:underline transition duration-300 ease-in-out poppins-regular">
            Learn more
          </p>
        </div>
      </div>
      <div className="flex-[0_0_0px] h-[1px] w-full overflow-visible relative">
        <div className="absolute top-[20px] left-[-10%] w-[120%] h-[557px] flex-none">
          <section className="flex justify-start items-start w-full h-full place-items-center m-0 p-0 list-none overflow-hidden">
            <motion.ul
              animate={{ x: [0, -470, -965] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ x: "calc(-100% * 1)", opacity: 1 }}
              className="flex flex-row w-full h-full m-0 p-0 gap-[10px]"
            >
              <li>
                <div className="h-[300px] w-[470px] flex flex-col gap-[10px]">
                  <div
                    className="w-full h-fit p-2 bg-black/10 rounded-xl flex justify-start items-center"
                    style={{
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <div className="p-1.5 bg-[#6b6c6d] w-fit rounded-md">
                      <FaPlay size={10} color="white" />
                    </div>
                    <div className="flex justify-center items-center gap-[5px] ml-2 poppins-regular text-[12px] font-semibold text-[#6b6c6d]">
                      <p>Desktop</p>
                      <span>·</span>
                      <p>1200 x 900 px</p>
                    </div>
                  </div>
                  <div className="w-full h-[500px] bg-white">
                    <img
                      src="./assets/images/WebsitePCVersion.png"
                      alt="Desktop View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="h-[350px] w-[270px] flex flex-col gap-[10px]">
                  <div
                    className="w-full h-fit p-2 bg-black/10 rounded-xl flex justify-start items-center"
                    style={{
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <div className="p-1.5 bg-[#6b6c6d] w-fit rounded-md">
                      <FaPlay size={10} color="white" />
                    </div>
                    <div className="flex justify-center items-center gap-[5px] ml-2 poppins-regular text-[12px] font-semibold text-[#6b6c6d]">
                      <p>Tablet</p>
                      <span>·</span>
                      <p>1200 x 900 px</p>
                    </div>
                  </div>
                  <div className="w-full h-[500px] bg-white">
                    <img
                      src="./assets/images/WebsiteTabVersion.png"
                      alt="Tablet View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="h-[350px] w-[200px] flex flex-col gap-[10px]">
                  <div
                    className="w-full h-fit p-2 bg-black/10 rounded-xl flex justify-start items-center"
                    style={{
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <div className="p-1.5 bg-[#6b6c6d] w-fit rounded-md">
                      <FaPlay size={10} color="white" />
                    </div>
                    <div className="flex justify-center items-center gap-[5px] ml-2 poppins-regular text-[12px] font-semibold text-[#6b6c6d]">
                      <p>Mobile</p>
                      <span>·</span>
                      <p>1200 x 900 px</p>
                    </div>
                  </div>
                  <div className="w-full h-[500px] bg-white">
                    <img
                      src="./assets/images/WebsiteMobileVersion.png"
                      alt="Mobile View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </li>
              {/*  */}
              <li aria-hidden="true">
                <div className="h-[300px] w-[470px] flex flex-col gap-[10px]">
                  <div
                    className="w-full h-fit p-2 bg-black/10 rounded-xl flex justify-start items-center"
                    style={{
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <div className="p-1.5 bg-[#6b6c6d] w-fit rounded-md">
                      <FaPlay size={10} color="white" />
                    </div>
                    <div className="flex justify-center items-center gap-[5px] ml-2 poppins-regular text-[12px] font-semibold text-[#6b6c6d]">
                      <p>Desktop</p>
                      <span>·</span>
                      <p>1200 x 900 px</p>
                    </div>
                  </div>
                  <div className="w-full h-[500px] bg-white">
                    <img
                      src="./assets/images/WebsitePCVersion.png"
                      alt="Desktop View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </li>
              <li aria-hidden="true">
                <div className="h-[350px] w-[270px] flex flex-col gap-[10px]">
                  <div
                    className="w-full h-fit p-2 bg-black/10 rounded-xl flex justify-start items-center"
                    style={{
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <div className="p-1.5 bg-[#6b6c6d] w-fit rounded-md">
                      <FaPlay size={10} color="white" />
                    </div>
                    <div className="flex justify-center items-center gap-[5px] ml-2 poppins-regular text-[12px] font-semibold text-[#6b6c6d]">
                      <p>Tablet</p>
                      <span>·</span>
                      <p>1200 x 900 px</p>
                    </div>
                  </div>
                  <div className="w-full h-[500px] bg-white">
                    <img
                      src="./assets/images/WebsiteTabVersion.png"
                      alt="Tablet View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </li>
              <li aria-hidden="true">
                <div className="h-[350px] w-[200px] flex flex-col gap-[10px]">
                  <div
                    className="w-full h-fit p-2 bg-black/10 rounded-xl flex justify-start items-center"
                    style={{
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <div className="p-1.5 bg-[#6b6c6d] w-fit rounded-md">
                      <FaPlay size={10} color="white" />
                    </div>
                    <div className="flex justify-center items-center gap-[5px] ml-2 poppins-regular text-[12px] font-semibold text-[#6b6c6d]">
                      <p>Mobile</p>
                      <span>·</span>
                      <p>1200 x 900 px</p>
                    </div>
                  </div>
                  <div className="w-full h-[500px] bg-white">
                    <img
                      src="./assets/images/WebsiteMobileVersion.png"
                      alt="Mobile View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </li>
            </motion.ul>
          </section>
        </div>
      </div>
      {/* background image */}
      <div
        style={{
          filter:
            "blur(6px) drop-shadow(0px 1px 17px rgba(191, 229, 246, .35))",
          WebkitFilter:
            "blur(6px) drop-shadow(0px 1px 17px rgba(191, 229, 246, .35))",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 6%, rgba(0, 0, 0, 1) 36%)",
          maskImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 6%, rgba(0, 0, 0, 1) 36%)",
          bottom: "-149px",
          flex: "none",
          height: "105%",
          left: "-38px",
          opacity: ".2",
          overflow: "visible",
          pointerEvents: "none",
          position: "absolute",
          right: "-106px",
          zIndex: "-1",
        }}
      >
        <div className="absolute inset-0">
          <img
            decoding="async"
            loading="lazy"
            sizes="calc(max((min(100vw - 40px, 1200px) - 10px) / 2, 1px) + 145px)"
            src="./assets/images/WebsitePCVersion.png"
            alt="i-D website made in Framer"
            className="w-full h-full rounded-none object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default PixelShiftFeature2Card;
