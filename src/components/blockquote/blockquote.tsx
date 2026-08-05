import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { blockquoteBaseClassName } from "./style.js";

import type { ElementType } from "react";
import type { BlockquoteProps } from "./type.js";

export const Blockquote = <T extends ElementType = "blockquote">({ className, ...rest }: BlockquoteProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "blockquote")} className={cn(blockquoteBaseClassName, className)} />
);
