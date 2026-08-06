import { cloneElement } from "react";

import { cn } from "../../utils/cn/cn.js";

import type { CSSProperties } from "react";
import type { MaskGradientYProps } from "./type.js";

import "./mask_gradient_y.css";

export const MaskGradientY = ({ children, fade, fadeTop, fadeBottom, offsetTop, offsetBottom }: MaskGradientYProps) => {
  const style = {
    "--margo-mask-gradient-y-offset-top": offsetTop,
    "--margo-mask-gradient-y-offset-bottom": offsetBottom,
    "--margo-mask-gradient-y-fade-top": fadeTop ?? fade,
    "--margo-mask-gradient-y-fade-bottom": fadeBottom ?? fade,
  } as CSSProperties;

  return cloneElement(children, {
    className: cn("margo-mask-gradient-y", children.props.className),
    style: { ...style, ...children.props.style },
  });
};
