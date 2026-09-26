import type { TagProps } from "react-renderable";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type InputOwnProps = {
  active?: boolean;
  clickable?: boolean;
};

export type InputProps<T extends ElementType = "div"> = TagProps<T, InputOwnProps>;

export type InputIconProps = {
  children?: ReactNode;
  className?: string;
};

export type InputTextProps = ComponentPropsWithoutRef<"input">;
