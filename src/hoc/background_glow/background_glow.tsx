import { cloneElement } from "react";

import { cn } from "../../utils/cn/cn.js";
import { backgroundGlowBaseClassName } from "./style.js";

import type { CSSProperties, PointerEvent } from "react";
import type { BackgroundGlowProps } from "./type.js";

import "./background_glow.css";

export const BackgroundGlow = ({ children, tolerance = 1, opacity = 0.2, noise = 0.04 }: BackgroundGlowProps) => {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const spread = Math.max(bounds.width, bounds.height) * Math.min(Math.max(tolerance, 0), 1);

    event.currentTarget.style.setProperty("--margo-background-glow-size", `${spread}px`);
    event.currentTarget.style.setProperty("--margo-background-glow-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--margo-background-glow-y", `${event.clientY - bounds.top}px`);

    children.props.onPointerMove?.(event);
  };

  return cloneElement(children, {
    className: cn(backgroundGlowBaseClassName, children.props.className),
    style: {
      ...children.props.style,
      "--margo-background-glow-opacity": opacity,
      "--margo-background-glow-noise-opacity": noise,
    } as CSSProperties,
    onPointerMove: handlePointerMove,
  });
};
