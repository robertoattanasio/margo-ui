import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type NavigationBarOwnProps = {
  loading?: boolean;
  fill?: string;
};

export type NavigationBarProps<T extends ElementType = "div"> = TagProps<T, NavigationBarOwnProps>;
