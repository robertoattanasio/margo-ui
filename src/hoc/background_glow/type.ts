import type { CSSProperties, PointerEventHandler, ReactElement } from "react";

export type BackgroundGlowChildProps = {
  className?: string;
  style?: CSSProperties;
  onPointerMove?: PointerEventHandler<HTMLElement>;
};

export type BackgroundGlowProps = {
  children: ReactElement<BackgroundGlowChildProps>;
  tolerance?: number;
  opacity?: number;
  noise?: number;
};
