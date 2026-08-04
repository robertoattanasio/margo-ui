import type { ElementType, ReactNode } from "react";
import type { TagProps } from "react-renderable";

export type TooltipPosition = "up" | "down" | "left" | "right";

export type TooltipProps<T extends ElementType = "div"> = Omit<TagProps<T>, "aria-label" | "children" | "id"> & {
  ariaLabel?: string;
  id?: string;
  placeholder?: ReactNode;
  position?: TooltipPosition;
  children?: ReactNode;
};
