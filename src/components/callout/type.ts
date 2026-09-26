import type { TagProps } from "react-renderable";
import type { ElementType, ReactNode } from "react";

export type CalloutProps<T extends ElementType = "aside"> = TagProps<T>;

export type CalloutTitleProps = {
  children: ReactNode;
  className?: string;
};
