import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type ChipOwnProps = {
  active?: boolean;
};

export type ChipProps<T extends ElementType = "div"> = TagProps<T, ChipOwnProps>;
