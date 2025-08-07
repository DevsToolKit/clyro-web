"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { ImGithub } from "react-icons/im";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "./ui/button";
import { sideBar } from "@/constants/docsSidebar";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-black focus:outline-none"
      >
        <HiMenu size={26} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white z-50 transform transition-transform duration-300 overflow-y-auto overflow-x-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Cluro/ui</h2>
          <button onClick={() => setIsOpen(false)} className="text-black">
            <HiX size={26} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="p-5">
          <span className="text-[14px] font-normal mb-3 text-gray-600">
            Menu
          </span>
          <ul className="flex flex-col gap-3 mt-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-black text-base hover:underline text-[20px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {sideBar.map((data, index) => (
            <div key={index} className="mb-[30px] mt-5">
              <span className="text-[14px] font-normal text-gray-600">
                {data.title}
              </span>
              <ul className="flex flex-col gap-3 mt-3">
                {data.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-black text-base hover:underline text-[20px]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
