import { MdSearch } from "react-icons/md";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { inputActiveClassName, inputBaseClassName, inputIconClassName, inputTextClassName } from "./style.js";

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
    className={cn(inputBaseClassName, active && inputActiveClassName, className)}
  />
);

Input.Icon = ({ icon = <MdSearch className="text-md" />, className }: InputIconProps) => (
  <span data-margo-input-slot={true} className={cn(inputIconClassName, className)}>
    {icon}
  </span>
);

Input.Text = ({ className, ...rest }: InputTextProps) => (
  <input {...rest} className={cn(inputTextClassName, className)} />
);
