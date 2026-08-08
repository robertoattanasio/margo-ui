import { MdChevronRight } from "react-icons/md";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import {
  itemActiveClassName,
  itemBaseClassName,
  itemDisabledClassName,
  itemIconClassName,
  itemLabelClassName,
  itemNotClickableClassName,
  itemSurfaceClassName,
} from "./style.js";

import type { ElementType, MouseEvent } from "react";
import { Ripple } from "../../hoc/ripple/ripple.js";
import type { ItemIconProps, ItemLabelProps, ItemProps } from "./type.js";

export const Item = <T extends ElementType = "button">({
  clickable = true,
  disabled = false,
  active = false,
  onClickBlur,
  onClick,
  className,
  children,
  ...rest
}: ItemProps<T>) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onClick?.(event);
    if (typeof onClickBlur === "function") {
      const target = event.currentTarget;
      onClickBlur(event);
      setTimeout(() => target.blur(), 150);
    }
  };

  return (
    <Ripple disabled={disabled || !clickable}>
      <Tag
        {...Tag.forward<T>(rest, "button")}
        data-margo-active={active}
        data-margo-disabled={disabled}
        aria-disabled={disabled || undefined}
        tabIndex={disabled || !clickable ? -1 : undefined}
        onClick={handleClick}
        className={cn(
          itemBaseClassName,
          active ? itemActiveClassName : itemSurfaceClassName,
          !clickable && itemNotClickableClassName,
          disabled && itemDisabledClassName,
          className,
        )}
      >
        {children}
      </Tag>
    </Ripple>
  );
};

Item.Icon = ({ icon = <MdChevronRight className="text-md translate-x-1" />, className }: ItemIconProps) => (
  <span data-margo-item-slot={true} className={cn(itemIconClassName, className)}>
    {icon}
  </span>
);

Item.Label = ({ label, className }: ItemLabelProps) => (
  <span className={cn(itemLabelClassName, className)}>{label}</span>
);
