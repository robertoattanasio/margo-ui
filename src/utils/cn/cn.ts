import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

const isNumber = (value: string) => /^\d+$/.test(value);

const isColumnLine = (value: string) => value === "full" || value === "content" || isNumber(value);

type MargoClassGroupIds =
  | "margo-col"
  | "margo-col-start"
  | "margo-col-end"
  | "margo-col-span"
  | "margo-row"
  | "margo-row-start"
  | "margo-row-span"
  | "margo-gutter"
  | "margo-gutter-x"
  | "margo-gutter-y"
  | "margo-padding";

const twMerge = extendTailwindMerge<MargoClassGroupIds>({
  extend: {
    classGroups: {
      "font-size": ["text-mc"],
      "margo-col": [{ "margo-col": [isColumnLine] }],
      "margo-col-start": [{ "margo-col-start": [isColumnLine] }],
      "margo-col-end": [{ "margo-col-end": [isColumnLine] }],
      "margo-col-span": [{ "margo-col-span": [isColumnLine] }],
      "margo-row": [{ "margo-row": [isNumber] }],
      "margo-row-start": [{ "margo-row-start": [isNumber] }],
      "margo-row-span": [{ "margo-row-span": [isNumber] }],
      "margo-gutter": [{ "margo-gutter": [isNumber] }],
      "margo-gutter-x": [{ "margo-gutter-x": [isNumber] }],
      "margo-gutter-y": [{ "margo-gutter-y": [isNumber] }],
      "margo-padding": [{ "margo-padding": [isNumber] }],
    },
    conflictingClassGroups: {
      "margo-col": ["margo-col-start", "margo-col-end", "margo-col-span"],
      "margo-col-span": ["margo-col-end"],
      "margo-col-end": ["margo-col-span"],
      "margo-row": ["margo-row-start", "margo-row-span"],
      "margo-gutter": ["margo-gutter-x", "margo-gutter-y"],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
