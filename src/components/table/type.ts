import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type TableProps<T extends ElementType = "table"> = TagProps<T>;

export type TableHeadProps<T extends ElementType = "thead"> = TagProps<T>;

export type TableBodyProps<T extends ElementType = "tbody"> = TagProps<T>;

export type TableRowProps<T extends ElementType = "tr"> = TagProps<T>;

export type TableHeadCellProps<T extends ElementType = "th"> = TagProps<T>;

export type TableCellProps<T extends ElementType = "td"> = TagProps<T>;
