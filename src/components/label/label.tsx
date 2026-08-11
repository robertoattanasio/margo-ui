import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { labelBaseClassName } from "./style.js";

import type { ElementType } from "react";
import type { LabelProps } from "./type.js";

export const Label = <T extends ElementType = "label">({ className, ...rest }: LabelProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "label")} className={cn(labelBaseClassName, className)} />
);
