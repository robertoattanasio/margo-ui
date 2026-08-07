import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { dialogBaseClassName, dialogBodyClassName, dialogFooterClassName } from "./style.js";

import type { ElementType } from "react";
import type { DialogBodyProps, DialogFooterProps, DialogProps } from "./type.js";

export const Dialog = <T extends ElementType = "div">({ className, children, ...rest }: DialogProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(dialogBaseClassName, className)}>
    {children}
  </Tag>
);

Dialog.Body = <T extends ElementType = "div">({ className, children, ...rest }: DialogBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(dialogBodyClassName, className)}>
    {children}
  </Tag>
);

Dialog.Footer = <T extends ElementType = "div">({ className, children, ...rest }: DialogFooterProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(dialogFooterClassName, className)}>
    {children}
  </Tag>
);
