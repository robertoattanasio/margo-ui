import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { LabelProps } from "./type.js";

export const Label = <T extends ElementType = "label">({
  disabled = false,
  spaced = false,
  className,
  ...rest
}: LabelProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest, "label")}
    data-margo-disabled={disabled}
    data-margo-spaced={spaced}
    className={join("margo-label", className)}
  />
);
