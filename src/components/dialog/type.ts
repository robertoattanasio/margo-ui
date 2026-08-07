import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type DialogProps<T extends ElementType = "div"> = TagProps<T>;

export type DialogBodyProps<T extends ElementType = "div"> = TagProps<T>;

export type DialogFooterProps<T extends ElementType = "div"> = TagProps<T>;
