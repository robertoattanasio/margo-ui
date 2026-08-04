import type { TagProps } from "react-renderable";
import type { ElementType, ReactNode } from "react";

export type TooltipPosition = "up" | "down" | "left" | "right";

export type TooltipOwnProps = {
  ariaLabel?: string;
  id?: string;
  placeholder?: ReactNode;
  position?: TooltipPosition;
  children?: ReactNode;
};

export type TooltipProps<T extends ElementType = "div"> = Omit<
  TagProps<T, TooltipOwnProps>,
  "aria-label"
>;
