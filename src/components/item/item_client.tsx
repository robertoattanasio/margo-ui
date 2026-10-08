"use client";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { itemActiveClassName, itemBaseClassName, itemDisabledClassName, itemSurfaceClassName } from "./style.js";

import type { ElementType, MouseEvent } from "react";
import { Ripple } from "../../hoc/ripple/ripple.js";
import type { ItemProps } from "./type.js";

export const ItemClient = <T extends ElementType = "button">({
  clickable = true,
  disabled = false,
  active = false,
  onClick,
  className,
  children,
  ...rest
}: ItemProps<T>) => {
  const isNativeButton = (rest.as ?? "button") === "button";

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return event.preventDefault();
    onClick?.(event);
  };

  return (
    <Ripple disabled={disabled || !clickable}>
      <Tag
        {...Tag.forward<T>(rest, "button")}
        data-margo-active={active}
        data-margo-disabled={disabled}
        disabled={(isNativeButton && disabled) || undefined}
        aria-disabled={(!isNativeButton && disabled) || undefined}
        inert={!clickable || undefined}
        onClick={handleClick}
        className={cn(
          itemBaseClassName,
          active ? itemActiveClassName : itemSurfaceClassName,
          disabled && itemDisabledClassName,
          className,
        )}
      >
        {children}
      </Tag>
    </Ripple>
  );
};
