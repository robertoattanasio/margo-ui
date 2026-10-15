import { MdSearch } from "react-icons/md";

import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { InputIconProps, InputProps, InputTextProps } from "./type.js";

export const Input = <T extends ElementType = "div">({
  active = false,
  clickable = true,
  className,
  ...rest
}: InputProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest, "div")}
    data-margo-active={active}
    inert={!clickable || undefined}
    className={join("margo-input", className)}
  />
);

Input.Icon = ({ children = <MdSearch className="margo-input-search-icon" />, className }: InputIconProps) => (
  <span data-margo-input-slot={true} className={join("margo-input-icon", className)}>
    {children}
  </span>
);

Input.Text = ({ className, ...rest }: InputTextProps) => (
  <input {...rest} className={join("margo-input-text", className)} />
);
