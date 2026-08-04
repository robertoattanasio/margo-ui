import type { ElementType } from "react";
import type { TagProps } from "react-renderable";

export type CardProps<T extends ElementType = "div"> = TagProps<T>;
