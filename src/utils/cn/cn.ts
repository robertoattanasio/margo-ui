import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

const isNumber = (value: string) => /^\d+$/.test(value);

const isColumnLine = (value: string) => value === "full" || value === "content" || isNumber(value);

const isMargoRadiusStep = (value: string) => /^margo-(mc|xs|sm|base)$/.test(value);

const MARGO_LEADING_STEPS = ["mc", "xs", "sm", "md", "lg", "base", "xl", "2xl"];
const MARGO_SHADOWS = ["card", "button", "item", "chip"];

const BORDER_SIDES = ["", "x", "y", "s", "e", "t", "r", "b", "l"] as const;
const RADIUS_CORNERS = ["", "s", "e", "t", "r", "b", "l", "ss", "se", "ee", "es", "tl", "tr", "br", "bl"] as const;

const borderWidthGroups = Object.fromEntries(
  BORDER_SIDES.map((side) => [
    side ? `border-w-${side}` : "border-w",
    [{ [side ? `border-${side}` : "border"]: ["margo"] }],
  ]),
);

const radiusGroups = Object.fromEntries(
  RADIUS_CORNERS.map((corner) => [
    corner ? `rounded-${corner}` : "rounded",
    [{ [corner ? `rounded-${corner}` : "rounded"]: [isMargoRadiusStep] }],
  ]),
);

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
  override: {
    conflictingClassGroups: {
      "font-size": [],
    },
  },
  extend: {
    classGroups: {
      "font-size": ["text-mc"],
      leading: [{ leading: MARGO_LEADING_STEPS }],
      shadow: [{ shadow: MARGO_SHADOWS }],
      ...borderWidthGroups,
      ...radiusGroups,
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
