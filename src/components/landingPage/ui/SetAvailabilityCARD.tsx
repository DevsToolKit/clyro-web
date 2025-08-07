"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { GoPlus, GoCopy } from "react-icons/go";

const DummyData = [
  { day: "Mon", startTime: "14:15", endTime: "16:45" },
  { day: "Tue", startTime: "09:00", endTime: "11:00" },
  { day: "Wed", startTime: "11:30", endTime: "13:00" },
  { day: "Thu", startTime: "08:45", endTime: "10:45" },
  { day: "Fri", startTime: "16:00", endTime: "18:30" },
  { day: "Sat", startTime: "10:00", endTime: "12:30" },
  { day: "Sun", startTime: "13:45", endTime: "16:00" },
];

function SetAvailabilityCARD() {
  const [activeDays, setActiveDays] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...DummyData].sort(() => 0.5 - Math.random());
      const count = Math.floor(Math.random() * 3) + 2;
      const selected = shuffled.slice(0, count).map((d) => d.day);
      setActiveDays(selected);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-[400px] h-[500px] border-[1px] border-[#e1e2e3] rounded-[12px] top-[0px] left-[50px]"></div>
      <div className="absolute w-[400px] h-[500px] border-[1px] border-[#e1e2e3] rounded-[12px] top-[15px] left-[25px] bg-white"></div>
      <div className="absolute w-[400px] h-[500px] border-[1px] border-[#e1e2e3] rounded-[12px] top-[30px] bg-white z-1 p-5 flex flex-col gap-2">
        {DummyData.map((data, index) => (
          <SwitchContainer
            key={index}
            day={data.day}
            startTime={data.startTime}
            endTime={data.endTime}
            isActive={activeDays.includes(data.day)}
          />
        ))}
      </div>
    </div>
  );
}

const SwitchContainer = ({
  day,
  startTime,
  endTime,
  isActive,
}: {
  day: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={`grid grid-cols-[auto_40px_auto_1fr] items-center gap-2 transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-60"
      }`}
    >
      <Switch checked={isActive} />
      <span className="text-[12px] text-[#121212] secondaryFont w-[40px] text-center">
        {day}
      </span>

      <div className="flex gap-1 items-center min-w-[140px] justify-between">
        <div className="h-fit w-[60px] px-2 py-1 border-[1px] text-[12px] text-[#121212] secondaryFont rounded-md text-center">
          {startTime}
        </div>
        <div className="text-[12px] text-[#121212]">-</div>
        <div className="h-fit w-[60px] px-2 py-1 border-[1px] text-[12px] text-[#121212] secondaryFont rounded-md text-center">
          {endTime}
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <GoPlus />
        <GoCopy />
      </div>
    </div>
  );
};

export default SetAvailabilityCARD;
