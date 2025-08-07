import * as React from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement;
}

const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, className, ...props }, ref) => {
    return React.cloneElement(children, {
      ...props,
      ref: (node: HTMLElement | null) => {
        // Forward ref to parent
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }

        // Preserve child's original ref
        const childRef = (children as any).ref;
        if (typeof childRef === "function") {
          childRef(node);
        } else if (childRef && typeof childRef === "object") {
          childRef.current = node;
        }
      },
      className: [children.props.className, className]
        .filter(Boolean)
        .join(" "),
    });
  }
);

Slot.displayName = "Slot";
export { Slot };
