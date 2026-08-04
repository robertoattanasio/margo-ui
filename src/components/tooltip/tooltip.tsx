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
import type { TagProps } from "react-renderable";
import type { TooltipProps } from "./type.js";

export const Tooltip = <T extends ElementType = "div">(props: TooltipProps<T>) => {
  const { as, ariaLabel, children, className, id, placeholder, position = "down", ...restProps } = props;
  const nativeProps = { as: as ?? "div", ...restProps } as TagProps<T>;

  const placeholderRef = useRef<ReactNode>(null);

  const isFilled = placeholder !== null && placeholder !== undefined;

  if (isFilled) placeholderRef.current = placeholder;

  return (
    <Tag {...nativeProps} className={cn(tooltipAnchorClassName, className)}>
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
