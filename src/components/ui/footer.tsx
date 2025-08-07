import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center p-4">
      <p className="text-[14px] leading-[16px] secondaryFont w-[280px] text-[#141414] text-center">
        <a
          href="https://github.com/PiyushPb/appoints"
          className="underline text-blue-500"
          target="_blank"
          rel="noreferrer noopener"
        >
          Appoints
        </a>{" "}
        is an open-source scheduling tool built by{" "}
        <a
          href="https://github.com/PiyushPb"
          className="underline text-blue-500"
          target="_blank"
          rel="noreferrer noopener"
        >
          @piyush
        </a>
        . Inspired by{" "}
        <a
          href="https://cal.com"
          className="underline text-blue-500"
          target="_blank"
          rel="noreferrer noopener"
        >
          cal.com
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
