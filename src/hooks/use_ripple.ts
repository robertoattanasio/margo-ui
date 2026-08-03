import { useState } from "react";

import type { PointerEvent } from "react";

type Ripple = {
  id: number;
  size: number;
  x: number;
  y: number;
};

export type UseRipple = {
  ripple: Ripple | null;
  endRipple: () => void;
  startRipple: (event: PointerEvent<HTMLElement>) => void;
};

export const useRipple = (): UseRipple => {
  const [ripple, setRipple] = useState<Ripple | null>(null);

  const startRipple = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setRipple({
      id: Date.now(),
      size: Math.hypot(bounds.width, bounds.height) * 2,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };

  const endRipple = () => setRipple(null);

  return { ripple, endRipple, startRipple };
};
