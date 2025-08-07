import Sidebar from "@/components/docs/Sidebar";
import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex flex-row max-w-[1440px] mx-auto mt-[80px]">
      {/* Sidebar stays fixed during scroll */}
      <div className="sticky top-[80px] h-screen w-[200px] lg:w-[300px] hidden md:block">
        <Sidebar />
      </div>

      {/* Content scrolls naturally with the page */}
      <div className="flex-1 p-5">{children}</div>
    </main>
  );
}
