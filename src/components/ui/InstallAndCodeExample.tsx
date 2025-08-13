import TabbedCodeBlock from "@/components/ui/TabbedCodeBlock";

export default function InstallAndCodeExample() {
  return (
    <div>
      {/* Install commands */}
      <TabbedCodeBlock
        tabs={[
          {
            label: "pnpm",
            code: "pnpm add @radix-ui/react-accordion",
            language: "bash",
          },
          {
            label: "npm",
            code: "npm install @radix-ui/react-accordion",
            language: "bash",
          },
          {
            label: "yarn",
            code: "yarn add @radix-ui/react-accordion",
            language: "bash",
          },
          {
            label: "bun",
            code: "bun add @radix-ui/react-accordion",
            language: "bash",
          },
        ]}
      />

      {/* Component code */}
      <TabbedCodeBlock
        tabs={[
          {
            label: "accordion.tsx",
            code: `
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = AccordionPrimitive.Item;

const AccordionTrigger = React.forwardRef(({ children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger ref={ref} {...props}>
      {children}
      <ChevronDownIcon className="h-4 w-4" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const AccordionContent = AccordionPrimitive.Content;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
            `,
            language: "tsx",
          },
        ]}
      />
    </div>
  );
}
