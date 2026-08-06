import type { TagProps } from "react-renderable";
import type { ElementType, MouseEventHandler, ReactNode } from "react";

export type ItemOwnProps = {
  active?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onClickBlur?: MouseEventHandler<HTMLElement>;
};

export type ItemProps<T extends ElementType = "div"> = TagProps<T, ItemOwnProps>;

export type ItemIconProps = {
  icon?: ReactNode;
  className?: string;
};

export type ItemLabelProps = {
  label: ReactNode;
  className?: string;
};
