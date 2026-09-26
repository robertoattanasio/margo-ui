import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type SheetPlacement = "top" | "right" | "bottom" | "left";

export type SheetOwnProps = {
  placement?: SheetPlacement;
};

export type SheetProps<T extends ElementType = "div"> = TagProps<T, SheetOwnProps>;

export type SheetBodyProps<T extends ElementType = "div"> = TagProps<T>;

export type SheetFooterProps<T extends ElementType = "div"> = TagProps<T>;
