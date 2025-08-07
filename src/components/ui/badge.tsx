import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "./ck-slot";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "notification";

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: BadgeVariant;
  asChild?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-colors";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[var(--foreground)] text-[var(--background)] border-transparent",
  secondary: "bg-background border-[var(--border)] text-[var(--foreground)]",
  destructive: "bg-destructive text-white border-transparent",
  outline:
    "bg-transparent text-[var(--foreground)] border-[var(--border)] hover:bg-[var(--foreground)/0.05]",
  notification:
    "bg-[var(--info)] text-white border-transparent rounded-full w-5 aspect-square text-[10px] flex items-center justify-center p-0 leading-none text-center overflow-hidden",
};

function Badge({
  variant = "default",
  asChild = false,
  className,
  ...props
}: BadgeProps) {
  const Component = asChild ? Slot : "span";

  const classes =
    variant === "notification"
      ? cn(variantClasses[variant], className)
      : cn(baseClasses, variantClasses[variant], className);

  return <Component className={classes} {...props} />;
}

export { Badge };
