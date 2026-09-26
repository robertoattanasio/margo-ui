import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type ButtonMicroOwnProps = {
  active?: boolean;
};

export type ButtonMicroProps<T extends ElementType = "button"> = TagProps<T, ButtonMicroOwnProps>;
