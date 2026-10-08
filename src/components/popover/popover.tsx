import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { PopoverClient } from "./popover_client.js";
import { popoverAnchorClassName, popoverBodyClassName } from "./style.js";

import type { ElementType } from "react";
import type { PopoverAnchorProps, PopoverBodyProps, PopoverProps } from "./type.js";

export const Popover = (props: PopoverProps) => <PopoverClient {...props} />;

Popover.Anchor = <T extends ElementType = "div">({ className, children, ...rest }: PopoverAnchorProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(popoverAnchorClassName, className)}>
    {children}
  </Tag>
);

Popover.Body = <T extends ElementType = "div">({ className, children, ...rest }: PopoverBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={cn(popoverBodyClassName, className)}>
    {children}
  </Tag>
);
