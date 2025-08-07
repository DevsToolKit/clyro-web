"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
  HTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

// --- Context Setup ---
type TooltipContextType = {
  show: boolean;
  delayDuration: number;
  sideOffset: number;
  setShow: (val: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
};

const TooltipContext = createContext<TooltipContextType | null>(null);

function TooltipProvider({
  delayDuration = 0,
  children,
}: {
  delayDuration?: number;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const context: TooltipContextType = {
    show,
    delayDuration,
    sideOffset: 0,
    setShow,
    triggerRef,
  };

  return (
    <TooltipContext.Provider value={context}>
      {children}
    </TooltipContext.Provider>
  );
}

function Tooltip({ children }: { children: ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}

function TooltipTrigger({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const context = useContext(TooltipContext);
  if (!context)
    throw new Error("TooltipTrigger must be inside TooltipProvider");

  const { setShow, delayDuration, triggerRef } = context;
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const touchTimeout = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setShow(true), delayDuration);
  };

  const hideTooltip = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    if (touchTimeout.current) clearTimeout(touchTimeout.current);
    setShow(false);
  };

  const handleTouchStart = () => {
    if (touchTimeout.current) clearTimeout(touchTimeout.current);
    touchTimeout.current = setTimeout(() => setShow(true), 100);
  };

  const handleTouchEnd = () => {
    // Auto-hide after a few seconds on mobile (optional)
    touchTimeout.current = setTimeout(() => setShow(false), 3000);
  };

  // Optional: tap outside to dismiss tooltip on mobile
  useEffect(() => {
    const handleOutsideTouch = (e: TouchEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        hideTooltip();
      }
    };

    document.addEventListener("touchstart", handleOutsideTouch);
    return () => {
      document.removeEventListener("touchstart", handleOutsideTouch);
    };
  }, [triggerRef]);

  return (
    <span
      {...props}
      ref={triggerRef as any}
      data-slot="tooltip-trigger"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </span>
  );
}

type TooltipContentProps = {
  className?: string;
  children: ReactNode;
  sideOffset?: number;
  topOffset?: number;
} & HTMLAttributes<HTMLDivElement>;

function TooltipContent({
  className,
  children,
  sideOffset = 0,
  topOffset = 15,
  ...props
}: TooltipContentProps) {
  const context = useContext(TooltipContext);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  if (!context)
    throw new Error("TooltipContent must be inside TooltipProvider");

  const { show, triggerRef } = context;

  useEffect(() => {
    if (show && triggerRef.current && contentRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();

      const top = triggerRect.top - contentRect.height - topOffset - 2;
      const left =
        triggerRect.left + (triggerRect.width - contentRect.width) / 2 - 5.5;

      setPosition({ top, left });
    }
  }, [show, sideOffset, topOffset, triggerRef]);

  if (!show) return null;

  return (
    <div
      ref={contentRef}
      data-slot="tooltip-content"
      role="tooltip"
      className={cn(
        "bg-white z-50 w-max max-w-[180px] rounded-[var(--radius)] p-[8px] text-sm border border-gray-200",
        "absolute animate-in fade-in-0 zoom-in-95",
        className
      )}
      style={{
        top: position.top,
        left: position.left,
        position: "fixed",
      }}
      {...props}
    >
      {children}
      {/* Arrow */}
      <div
        className="absolute bg-white border-b-[1px] border-r-[1px] border-gray-200 z-49 w-[10px] h-[10px] rotate-45"
        style={{
          left: "50%",
          bottom: "-9.5px",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

// --- Exports ---
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
