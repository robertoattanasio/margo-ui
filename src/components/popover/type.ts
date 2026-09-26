import type { TagProps } from "react-renderable";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type PopoverPlacement = "top" | "right" | "bottom" | "left";

export type PopoverAlign = "start" | "center" | "end";

export type PopoverProps = ComponentPropsWithoutRef<"div"> & {
  open?: boolean;
  onClose?: () => void;
  dismissible?: boolean;
  placement?: PopoverPlacement;
  align?: PopoverAlign;
  children?: ReactNode;
};

export type PopoverAnchorProps<T extends ElementType = "div"> = TagProps<T>;

export type PopoverBodyProps<T extends ElementType = "div"> = TagProps<T>;
