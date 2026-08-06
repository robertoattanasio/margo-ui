import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import {
  tableBaseClassName,
  tableBodyClassName,
  tableCellClassName,
  tableHeadCellClassName,
  tableHeadClassName,
  tableRowClassName,
  tableWrapperClassName,
} from "./style.js";

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
  <div className={tableWrapperClassName}>
    <Tag {...Tag.forward<T>(rest, "table")} className={cn(tableBaseClassName, className)}>
      {children}
    </Tag>
  </div>
);

Table.Head = <T extends ElementType = "thead">({ className, children, ...rest }: TableHeadProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "thead")} className={cn(tableHeadClassName, className)}>
    {children}
  </Tag>
);

Table.Body = <T extends ElementType = "tbody">({ className, children, ...rest }: TableBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "tbody")} className={cn(tableBodyClassName, className)}>
    {children}
  </Tag>
);

Table.Row = <T extends ElementType = "tr">({ className, children, ...rest }: TableRowProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "tr")} className={cn(tableRowClassName, className)}>
    {children}
  </Tag>
);

Table.HeadCell = <T extends ElementType = "th">({ className, children, ...rest }: TableHeadCellProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "th")} className={cn(tableHeadCellClassName, className)}>
    {children}
  </Tag>
);

Table.Cell = <T extends ElementType = "td">({ className, children, ...rest }: TableCellProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "td")} className={cn(tableCellClassName, className)}>
    {children}
  </Tag>
);
