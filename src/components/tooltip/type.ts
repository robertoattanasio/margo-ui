import type { TagProps } from "react-renderable";
import type { ElementType, ReactNode } from "react";

export type TooltipPosition = "up" | "down" | "left" | "right";

export type TooltipOwnProps = {
  label?: string;
  id?: string;
  content?: ReactNode;
  position?: TooltipPosition;
  children?: ReactNode;
};

export type TooltipProps<T extends ElementType = "div"> = TagProps<T, TooltipOwnProps>;
