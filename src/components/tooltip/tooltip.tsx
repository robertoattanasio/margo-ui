import { useRef } from "react";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import {
  tooltipAnchorClassName,
  tooltipBubbleClassName,
  tooltipPositionClassName,
  tooltipTransitionClassName,
  tooltipVisibleClassName,
} from "./style.js";

import type { ElementType, ReactNode } from "react";
import type { TooltipProps } from "./type.js";

export const Tooltip = <T extends ElementType = "div">({
  ariaLabel,
  children,
  className,
  id,
  placeholder,
  position = "down",
  ...rest
}: TooltipProps<T>) => {
  const placeholderRef = useRef<ReactNode>(null);

  const isFilled = placeholder !== null && placeholder !== undefined;

  if (isFilled) placeholderRef.current = placeholder;

  return (
    <Tag {...Tag.forward<T>(rest)} className={cn(tooltipAnchorClassName, className)}>
      {children}
      <span
        id={id}
        role="tooltip"
        aria-label={isFilled ? undefined : ariaLabel}
        className={cn(
          tooltipBubbleClassName,
          tooltipTransitionClassName,
          isFilled && tooltipVisibleClassName,
          tooltipPositionClassName[position],
        )}
      >
        {placeholderRef.current}
      </span>
    </Tag>
  );
};
