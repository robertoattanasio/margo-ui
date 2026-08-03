import { cloneElement } from "react";

import { cn } from "../helpers/cn";

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
  up: "margo-glow-border--edge-top",
  down: "margo-glow-border--edge-bottom",
  left: "margo-glow-border--edge-left",
  right: "margo-glow-border--edge-right",
  all: "margo-glow-border--ring",
};

export const BorderGlow = ({ children, position = "all" }: BorderGlowProps) => {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--margo-glow-border-x", `${position === "right" ? bounds.width - x : x}px`);
    event.currentTarget.style.setProperty("--margo-glow-border-y", `${position === "down" ? bounds.height - y : y}px`);

    children.props.onPointerMove?.(event);
  };

  return cloneElement(children, {
    className: cn("relative isolate margo-glow-border", BORDER_GLOW_POSITION_CLASS[position], children.props.className),
    onPointerMove: handlePointerMove,
  });
};
