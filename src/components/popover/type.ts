import type { TagProps } from "react-renderable";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type PopoverPosition = "up" | "down" | "left" | "right";

export type PopoverAlign = "start" | "center" | "end";

export type PopoverProps = ComponentPropsWithoutRef<"div"> & {
  open?: boolean;
  onClose?: () => void;
  dismissible?: boolean;
  position?: PopoverPosition;
  align?: PopoverAlign;
  children?: ReactNode;
};

export type PopoverAnchorProps<T extends ElementType = "div"> = TagProps<T>;

export type PopoverBodyProps<T extends ElementType = "div"> = TagProps<T>;
