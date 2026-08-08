import { useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn/cn.js";
import { layerBaseClassName } from "./style.js";

import type { MouseEvent, SyntheticEvent } from "react";
import type { LayerProps } from "./type.js";

import "./layer.css";

export const Layer = ({ open = false, onClose, dismissible = true, className, children, ...rest }: LayerProps) => {
  const layerRef = useRef<HTMLDialogElement>(null);
  const childrenRef = useRef(children);

  const [isMounted, setIsMounted] = useState(open);

  if (open) childrenRef.current = children;
  if (open && !isMounted) setIsMounted(true);

  useEffect(() => {
    const layer = layerRef.current;

    if (!layer) return;
    if (open && !layer.open) layer.showModal();
    if (open || !layer.open) return;

    layer.close();

    const controller = new AbortController();

    const frame = requestAnimationFrame(() => {
      const animations = layer.getAnimations({ subtree: true }).map((animation) => animation.finished);

      void Promise.allSettled(animations).then(() => {
        if (controller.signal.aborted) return;

        setIsMounted(false);
      });
    });

    return () => {
      controller.abort();
      cancelAnimationFrame(frame);
    };
  }, [open]);

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (!dismissible || event.target !== event.currentTarget) return;

    onClose?.();
  };

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose?.();
  };

  return (
    <dialog
      {...rest}
      ref={layerRef}
      onCancel={handleCancel}
      onClick={handleClick}
      className={cn(layerBaseClassName, className)}
    >
      {isMounted ? childrenRef.current : null}
    </dialog>
  );
};
