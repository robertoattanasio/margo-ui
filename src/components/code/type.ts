import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type CodeOwnProps = {
  filled?: boolean;
};

export type CodeProps<T extends ElementType = "code"> = TagProps<T, CodeOwnProps>;
