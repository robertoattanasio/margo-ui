import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { CardProps } from "./type.js";

export const Card = <T extends ElementType = "div">({ className, children, ...rest }: CardProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-card", className)}>
    {children}
  </Tag>
);
