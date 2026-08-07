import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { sheetBaseClassName, sheetBodyClassName, sheetFooterClassName, sheetSideClassName } from "./style.js";

import type { ElementType } from "react";
import type { SheetBodyProps, SheetFooterProps, SheetProps } from "./type.js";

import "./sheet.css";

export const Sheet = <T extends ElementType = "div">({ side = "end", className, children, ...rest }: SheetProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest)}
    data-margo-side={side}
    data-margo-travel={true}
    className={cn(sheetBaseClassName, sheetSideClassName[side], className)}
  >
    {children}
  </Tag>
);

Sheet.Body = <T extends ElementType = "div">({ className, children, ...rest }: SheetBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(sheetBodyClassName, className)}>
    {children}
  </Tag>
);

Sheet.Footer = <T extends ElementType = "div">({ className, children, ...rest }: SheetFooterProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(sheetFooterClassName, className)}>
    {children}
  </Tag>
);
