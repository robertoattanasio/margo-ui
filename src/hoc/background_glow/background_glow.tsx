import { cloneElement } from "react";

import { cn } from "../../utils/cn/cn.js";
import { backgroundGlowBaseClassName, backgroundGlowSizeClassName } from "./style.js";

import type { PointerEvent } from "react";
import type { BackgroundGlowProps } from "./type.js";

import "./background_glow.css";

export const BackgroundGlow = ({ children, size = "md" }: BackgroundGlowProps) => {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty("--margo-background-glow-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--margo-background-glow-y", `${event.clientY - bounds.top}px`);

    children.props.onPointerMove?.(event);
  };

  return cloneElement(children, {
    className: cn(backgroundGlowBaseClassName, backgroundGlowSizeClassName[size], children.props.className),
    onPointerMove: handlePointerMove,
  });
};
