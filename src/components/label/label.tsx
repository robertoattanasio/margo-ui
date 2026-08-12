import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { labelBaseClassName, labelDisabledClassName } from "./style.js";

import type { ElementType } from "react";
import type { LabelProps } from "./type.js";

export const Label = <T extends ElementType = "label">({ disabled = false, className, ...rest }: LabelProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest, "label")}
    data-margo-disabled={disabled}
    className={cn(labelBaseClassName, disabled && labelDisabledClassName, className)}
  />
);
