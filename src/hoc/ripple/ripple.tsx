import { cloneElement } from "react";

import { Guard } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { useRipple } from "./use_ripple.js";

import type { PointerEvent } from "react";
import type { RippleProps } from "./type.js";

import "./ripple.css";

export const Ripple = ({ children, disabled = false, rippleClassName = "bg-primary-darken" }: RippleProps) => {
  const { endRipple, ripple, startRipple } = useRipple();

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!disabled) startRipple(event);
    children.props.onPointerUp?.(event);
  };

  return cloneElement(children, {
    className: cn("relative overflow-hidden", children.props.className),
    onPointerUp: handlePointerUp,
    children: (
      <>
        {children.props.children}
        <Guard guardIf={!ripple} shouldHide>
          <span
            key={ripple?.id}
            aria-hidden
            className={cn("pointer-events-none absolute z-0 rounded-full margo-animation-ripple", rippleClassName)}
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
