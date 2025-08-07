"use client";

import React, { useEffect, useState } from "react";
import { Alert } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";

const alerts = [
  {
    title: "Success",
    description: "Everything went fine!",
    variant: "success",
  },
  {
    title: "Error",
    description: "Something went wrong.",
    variant: "destructive",
  },
  { title: "Info", description: "This is just some info.", variant: "info" },
  { title: "Warning", description: "Please be careful.", variant: "warning" },
];

function ComponentsDemo({ active = true }: { active?: boolean }) {
  const [visibleAlerts, setVisibleAlerts] = useState<number[]>([]);

  useEffect(() => {
    if (!active) return;

    let timers: NodeJS.Timeout[] = [];

    alerts.forEach((_, i) => {
      const timer = setTimeout(() => {
        setVisibleAlerts((prev) => [...prev, i]);
      }, i * 1000);
      timers.push(timer);
    });

    const clearTimer = setTimeout(() => {
      setVisibleAlerts([]);
    }, 5000);
    timers.push(clearTimer);

    return () => {
      timers.forEach(clearTimeout);
      setVisibleAlerts([]);
    };
  }, [active]);

  const alertVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="relative w-full h-[400px] p-5 border border-[#e1e2e3] rounded-[12px] overflow-hidden">
      <div className="absolute bottom-5 left-5 flex flex-col gap-3 w-full">
        <AnimatePresence>
          {visibleAlerts.map((index) => {
            const alert = alerts[index];
            return (
              <motion.div
                key={index}
                layout
                variants={alertVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <Alert
                  title={alert.title}
                  description={alert.description}
                  variant={alert.variant as any}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ComponentsDemo;
