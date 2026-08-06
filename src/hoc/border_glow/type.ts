import type { PointerEventHandler, ReactElement } from "react";

export type BorderGlowPosition = "up" | "down" | "left" | "right" | "all";

export type BorderGlowChildProps = {
  className?: string;
  onPointerMove?: PointerEventHandler<HTMLElement>;
};

export type BorderGlowProps = {
  children: ReactElement<BorderGlowChildProps>;
  position?: BorderGlowPosition;
  tolerance?: number;
};
