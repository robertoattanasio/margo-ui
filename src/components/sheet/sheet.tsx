import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { SheetBodyProps, SheetFooterProps, SheetProps } from "./type.js";

export const Sheet = <T extends ElementType = "div">({
  placement = "right",
  className,
  children,
  ...rest
}: SheetProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest)}
    data-margo-placement={placement}
    data-margo-travel={true}
    className={join("margo-sheet", className)}
  >
    {children}
  </Tag>
);

Sheet.Body = <T extends ElementType = "div">({ className, children, ...rest }: SheetBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-sheet-body", className)}>
    {children}
  </Tag>
);

Sheet.Footer = <T extends ElementType = "div">({ className, children, ...rest }: SheetFooterProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-sheet-footer", className)}>
    {children}
  </Tag>
);
