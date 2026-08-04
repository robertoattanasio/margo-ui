import { useState } from "react";

import type { PointerEvent } from "react";
import type { RippleState, UseRipple } from "./type.js";

export const useRipple = (): UseRipple => {
  const [ripple, setRipple] = useState<RippleState | null>(null);

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
