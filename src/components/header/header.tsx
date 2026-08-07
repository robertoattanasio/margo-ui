import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import {
  headerBaseClassName,
  headerLeadingClassName,
  headerTitleClassName,
  headerTrailingClassName,
} from "./style.js";

import type { ElementType } from "react";
import type { HeaderLeadingProps, HeaderProps, HeaderTitleProps, HeaderTrailingProps } from "./type.js";

export const Header = <T extends ElementType = "header">({ className, children, ...rest }: HeaderProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "header")} className={cn(headerBaseClassName, className)}>
    {children}
  </Tag>
);

Header.Leading = ({ children, className }: HeaderLeadingProps) => (
  <span data-margo-header-slot={true} className={cn(headerLeadingClassName, className)}>
    {children}
  </span>
);

Header.Title = ({ title, id, className }: HeaderTitleProps) => (
  <span data-margo-header-slot={true} id={id} className={cn(headerTitleClassName, className)}>
    {title}
  </span>
);

Header.Trailing = ({ children, className }: HeaderTrailingProps) => (
  <span data-margo-header-slot={true} className={cn(headerTrailingClassName, className)}>
    {children}
  </span>
);
