import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { ChipProps } from "./type.js";

export const Chip = <T extends ElementType = "div">({ active = false, className, children, ...rest }: ChipProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} data-margo-active={active} className={join("margo-chip", className)}>
    {children}
  </Tag>
);
