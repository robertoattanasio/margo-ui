import type { TagProps } from "react-renderable";
import type { ElementType, MouseEventHandler, ReactNode } from "react";

export type ItemOwnProps = {
  clickable?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

export type ItemProps<T extends ElementType = "button"> = TagProps<T, ItemOwnProps>;

export type ItemIconProps = {
  children?: ReactNode;
  className?: string;
};

export type ItemLabelProps = {
  children: ReactNode;
  className?: string;
};
