import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { TextAreaProps, TextAreaTextProps } from "./type.js";

export const TextArea = <T extends ElementType = "div">({
  active = false,
  clickable = true,
  className,
  ...rest
}: TextAreaProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest, "div")}
    data-margo-active={active}
    inert={!clickable || undefined}
    className={join("margo-text-area", className)}
  />
);

TextArea.Text = ({ rows = 4, className, ...rest }: TextAreaTextProps) => (
  <textarea {...rest} rows={rows} className={join("margo-text-area-text", className)} />
);
