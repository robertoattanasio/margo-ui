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
  label,
  children,
  className,
  id,
  content,
  position = "down",
  ...rest
}: TooltipProps<T>) => {
  const contentRef = useRef<ReactNode>(null);

  const isFilled = content !== null && content !== undefined;

  if (isFilled) contentRef.current = content;

  return (
    <Tag {...Tag.forward<T>(rest)} className={cn(tooltipAnchorClassName, className)}>
      {children}
      <span
        id={id}
        role="tooltip"
        aria-label={isFilled ? undefined : label}
        className={cn(
          tooltipBubbleClassName,
          tooltipTransitionClassName,
          isFilled && tooltipVisibleClassName,
          tooltipPositionClassName[position],
        )}
      >
        {contentRef.current}
      </span>
    </Tag>
  );
};
