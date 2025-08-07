"use client";

import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as lightTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodingUI.css";

const fullCode = `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "./ck-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs",
        info: "bg-info text-white shadow-xs hover:bg-info/90",
        success: "bg-success text-white shadow-xs hover:bg-success/80",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-white shadow-xs hover:bg-warning/90",
        outline: "border border-input bg-transparent shadow-xs",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
`;

function CodingUI() {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let index = 0;
    const typingSpeed = 2; // milliseconds per character

    const typingInterval = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, index));
      index++;

      if (index > fullCode.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="w-full h-[400px] border border-border rounded-[var(--radius)] p-3 bg-white overflow-hidden">
      {/* Top control dots */}
      <div className="flex flex-row gap-2 mb-2">
        <div className="w-[13px] h-[13px] bg-red-500 rounded-full"></div>
        <div className="w-[13px] h-[13px] bg-yellow-500 rounded-full"></div>
        <div className="w-[13px] h-[13px] bg-green-500 rounded-full"></div>
      </div>

      {/* Code block */}
      <div className="h-full overflow-auto">
        <SyntaxHighlighter
          language="tsx"
          style={lightTheme}
          customStyle={{
            backgroundColor: "#ffffff",
            height: "100%",
            margin: 0,
            padding: "1em",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
          showLineNumbers
        >
          {displayedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodingUI;
