import type { ElementType } from "react";
import type { TagProps } from "react-renderable";

export type SplashOwnProps = {
  initial?: boolean;
};

export type SplashProps<T extends ElementType = "div"> = TagProps<T, SplashOwnProps>;

export type SplashServeProps = {
  instant?: boolean;
};
