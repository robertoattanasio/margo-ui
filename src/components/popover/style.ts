import type { PopoverAlign, PopoverPlacement } from "./type.js";

export const popoverAnchorClassName = "relative inline-block size-fit";

export const popoverBaseClassName = `margo-popover absolute z-20 m-0 flex w-max max-w-[calc(100vw-2rem)] flex-col
overflow-clip rounded-margo-base border-margo border-border bg-main text-on-main shadow-card outline-none`;

export const popoverBodyClassName = `flex min-h-0 max-h-56 flex-col gap-1
overflow-y-auto overscroll-contain w-64 p-2 text-sm`;

export const popoverPlacementClassName: Record<PopoverPlacement, Record<PopoverAlign, string>> = {
  top: {
    start: "bottom-full left-0 my-1",
    center: "bottom-full left-1/2 my-1 -translate-x-1/2",
    end: "right-0 bottom-full my-1",
  },
  bottom: {
    start: "top-full left-0 my-1",
    center: "top-full left-1/2 my-1 -translate-x-1/2",
    end: "top-full right-0 my-1",
  },
  left: {
    start: "top-0 right-full mx-1",
    center: "top-1/2 right-full mx-1 -translate-y-1/2",
    end: "right-full bottom-0 mx-1",
  },
  right: {
    start: "top-0 left-full mx-1",
    center: "top-1/2 left-full mx-1 -translate-y-1/2",
    end: "bottom-0 left-full mx-1",
  },
};

export const popoverOriginClassName: Record<PopoverPlacement, string> = {
  top: "origin-bottom",
  bottom: "origin-top",
  left: "origin-right",
  right: "origin-left",
};
