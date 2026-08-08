import { cloneElement, useState } from "react";

import type { PointerEvent } from "react";
import type { PointerHolderProps } from "./type.js";

const readKey = (target: EventTarget | null, attribute: string) => {
  if (!(target instanceof Element)) return null;
  const holder = target.closest(`[${attribute}]`);
  return holder?.getAttribute(attribute) ?? null;
};

export const PointerHolder = ({ children, attribute = "data-margo-pointer-holder", disabled = false }: PointerHolderProps) => {
  const [keys, setKeys] = useState<string[]>([]);

  const hold = (target: EventTarget | null) => {
    const key = readKey(target, attribute);

    if (key === null) return;
    setKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const release = () => setKeys((prev) => (prev.length ? [] : prev));

  const child = children({ keys });

  const handlePointerOver = (event: PointerEvent<HTMLElement>) => {
    if (!disabled && event.pointerType !== "touch") hold(event.target);
    child.props.onPointerOver?.(event);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    release();
    child.props.onPointerLeave?.(event);
  };

  return cloneElement(child, {
    onPointerLeave: handlePointerLeave,
    onPointerOver: handlePointerOver,
  });
};
