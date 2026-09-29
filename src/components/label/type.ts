import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type LabelOwnProps = {
  disabled?: boolean;
  spaced?: boolean;
};

export type LabelProps<T extends ElementType = "label"> = TagProps<T, LabelOwnProps>;
