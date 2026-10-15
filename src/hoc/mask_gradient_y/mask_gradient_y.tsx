import { cloneElement } from "react";

import { join } from "../../utils/join/join.js";

import type { CSSProperties } from "react";
import type { MaskGradientYProps } from "./type.js";

export const MaskGradientY = ({ children, fade, fadeTop, fadeBottom, offsetTop, offsetBottom }: MaskGradientYProps) => {
  const style = {
    "--margo-mask-gradient-y-offset-top": offsetTop,
    "--margo-mask-gradient-y-offset-bottom": offsetBottom,
    "--margo-mask-gradient-y-fade-top": fadeTop ?? fade,
    "--margo-mask-gradient-y-fade-bottom": fadeBottom ?? fade,
  } as CSSProperties;

  return cloneElement(children, {
    className: join("margo-mask-gradient-y", children.props.className),
    style: { ...style, ...children.props.style },
  });
};
