import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { BlockquoteProps } from "./type.js";

export const Blockquote = <T extends ElementType = "blockquote">({ className, ...rest }: BlockquoteProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "blockquote")} className={join("margo-blockquote", className)} />
);
