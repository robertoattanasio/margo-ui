"use client";

import { Tag } from "react-renderable";

import { Ripple } from "../../hoc/ripple/ripple.js";
import { cn } from "../../utils/cn/cn.js";
import {
  buttonActiveClassName,
  buttonBaseClassName,
  buttonDisabledClassName,
  buttonSurfaceClassName,
} from "./style.js";

import type { ElementType, MouseEvent } from "react";
import type { ButtonProps } from "./type.js";

export const ButtonClient = <T extends ElementType = "button">({
  clickable = true,
  disabled = false,
  active = false,
  open = false,
  className,
  onClick,
  ...rest
}: ButtonProps<T>) => {
  const isNativeButton = (rest.as ?? "button") === "button";

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return event.preventDefault();
    onClick?.(event);
  };

  return (
    <Ripple disabled={disabled || !clickable}>
      <Tag
        {...Tag.forward<T>(rest, "button")}
        data-margo-open={open}
        data-margo-disabled={disabled}
        data-margo-active={active}
        disabled={(isNativeButton && disabled) || undefined}
        aria-disabled={(!isNativeButton && disabled) || undefined}
        inert={!clickable || undefined}
        onClick={handleClick}
        className={cn(
          buttonBaseClassName,
          active ? buttonActiveClassName : buttonSurfaceClassName,
          disabled && buttonDisabledClassName,
          className,
        )}
      />
    </Ripple>
  );
};
