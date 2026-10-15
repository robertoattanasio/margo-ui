import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

const isMargoRadiusStep = (value: string) => /^margo-(mc|xs|sm|base)$/.test(value);

const MARGO_LEADING_STEPS = ["mc", "xs", "sm", "md", "lg", "base", "xl", "2xl"];
const MARGO_SHADOWS = ["card", "button", "item", "chip", "callout"];

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

const twMerge = extendTailwindMerge({
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
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
