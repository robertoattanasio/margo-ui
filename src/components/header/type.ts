import type { TagProps } from "react-renderable";
import type { ElementType, ReactNode } from "react";

export type HeaderProps<T extends ElementType = "header"> = TagProps<T>;

export type HeaderLeadingProps = {
  children?: ReactNode;
  className?: string;
};

export type HeaderTitleProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export type HeaderTrailingProps = {
  children?: ReactNode;
  className?: string;
};
