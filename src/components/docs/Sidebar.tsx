"use client";
import { sideBar } from "@/constants/docsSidebar";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Sidebar() {
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    setSidebarData(sideBar);
  }, []);

  return (
    <div className="flex flex-[0_0_300px] w-full max-w-[300px] h-screen p-5 ">
      <div className="overflow-y-scroll h-full pr-2 custom-scrollbar w-full">
        {sidebarData.map((data, index) => (
          <div key={index} className="mb-[30px]">
            <h4 className="text-[14px] text-black ml-[14px] mb-2">
              {data.title}
            </h4>
            <ul>
              {data.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>
                    <Button
                      size={"sm"}
                      variant={"ghost"}
                      className="text-[14px] outfit font-normal text-gray-600 cursor-pointer"
                    >
                      {link.title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
