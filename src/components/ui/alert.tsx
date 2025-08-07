"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleAlert, Info, XCircle, X } from "lucide-react";

type AlertProps = {
  className?: string;
  title: string;
  description: string;
  variant?: "success" | "warning" | "info" | "destructive";
  onClose?: () => void;
};

const variantStyles = {
  success: {
    icon: CircleCheck,
    color: "text-green-600",
    title: "text-green-600",
  },
  warning: {
    icon: CircleAlert,
    color: "text-yellow-500",
    title: "text-yellow-500",
  },
  info: {
    icon: Info,
    color: "text-blue-500",
    title: "text-blue-500",
  },
  destructive: {
    icon: XCircle,
    color: "text-red-500",
    title: "text-red-500",
  },
};

export function Alert({
  className,
  title,
  description,
  variant = "info",
  onClose,
}: AlertProps) {
  const { icon: Icon, color, title: titleColor } = variantStyles[variant];

  return (
    <div
      className={cn(
        "flex items-start justify-between w-full max-w-[600px] bg-white border border-gray-200 rounded-lg py-[16px] px-[24px]",
        className
      )}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("w-5 h-5 mt-1 flex-[0_0_1.5rem]", color)} />
        <div className="space-y-0.5">
          <p
            className={cn(
              "font-semibold text-[14px] leading-[18xp]",
              titleColor
            )}
          >
            {title}
          </p>
          <p className="text-sm text-gray-600 text-[14px] leading-[18xp]">
            {description}
          </p>
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
