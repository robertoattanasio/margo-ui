"use client";

import type { ElementType, MouseEvent } from "react";
import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";
import type { ButtonGroupItemProps } from "./type.js";

export const ButtonGroupItemClient = <T extends ElementType = "button">({
  clickable = true,
  disabled = false,
  active = false,
  onClick,
  className,
  children,
  ...rest
}: ButtonGroupItemProps<T>) => {
  const isNativeButton = (rest.as ?? "button") === "button";

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return event.preventDefault();
    onClick?.(event);
  };

  return (
    <Tag
      {...Tag.forward<T>(rest, "button")}
      data-margo-active={active}
      data-margo-disabled={disabled}
      aria-pressed={isNativeButton ? active : undefined}
      disabled={(isNativeButton && disabled) || undefined}
      aria-disabled={(!isNativeButton && disabled) || undefined}
      inert={!clickable || undefined}
      onClick={handleClick}
      className={join("margo-button-group-item", className)}
    >
      {children}
    </Tag>
  );
};
