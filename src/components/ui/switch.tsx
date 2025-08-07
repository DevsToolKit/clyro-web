"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  trackColor?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      trackColor = "bg-primary",
      ...props
    },
    ref
  ) => {
    const isControlled = controlledChecked !== undefined;
    const [uncontrolledChecked, setChecked] = React.useState(defaultChecked);
    const isChecked = isControlled ? controlledChecked : uncontrolledChecked;

    const toggle = () => {
      if (disabled) return;
      if (!isControlled) setChecked(!isChecked);
      onCheckedChange?.(!isChecked);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        ref={ref}
        onClick={toggle}
        className={cn(
          "peer inline-flex h-[20px] w-[32px] shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          isChecked ? trackColor : "bg-input dark:bg-input/80",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-[14px] w-[14px] rounded-full ring-0 transition-transform",
            isChecked
              ? "translate-x-[calc(100%)] dark:bg-primary-foreground bg-background"
              : "translate-x-[2px] !bg-white dark:bg-foreground"
          )}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
