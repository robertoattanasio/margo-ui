import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type ProgressBarMode = "determinate" | "indeterminate";

export type ProgressBarOwnProps = {
  animate?: boolean;
  fill?: string;
  mode?: ProgressBarMode;
  value?: number;
};

export type ProgressBarProps<T extends ElementType = "div"> = TagProps<T, ProgressBarOwnProps>;
