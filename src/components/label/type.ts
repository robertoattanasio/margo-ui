import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type LabelProps<T extends ElementType = "span"> = TagProps<T>;
