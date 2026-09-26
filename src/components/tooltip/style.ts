import type { TooltipPlacement } from "./type.js";

export const tooltipAnchorClassName = "group/tooltip relative inline-block size-fit";

export const tooltipBubbleClassName = `pointer-events-none absolute z-10 rounded-margo-xs bg-on-main px-2 py-0.5 text-xs text-main lowercase
whitespace-nowrap opacity-0`;

export const tooltipTransitionClassName = "transition-opacity duration-[250ms] ease-in-out";

export const tooltipVisibleClassName = "group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100";

export const tooltipPlacementClassName: Record<TooltipPlacement, string> = {
  top: "bottom-[120%] left-1/2 -translate-x-1/2",
  bottom: "top-[120%] left-1/2 -translate-x-1/2",
  left: "top-1/2 right-[calc(100%+0.5rem)] -translate-y-1/2",
  right: "top-1/2 left-[calc(100%+0.5rem)] -translate-y-1/2",
};
