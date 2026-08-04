import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { cardBaseClassName, cardFocusClassName } from "./style.js";

import type { ElementType } from "react";
import type { CardProps } from "./type.js";

export const Card = <T extends ElementType = "div">({ className, children, ...rest }: CardProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(cardBaseClassName, cardFocusClassName, className)}>
    {children}
  </Tag>
);
