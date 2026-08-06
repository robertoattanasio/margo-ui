import { MdChevronRight } from "react-icons/md";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import {
  itemActiveClassName,
  itemBaseClassName,
  itemIconClassName,
  itemLabelClassName,
  itemSurfaceClassName,
} from "./style.js";

import type { ElementType, MouseEvent } from "react";
import { Ripple } from "../../hoc/ripple/ripple.js";
import type { ItemIconProps, ItemLabelProps, ItemProps } from "./type.js";

export const Item = <T extends ElementType = "div">({
  active = false,
  onClickBlur,
  onClick,
  className,
  children,
  ...rest
}: ItemProps<T>) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);
    if (typeof onClickBlur === "function") {
      const target = event.currentTarget;
      onClickBlur(event);
      setTimeout(() => target.blur(), 150);
    }
  };

  return (
    <Ripple>
      <Tag
        {...Tag.forward<T>(rest)}
        data-active={active}
        onClick={handleClick}
        className={cn(itemBaseClassName, active ? itemActiveClassName : itemSurfaceClassName, className)}
      >
        {children}
      </Tag>
    </Ripple>
  );
};

Item.Icon = ({ icon = <MdChevronRight className="text-md translate-x-1" />, className = null }: ItemIconProps) => (
  <span data-margo-item-slot={true} className={cn(itemIconClassName, className)}>
    {icon}
  </span>
);

Item.Label = ({ label, className = null }: ItemLabelProps) => (
  <span className={cn(itemLabelClassName, className)}>{label}</span>
);
