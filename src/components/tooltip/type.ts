import type { TagProps } from "react-renderable";
import type { ElementType, ReactNode } from "react";

export type TooltipPlacement = "top" | "right" | "bottom" | "left";

export type TooltipOwnProps = {
  label?: string;
  id?: string;
  content?: ReactNode;
  placement?: TooltipPlacement;
  children?: ReactNode;
};

export type TooltipProps<T extends ElementType = "div"> = TagProps<T, TooltipOwnProps>;
