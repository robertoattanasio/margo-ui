import type { CSSProperties, ReactElement } from "react";

export type MaskGradientYChildProps = {
  className?: string;
  style?: CSSProperties;
};

export type MaskGradientYProps = {
  children: ReactElement<MaskGradientYChildProps>;
  fade?: string;
  fadeTop?: string;
  fadeBottom?: string;
  offsetTop?: string;
  offsetBottom?: string;
};
