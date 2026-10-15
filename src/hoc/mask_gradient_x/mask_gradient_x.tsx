import { cloneElement } from "react";

import { join } from "../../utils/join/join.js";

import type { CSSProperties } from "react";
import type { MaskGradientXProps } from "./type.js";

export const MaskGradientX = ({ children, fade, fadeLeft, fadeRight, offsetLeft, offsetRight }: MaskGradientXProps) => {
  const style = {
    "--margo-mask-gradient-x-offset-left": offsetLeft,
    "--margo-mask-gradient-x-offset-right": offsetRight,
    "--margo-mask-gradient-x-fade-left": fadeLeft ?? fade,
    "--margo-mask-gradient-x-fade-right": fadeRight ?? fade,
  } as CSSProperties;

  return cloneElement(children, {
    className: join("margo-mask-gradient-x", children.props.className),
    style: { ...style, ...children.props.style },
  });
};
