import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { calloutBaseClassName, calloutTitleClassName } from "./style.js";

import type { ElementType } from "react";
import type { CalloutProps, CalloutTitleProps } from "./type.js";

export const Callout = <T extends ElementType = "aside">({ className, ...rest }: CalloutProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "aside")} className={cn(calloutBaseClassName, className)} />
);

Callout.Title = ({ children, className }: CalloutTitleProps) => (
  <span className={cn(calloutTitleClassName, className)}>{children}</span>
);
