import type { TagProps } from "react-renderable";
import type { ElementType, MouseEventHandler } from "react";

export type ButtonMicroOwnProps = {
  active?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onClickBlur?: MouseEventHandler<HTMLElement>;
};

export type ButtonMicroProps<T extends ElementType = "button"> = TagProps<T, ButtonMicroOwnProps>;
