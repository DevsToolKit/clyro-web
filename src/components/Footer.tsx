import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center my-10 px-5">
      <h1 className="text-center mb-2">
        Made with ❤️ by developers and designers for developers and designers.
      </h1>
      <div className="w-full flex justify-center items-center">
        <ul className="flex gap-4">
          <li>
            <Link href={"https://github.com/devsToolKit"}>Devtoolskit</Link>
          </li>
          <li>
            <Link href={"https://github.com/devsToolKit/clyro"}>Github</Link>
          </li>
          <li>
            {/* TODO: add figma file link here */}
            <Link href={"/"}>Figma</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
