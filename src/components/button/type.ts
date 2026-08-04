import type { TagProps } from "react-renderable";
import type { ElementType, MouseEventHandler, ReactNode } from "react";

export type ButtonIconLabelSide = "start" | "end";

export type ButtonOwnProps = {
  clickable?: boolean;
  active?: boolean;
  open?: boolean;
  blurOnClick?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

export type ButtonProps<T extends ElementType = "button"> = TagProps<T, ButtonOwnProps>;

export type ButtonIconProps = {
  icon: ReactNode;
  className?: string | null;
};

export type ButtonLabelProps = {
  label: string;
  className?: string | null;
};

export type ButtonIconLabelProps = {
  icon: ReactNode;
  label: ReactNode;
  gap?: string;
  reverse?: boolean;
  side?: ButtonIconLabelSide;
  className?: string | null;
};
