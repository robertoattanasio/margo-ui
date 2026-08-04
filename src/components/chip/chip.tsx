import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { chipActiveClassName, chipBaseClassName } from "./style.js";

import type { ElementType } from "react";
import type { ChipProps } from "./type.js";

export const Chip = <T extends ElementType = "div">({ active = false, className, children, ...rest }: ChipProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(chipBaseClassName, className, active && chipActiveClassName)}>
    {children}
  </Tag>
);
