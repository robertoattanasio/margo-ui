import type { CSSProperties, ReactElement } from "react";

export type MaskGradientXChildProps = {
  className?: string;
  style?: CSSProperties;
};

export type MaskGradientXProps = {
  children: ReactElement<MaskGradientXChildProps>;
  fade?: string;
  fadeLeft?: string;
  fadeRight?: string;
  offsetLeft?: string;
  offsetRight?: string;
};
