import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";
import { PopoverClient } from "./popover_client.js";

import type { ElementType } from "react";
import type { PopoverAnchorProps, PopoverBodyProps, PopoverProps } from "./type.js";

export const Popover = (props: PopoverProps) => <PopoverClient {...props} />;

Popover.Anchor = <T extends ElementType = "div">({ className, children, ...rest }: PopoverAnchorProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-popover-anchor", className)}>
    {children}
  </Tag>
);

Popover.Body = <T extends ElementType = "div">({ className, children, ...rest }: PopoverBodyProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} className={join("margo-popover-body", className)}>
    {children}
  </Tag>
);
