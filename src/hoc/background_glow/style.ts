import type { BackgroundGlowSize } from "./type.js";

export const backgroundGlowBaseClassName = "relative isolate margo-background-glow";

export const backgroundGlowSizeClassName: Record<BackgroundGlowSize, string> = {
  sm: "margo-background-glow--size-sm",
  md: "margo-background-glow--size-md",
  lg: "margo-background-glow--size-lg",
};
