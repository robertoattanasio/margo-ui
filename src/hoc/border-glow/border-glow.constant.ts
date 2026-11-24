import type { BorderGlowPlacement } from "./type.js";

export const borderGlowPlacementClassName: Record<BorderGlowPlacement, string> = {
  top: "margo-border-glow--edge-top",
  bottom: "margo-border-glow--edge-bottom",
  left: "margo-border-glow--edge-left",
  right: "margo-border-glow--edge-right",
  all: "margo-border-glow--ring",
};
