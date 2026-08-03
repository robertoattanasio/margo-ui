import { cloneElement } from "react";

import { Guard } from "react-renderable";
import { cn } from "../helpers/cn";
import { useRipple } from "../hooks/use_ripple";

import type { PointerEvent, PointerEventHandler, ReactElement, ReactNode } from "react";

import "./ripple.css";

export type RippleChildProps = {
  children?: ReactNode;
  className?: string;
  onPointerDown?: PointerEventHandler<HTMLElement>;
};

export type RippleProps = {
  children: ReactElement<RippleChildProps>;
  rippleClassName?: string;
};

export const Ripple = ({ children, rippleClassName = "bg-primary" }: RippleProps) => {
  const { endRipple, ripple, startRipple } = useRipple();

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    startRipple(event);
    children.props.onPointerDown?.(event);
  };

  return cloneElement(children, {
    className: cn("relative overflow-hidden", children.props.className),
    onPointerDown: handlePointerDown,
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
