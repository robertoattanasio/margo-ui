"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn/cn.js";
import { popoverBaseClassName, popoverOriginClassName, popoverPlacementClassName } from "./style.js";

import type { PopoverProps } from "./type.js";

export const PopoverClient = ({
  open = false,
  onClose,
  dismissible = true,
  placement = "bottom",
  align = "center",
  className,
  children,
  ...rest
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef(children);

  const [isMounted, setIsMounted] = useState(open);

  if (open) childrenRef.current = children;
  if (open && !isMounted) setIsMounted(true);

  useEffect(() => {
    const popover = popoverRef.current;

    if (!popover || open || !isMounted) return;

    const controller = new AbortController();

    const frame = requestAnimationFrame(() => {
      const animations = popover.getAnimations({ subtree: true }).map((animation) => animation.finished);

      void Promise.allSettled(animations).then(() => {
        if (controller.signal.aborted) return;

        setIsMounted(false);
      });
    });

    return () => {
      controller.abort();
      cancelAnimationFrame(frame);
    };
  }, [isMounted, open]);

  useEffect(() => {
    const popover = popoverRef.current;

    if (!popover || !open || !dismissible) return;

    const anchor = popover.offsetParent;
    const controller = new AbortController();

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (!target || popover.contains(target) || anchor?.contains(target)) return;

      onClose?.();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("pointerdown", handlePointerDown, { signal: controller.signal });
    document.addEventListener("keydown", handleKeyDown, { signal: controller.signal });

    return () => controller.abort();
  }, [dismissible, onClose, open]);

  return (
    <div
      {...rest}
      ref={popoverRef}
      data-margo-open={open}
      className={cn(
        popoverBaseClassName,
        popoverPlacementClassName[placement][align],
        popoverOriginClassName[placement],
        className,
      )}
    >
      {isMounted ? childrenRef.current : null}
    </div>
  );
};
