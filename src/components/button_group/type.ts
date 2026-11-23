import type { ElementType, MouseEventHandler, ReactNode } from "react";
import type { TagProps } from "react-renderable";

export type ButtonGroupProps<T extends ElementType = "div"> = TagProps<T>;

export type ButtonGroupItemOwnProps = {
  clickable?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  children: ReactNode;
};

export type ButtonGroupItemProps<T extends ElementType = "button"> = TagProps<T, ButtonGroupItemOwnProps>;
