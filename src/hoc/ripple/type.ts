import type { PointerEvent, PointerEventHandler, ReactElement, ReactNode } from "react";

export type RippleChildProps = {
  children?: ReactNode;
  className?: string;
  onPointerUp?: PointerEventHandler<HTMLElement>;
};

export type RippleProps = {
  children: ReactElement<RippleChildProps>;
  disabled?: boolean;
  rippleClassName?: string;
};

export type RippleState = {
  id: number;
  size: number;
  x: number;
  y: number;
};

export type UseRipple = {
  ripple: RippleState | null;
  endRipple: () => void;
  startRipple: (event: PointerEvent<HTMLElement>) => void;
};
