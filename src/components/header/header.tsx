import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { HeaderLeadingProps, HeaderProps, HeaderTitleProps, HeaderTrailingProps } from "./type.js";

export const Header = <T extends ElementType = "header">({ className, children, ...rest }: HeaderProps<T>) => (
  <Tag {...Tag.forward<T>(rest, "header")} className={join("margo-header", className)}>
    {children}
  </Tag>
);

Header.Leading = ({ children, className }: HeaderLeadingProps) => (
  <span data-margo-header-slot={true} className={join("margo-header-leading", className)}>
    {children}
  </span>
);

Header.Title = ({ children, id, className }: HeaderTitleProps) => (
  <span data-margo-header-slot={true} id={id} className={join("margo-header-title", className)}>
    {children}
  </span>
);

Header.Trailing = ({ children, className }: HeaderTrailingProps) => (
  <span data-margo-header-slot={true} className={join("margo-header-trailing", className)}>
    {children}
  </span>
);
