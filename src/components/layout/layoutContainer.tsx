import React from "react";
import { HiPlus } from "react-icons/hi";

function LayoutContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className="w-full h-full relative">
      <div
        className={`max-w-[1200px] md:mx-auto border-s-[1px] border-e-[1px] border-[#e1e2e3] h-full p-[12px] mx-[12px] py-0 ${className}`}
      >
        {children}
      </div>
      <div className="items-center justify-center content-center flex-none flex-row flex-nowrap gap-[10px] h-8 w-full overflow-hidden p-0 relative flex">
        <div className="w-full h-[1px] bg-[#e1e2e3] flex-none min-w-full overflow-hidden absolute left-0 right-0 z-[1] top-[calc(50%-0.5px)]"></div>
        <div className="flex items-center justify-center content-center flex-[1_0_0px] flex-row flex-nowrap gap-[2px] h-7 w-px max-w-[1224px] overflow-visible p-0 relative">
          <div className="flex items-center justify-center flex-none flex-row flex-nowrap gap-[10px] h-min w-min overflow-hidden p-0 relative z-[1]">
            <div className="w-[24px] h-[24px] flex justify-center items-center bg-[#f4f4f4] text-[#b6b6b6]">
              <HiPlus />
            </div>
          </div>
          <div className="bg-[#14141426] grow shrink-0 basis-0"></div>
          <div className="flex items-center justify-center flex-none flex-row flex-nowrap gap-[10px] h-min w-min overflow-hidden p-0 relative z-[1]">
            <div className="w-[24px] h-[24px] flex justify-center items-center bg-[#f4f4f4] text-[#b6b6b6]">
              <HiPlus />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LayoutContainer;
