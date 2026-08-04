import type { ElementType } from "react";
import type { TagProps } from "react-renderable";

export type ChipProps<T extends ElementType = "div"> = TagProps<T> & {
  active?: boolean;
};
