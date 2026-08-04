import type { ElementType, ReactNode } from "react";
import type { TagProps } from "react-renderable";

export type ButtonIconLabelSide = "start" | "end";

export type ButtonProps<T extends ElementType = "button"> = TagProps<T> & {
  clickable?: boolean;
  active?: boolean;
  open?: boolean;
  blurOnClick?: boolean;
};

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
