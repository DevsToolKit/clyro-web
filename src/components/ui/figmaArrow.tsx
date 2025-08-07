import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the class variants for your FigmaArrow
const figmaArrowVariants = cva("relative z-[99999]", {
  variants: {
    variant: {
      blue: "text-white",
      orange: "text-white",
    },
    size: {
      default: "w-[30px] h-[30px]",
      small: "w-[25px] h-[25px]",
    },
  },
  defaultVariants: {
    variant: "blue",
    size: "default",
  },
});

interface FigmaArrowProps extends VariantProps<typeof figmaArrowVariants> {
  name: string;
}

const FigmaArrow: React.FC<FigmaArrowProps> = ({ name, variant, size }) => {
  const arrowImage =
    variant === "blue"
      ? "./assets/FigmaCursorBlue.svg"
      : "./assets/FigmaCursorOrange.svg";

  return (
    <motion.div
      className={cn(figmaArrowVariants({ variant, size }))}
      animate={{ y: [0, -8, 0] }} // Float up then back down
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <img src={arrowImage} alt="Cursor" className="w-full" />
      </div>
      <div
        className={`absolute left-[20px] bottom-[-15px] py-1 px-2 rounded-md text-[10px] shadow-xl ${
          variant === "blue" ? "bg-[#0065D6]" : "bg-[#FF7F00]"
        }`}
      >
        <span>{name}</span>
      </div>
    </motion.div>
  );
};

export default FigmaArrow;
