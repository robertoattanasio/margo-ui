import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { CodeProps } from "./type.js";

export const Code = <T extends ElementType = "code">({
  filled = false,
  className,
  children,
  ...rest
}: CodeProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "code")} data-margo-filled={filled} className={join("margo-code", className)}>
    {children}
  </Tag>
);
