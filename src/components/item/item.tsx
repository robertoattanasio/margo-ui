import { MdChevronRight } from "react-icons/md";

import { cn } from "../../utils/cn/cn.js";
import { ItemClient } from "./item_client.js";
import { itemIconClassName, itemLabelClassName } from "./style.js";

import type { ElementType } from "react";
import type { ItemIconProps, ItemLabelProps, ItemProps } from "./type.js";

export const Item = <T extends ElementType = "button">(props: ItemProps<T>) => <ItemClient<T> {...props} />;

Item.Icon = ({ children = <MdChevronRight className="text-md translate-x-1" />, className }: ItemIconProps) => (
  <span data-margo-item-slot={true} className={cn(itemIconClassName, className)}>
    {children}
  </span>
);

Item.Label = ({ children, className }: ItemLabelProps) => (
  <span className={cn(itemLabelClassName, className)}>{children}</span>
);
