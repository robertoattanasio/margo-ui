import { cloneElement } from "react";

import { cn } from "../../utils/cn/cn.js";
import { borderGlowBaseClassName, borderGlowPositionClassName } from "./style.js";

import type { PointerEvent } from "react";
import type { BorderGlowProps } from "./type.js";

import "./border_glow.css";

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
    className: cn(borderGlowBaseClassName, borderGlowPositionClassName[position], children.props.className),
    onPointerMove: handlePointerMove,
  });
};
