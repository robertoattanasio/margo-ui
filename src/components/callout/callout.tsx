import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { CalloutProps, CalloutTitleProps } from "./type.js";

export const Callout = <T extends ElementType = "aside">({ className, ...rest }: CalloutProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "aside")} className={join("margo-callout", className)} />
);

Callout.Title = ({ children, className }: CalloutTitleProps) => (
  <span className={join("margo-callout-title", className)}>{children}</span>
);
