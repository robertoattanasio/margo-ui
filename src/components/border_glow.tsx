import { cloneElement } from "react";

import { cn } from "../utils/cn";

import type { PointerEvent, PointerEventHandler, ReactElement } from "react";

import "./border_glow.css";

export type BorderGlowPosition = "up" | "down" | "left" | "right" | "all";

export type BorderGlowChildProps = {
  className?: string;
  onPointerMove?: PointerEventHandler<HTMLElement>;
};

export type BorderGlowProps = {
  children: ReactElement<BorderGlowChildProps>;
  position?: BorderGlowPosition;
};

const BORDER_GLOW_POSITION_CLASS: Record<BorderGlowPosition, string> = {
  up: "margo-border-glow--edge-top",
  down: "margo-border-glow--edge-bottom",
  left: "margo-border-glow--edge-left",
  right: "margo-border-glow--edge-right",
  all: "margo-border-glow--ring",
};

export const BorderGlow = ({ children, position = "all" }: BorderGlowProps) => {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--margo-border-glow-x", `${position === "right" ? bounds.width - x : x}px`);
    event.currentTarget.style.setProperty("--margo-border-glow-y", `${position === "down" ? bounds.height - y : y}px`);

    children.props.onPointerMove?.(event);
  };

  return cloneElement(children, {
    className: cn("relative isolate margo-border-glow", BORDER_GLOW_POSITION_CLASS[position], children.props.className),
    onPointerMove: handlePointerMove,
  });
};
