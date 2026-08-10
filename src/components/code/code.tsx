import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { codeBaseClassName, codeFilledClassName } from "./style.js";

import type { ElementType } from "react";
import type { CodeProps } from "./type.js";

export const Code = <T extends ElementType = "code">({ filled = false, className, children, ...rest }: CodeProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest, "code")}
    className={cn(codeBaseClassName, filled && codeFilledClassName, className)}
  >
    {children}
  </Tag>
);
