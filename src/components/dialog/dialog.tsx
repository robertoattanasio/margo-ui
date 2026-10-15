import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { DialogBodyProps, DialogFooterProps, DialogProps } from "./type.js";

export const Dialog = <T extends ElementType = "div">({ className, children, ...rest }: DialogProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-dialog", className)}>
    {children}
  </Tag>
);

Dialog.Body = <T extends ElementType = "div">({ className, children, ...rest }: DialogBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-dialog-body", className)}>
    {children}
  </Tag>
);

Dialog.Footer = <T extends ElementType = "div">({ className, children, ...rest }: DialogFooterProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-dialog-footer", className)}>
    {children}
  </Tag>
);
