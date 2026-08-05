import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type SpinnerOwnProps = {
  label?: string;
};

export type SpinnerProps<T extends ElementType = "span"> = Omit<TagProps<T, SpinnerOwnProps>, "aria-label">;
