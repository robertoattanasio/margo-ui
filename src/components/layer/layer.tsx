import { useEffect, useRef } from "react";

import { cn } from "../../utils/cn/cn.js";
import { layerBaseClassName } from "./style.js";

import type { MouseEvent, SyntheticEvent } from "react";
import type { LayerProps } from "./type.js";

import "./layer.css";

export const Layer = ({ open = false, onClose, dismissible = true, className, children, ...rest }: LayerProps) => {
  const layerRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const layer = layerRef.current;

    if (!layer) return;
    if (open && !layer.open) layer.showModal();
    if (!open && layer.open) layer.close();
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
      {children}
    </dialog>
  );
};
