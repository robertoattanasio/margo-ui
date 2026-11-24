import type { PointerEventHandler, ReactElement } from "react";

export type BorderGlowPlacement = "top" | "right" | "bottom" | "left" | "all";

export type BorderGlowChildProps = {
  className?: string;
  onPointerMove?: PointerEventHandler<HTMLElement>;
};

export type BorderGlowProps = {
  children: ReactElement<BorderGlowChildProps>;
  placement?: BorderGlowPlacement;
  tolerance?: number;
};
