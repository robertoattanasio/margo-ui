import type { TooltipPosition } from "./type.js";

export const tooltipAnchorClassName = "group relative inline-block size-fit";

export const tooltipBubbleClassName = `pointer-events-none absolute z-10 rounded-sm bg-on-main px-2 py-0.5 text-xs text-main lowercase
whitespace-nowrap opacity-0`;

export const tooltipTransitionClassName = "transition-opacity duration-[250ms] ease-in-out";

export const tooltipVisibleClassName = "group-hover:opacity-100 group-focus-within:opacity-100";

export const tooltipPositionClassName: Record<TooltipPosition, string> = {
  up: "bottom-[120%] left-1/2 -translate-x-1/2",
  down: "top-[120%] left-1/2 -translate-x-1/2",
  left: "top-1/2 right-[calc(100%+0.5rem)] -translate-y-1/2",
  right: "top-1/2 left-[calc(100%+0.5rem)] -translate-y-1/2",
};
