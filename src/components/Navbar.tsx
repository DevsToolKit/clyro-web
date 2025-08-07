/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./ui/button";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 h-fit p-5 bg-[#f4f4f4] w-full z-[999999]">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-[30px]">
            <img src="/assets/icon.png" alt="Logo" />
          </div>
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <Button
                    variant={"ghost"}
                    className="px-3 cursor-pointer py-1.5 h-fit"
                  >
                    <span className="text-black">{link.label}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop GitHub Icon */}
        <div className="hidden md:block">
          <Link href={"https://github.com/devsToolKit/clyro"} target="_blank">
            <Button
              variant={"ghost"}
              className="px-3 cursor-pointer py-1.5 h-fit"
            >
              <span className="text-black">
                <ImGithub size={20} />
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileNav />
      </nav>
    </header>
  );
}

export default Navbar;
