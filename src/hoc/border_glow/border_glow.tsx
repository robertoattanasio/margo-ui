import { cloneElement } from "react";

import { cn } from "../../utils/cn/cn.js";
import { borderGlowBaseClassName, borderGlowPlacementClassName } from "./style.js";

import type { PointerEvent } from "react";
import type { BorderGlowProps } from "./type.js";

import "./border_glow.css";

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
    className: cn(borderGlowBaseClassName, borderGlowPlacementClassName[placement], children.props.className),
    onPointerMove: handlePointerMove,
  });
};
