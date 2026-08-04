import type { BorderGlowPosition } from "./type.js";

export const borderGlowBaseClassName = "relative isolate margo-border-glow";

export const borderGlowPositionClassName: Record<BorderGlowPosition, string> = {
  up: "margo-border-glow--edge-top",
  down: "margo-border-glow--edge-bottom",
  left: "margo-border-glow--edge-left",
  right: "margo-border-glow--edge-right",
  all: "margo-border-glow--ring",
};
