"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Github", href: "https://github.com/PiyushPb/appoints" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`w-full max-w-[1150px] mx-auto px-[12px] py-[12px] z-[100] fixed top-0 md:top-[10px] left-[50%] translate-x-[-50%] md:rounded-[12px] transition-all duration-300 ${
          isAtTop
            ? "bg-transparent border-[1px] border-transparent"
            : "bg-white border-[1px] border-transparent md:border-[1px] md:border-[#14141433] md:shadow-md"
        } flex justify-between items-center`}
      >
        {/* Logo */}
        <div className="text-[20px] font-semibold text-black">Appoints</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-[16px] font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors secondaryFont"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Button (desktop only) */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-[90] flex flex-col items-center justify-center gap-8 text-[20px] font-medium text-gray-900 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-black transition-colors"
          >
            {link.label}
          </a>
        ))}
        <Button onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
      </div>
    </>
  );
}

export default Navbar;
