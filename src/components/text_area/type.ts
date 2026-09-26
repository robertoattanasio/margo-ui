import type { TagProps } from "react-renderable";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export type TextAreaOwnProps = {
  active?: boolean;
  clickable?: boolean;
};

export type TextAreaProps<T extends ElementType = "div"> = TagProps<T, TextAreaOwnProps>;

export type TextAreaTextProps = ComponentPropsWithoutRef<"textarea">;
