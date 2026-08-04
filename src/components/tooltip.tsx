import { Tag } from "../../../react-renderable";
import { cn } from "../utils/cn";

import { useRef } from "react";

import type { ElementType, ReactNode } from "react";
import type { TagProps } from "../../../react-renderable";

export type TooltipPosition = "up" | "down" | "left" | "right";

export type TooltipProps<T extends ElementType = "div"> = Omit<TagProps<T>, "aria-label" | "children" | "id"> & {
  ariaLabel?: string;
  id?: string;
  placeholder?: ReactNode;
  position?: TooltipPosition;
  children?: ReactNode;
};

const TOOLTIP_POSITION_CLASS: Record<TooltipPosition, string> = {
  up: "bottom-[120%] left-1/2 -translate-x-1/2",
  down: "top-[120%] left-1/2 -translate-x-1/2",
  left: "top-1/2 right-[calc(100%+0.5rem)] -translate-y-1/2",
  right: "top-1/2 left-[calc(100%+0.5rem)] -translate-y-1/2",
};

export const Tooltip = <T extends ElementType = "div">(props: TooltipProps<T>) => {
  const { as, ariaLabel, children, className, id, placeholder, position = "down", ...restProps } = props;
  const nativeProps = { as: as ?? "div", ...restProps } as TagProps<T>;

  const placeholderRef = useRef<ReactNode>(null);

  const isFilled = placeholder !== null && placeholder !== undefined;

  if (isFilled) placeholderRef.current = placeholder;

  return (
    <Tag {...nativeProps} className={cn("group relative inline-block size-fit", className)}>
      {children}
      <span
        id={id}
        role="tooltip"
        aria-label={isFilled ? undefined : ariaLabel}
        className={cn(
          `pointer-events-none absolute z-10 rounded-sm bg-on-main px-2 py-0.5 text-xs text-main lowercase
          whitespace-nowrap opacity-0`,
          "transition-opacity duration-[250ms] ease-in-out",
          isFilled && "group-hover:opacity-100 group-focus-within:opacity-100",
          TOOLTIP_POSITION_CLASS[position],
        )}
      >
        {placeholderRef.current}
      </span>
    </Tag>
  );
};
