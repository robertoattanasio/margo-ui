import type { SheetSide } from "./type.js";

export const sheetBaseClassName = "margo-sheet flex flex-col overflow-hidden border-border bg-main text-on-main";

export const sheetSideClassName: Record<SheetSide, string> = {
  start: "h-full w-[85%] max-w-[26rem] justify-self-start self-stretch border-r-margo",
  end: "h-full w-[85%] max-w-[26rem] justify-self-end self-stretch border-l-margo",
  top: "h-auto max-h-[40%] w-full self-start justify-self-stretch border-b-margo",
  bottom: "h-auto max-h-[40%] w-full self-end justify-self-stretch border-t-margo",
};

export const sheetBodyClassName = "min-h-0 flex-1 overflow-y-auto outline-on-main px-5 py-4 text-sm";

export const sheetFooterClassName = "flex items-center justify-end gap-2 border-t-margo border-border px-5 py-4";
