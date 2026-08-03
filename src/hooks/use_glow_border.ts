import { cn } from "../helpers/cn";

import type { PointerEvent } from "react";

import "./use_glow_border.css";

export type GlowBorderPosition = "up" | "down" | "left" | "right" | "all";

const GLOW_BORDER_POSITION_CLASS: Record<GlowBorderPosition, string> = {
  up: "glow-border--edge-top",
  down: "glow-border--edge-bottom",
  left: "glow-border--edge-left",
  right: "glow-border--edge-right",
  all: "glow-border--ring",
};

export type UseGlowBorderOptions = {
  position: GlowBorderPosition;
};

export const useGlowBorder = ({ position }: UseGlowBorderOptions) => {
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glowX = position === "right" ? rect.width - x : x;
    const glowY = position === "down" ? rect.height - y : y;

    e.currentTarget.style.setProperty("--glow-x", `${glowX}px`);
    e.currentTarget.style.setProperty("--glow-y", `${glowY}px`);
  };

  const className = cn("relative isolate glow-border", GLOW_BORDER_POSITION_CLASS[position]);

  return { className, onPointerMove };
};
