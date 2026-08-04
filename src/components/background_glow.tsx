import { cloneElement } from "react";

import { cn } from "../utils/cn";

import type { PointerEvent, PointerEventHandler, ReactElement } from "react";

import "./background_glow.css";

export type BackgroundGlowSize = "sm" | "md" | "lg";

export type BackgroundGlowChildProps = {
  className?: string;
  onPointerMove?: PointerEventHandler<HTMLElement>;
};

export type BackgroundGlowProps = {
  children: ReactElement<BackgroundGlowChildProps>;
  size?: BackgroundGlowSize;
};

const BACKGROUND_GLOW_SIZE_CLASS: Record<BackgroundGlowSize, string> = {
  sm: "margo-background-glow--size-sm",
  md: "margo-background-glow--size-md",
  lg: "margo-background-glow--size-lg",
};

export const BackgroundGlow = ({ children, size = "md" }: BackgroundGlowProps) => {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty("--margo-background-glow-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--margo-background-glow-y", `${event.clientY - bounds.top}px`);

    children.props.onPointerMove?.(event);
  };

  return cloneElement(children, {
    className: cn("relative isolate margo-background-glow", BACKGROUND_GLOW_SIZE_CLASS[size], children.props.className),
    onPointerMove: handlePointerMove,
  });
};
