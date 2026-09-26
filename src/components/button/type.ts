import type { TagProps } from "react-renderable";
import type { ElementType, MouseEventHandler, ReactNode } from "react";

export type ButtonIconLabelDirection = "left" | "right";

export type ButtonOwnProps = {
  clickable?: boolean;
  disabled?: boolean;
  active?: boolean;
  open?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

export type ButtonProps<T extends ElementType = "button"> = TagProps<T, ButtonOwnProps>;

export type ButtonIconProps = {
  children: ReactNode;
  className?: string;
};

export type ButtonLabelProps = {
  children: ReactNode;
  className?: string;
};

export type ButtonIconLabelProps = {
  icon: ReactNode;
  label: ReactNode;
  gap?: string;
  reverse?: boolean;
  direction?: ButtonIconLabelDirection;
  className?: string;
};
