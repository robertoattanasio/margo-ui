import { useEffect, useRef, useState } from "react";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import {
  popoverAnchorClassName,
  popoverBaseClassName,
  popoverBodyClassName,
  popoverOriginClassName,
  popoverPositionClassName,
} from "./style.js";

import type { ElementType } from "react";
import type { PopoverAnchorProps, PopoverBodyProps, PopoverProps } from "./type.js";

import "./popover.css";

export const Popover = ({
  open = false,
  onClose,
  dismissible = true,
  position = "down",
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
        popoverPositionClassName[position][align],
        popoverOriginClassName[position],
        className,
      )}
    >
      {isMounted ? childrenRef.current : null}
    </div>
  );
};

Popover.Anchor = <T extends ElementType = "div">({ className, children, ...rest }: PopoverAnchorProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(popoverAnchorClassName, className)}>
    {children}
  </Tag>
);

Popover.Body = <T extends ElementType = "div">({ className, children, ...rest }: PopoverBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(popoverBodyClassName, className)}>
    {children}
  </Tag>
);
