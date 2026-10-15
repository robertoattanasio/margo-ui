"use client";

import { cloneElement } from "react";

import { Guard } from "react-renderable";

import { join } from "../../utils/join/join.js";
import { useRipple } from "./use_ripple.js";

import type { PointerEvent } from "react";
import type { RippleProps } from "./type.js";

export const Ripple = ({ children, disabled = false, rippleClassName }: RippleProps) => {
  const { endRipple, ripple, startRipple } = useRipple();

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!disabled) startRipple(event);
    children.props.onPointerUp?.(event);
  };

  return cloneElement(children, {
    className: join("margo-ripple-host", children.props.className),
    onPointerUp: handlePointerUp,
    children: (
      <>
        {children.props.children}
        <Guard guardIf={!ripple} shouldHide>
          <span
            key={ripple?.id}
            aria-hidden
            className={join("margo-ripple margo-animation-ripple", rippleClassName)}
            style={{
              height: ripple?.size,
              left: ripple?.x,
              top: ripple?.y,
              width: ripple?.size,
            }}
            onAnimationEnd={endRipple}
          />
        </Guard>
      </>
    ),
  });
};
