"use client";

import { cloneElement } from "react";

import { join } from "../../utils/join/join.js";

import type { PointerEvent } from "react";
import type { BorderGlowPlacement, BorderGlowProps } from "./type.js";

const borderGlowPlacementClassName: Record<BorderGlowPlacement, string> = {
  top: "margo-border-glow--edge-top",
  bottom: "margo-border-glow--edge-bottom",
  left: "margo-border-glow--edge-left",
  right: "margo-border-glow--edge-right",
  all: "margo-border-glow--ring",
};

export const BorderGlow = ({ children, placement = "all", tolerance = 1 }: BorderGlowProps) => {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return children.props.onPointerMove?.(event);

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const size = Math.max(bounds.width, bounds.height) * Math.min(Math.max(tolerance, 0), 1);

    event.currentTarget.style.setProperty("--margo-border-glow-size", `${size}px`);
    event.currentTarget.style.setProperty("--margo-border-glow-x", `${placement === "right" ? bounds.width - x : x}px`);
    event.currentTarget.style.setProperty(
      "--margo-border-glow-y",
      `${placement === "bottom" ? bounds.height - y : y}px`,
    );

    children.props.onPointerMove?.(event);
  };

  return cloneElement(children, {
    className: join("margo-border-glow", borderGlowPlacementClassName[placement], children.props.className),
    onPointerMove: handlePointerMove,
  });
};
