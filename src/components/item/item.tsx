import { MdChevronRight } from "react-icons/md";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import {
  itemActiveClassName,
  itemBaseClassName,
  itemDisabledClassName,
  itemIconClassName,
  itemLabelClassName,
  itemSurfaceClassName,
} from "./style.js";

import type { ElementType, MouseEvent } from "react";
import { Ripple } from "../../hoc/ripple/ripple.js";
import type { ItemIconProps, ItemLabelProps, ItemProps } from "./type.js";

export const Item = <T extends ElementType = "button">({
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

Item.Icon = ({ children = <MdChevronRight className="text-md translate-x-1" />, className }: ItemIconProps) => (
  <span data-margo-item-slot={true} className={cn(itemIconClassName, className)}>
    {children}
  </span>
);

Item.Label = ({ children, className }: ItemLabelProps) => (
  <span className={cn(itemLabelClassName, className)}>{children}</span>
);
