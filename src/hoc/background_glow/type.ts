import type { PointerEventHandler, ReactElement } from "react";

export type BackgroundGlowSize = "sm" | "md" | "lg";

export type BackgroundGlowChildProps = {
  className?: string;
  onPointerMove?: PointerEventHandler<HTMLElement>;
};

export type BackgroundGlowProps = {
  children: ReactElement<BackgroundGlowChildProps>;
  size?: BackgroundGlowSize;
};
