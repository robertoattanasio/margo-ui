"use client";

import { useRef } from "react";

import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType, ReactNode } from "react";
import type { TooltipProps } from "./type.js";

export const Tooltip = <T extends ElementType = "div">({
  label,
  children,
  className,
  id,
  content,
  placement = "bottom",
  ...rest
}: TooltipProps<T>) => {
  const contentRef = useRef<ReactNode>(null);

  const isFilled = content !== null && content !== undefined;

  if (isFilled) contentRef.current = content;

  return (
    <Tag {...Tag.forward<T>(rest)} className={join("margo-tooltip", className)}>
      {children}
      <span
        id={id}
        role="tooltip"
        aria-label={isFilled ? undefined : label}
        data-margo-filled={isFilled}
        data-margo-placement={placement}
        className="margo-tooltip-bubble"
      >
        {contentRef.current}
      </span>
    </Tag>
  );
};
