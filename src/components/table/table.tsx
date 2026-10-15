import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type {
  TableBodyProps,
  TableCellProps,
  TableHeadCellProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./type.js";

export const Table = <T extends ElementType = "table">({ className, children, ...rest }: TableProps<T>) => (
  <div className="margo-table-wrapper">
    <Tag {...Tag.forward<T>(rest, "table")} className={join("margo-table", className)}>
      {children}
    </Tag>
  </div>
);

Table.Head = <T extends ElementType = "thead">({ className, children, ...rest }: TableHeadProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "thead")} className={join("margo-table-head", className)}>
    {children}
  </Tag>
);

Table.Body = <T extends ElementType = "tbody">({ className, children, ...rest }: TableBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "tbody")} className={join("margo-table-body", className)}>
    {children}
  </Tag>
);

Table.Row = <T extends ElementType = "tr">({ className, children, ...rest }: TableRowProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "tr")} className={join("margo-table-row", className)}>
    {children}
  </Tag>
);

Table.HeadCell = <T extends ElementType = "th">({ className, children, ...rest }: TableHeadCellProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "th")} className={join("margo-table-head-cell", className)}>
    {children}
  </Tag>
);

Table.Cell = <T extends ElementType = "td">({ className, children, ...rest }: TableCellProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "td")} className={join("margo-table-cell", className)}>
    {children}
  </Tag>
);
