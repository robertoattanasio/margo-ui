import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type CardProps<T extends ElementType = "div"> = TagProps<T>;
