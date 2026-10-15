import { MdChevronRight } from "react-icons/md";

import { join } from "../../utils/join/join.js";
import { ItemClient } from "./item_client.js";

import type { ElementType } from "react";
import type { ItemIconProps, ItemLabelProps, ItemProps } from "./type.js";

export const Item = <T extends ElementType = "button">(props: ItemProps<T>) => <ItemClient<T> {...props} />;

Item.Icon = ({ children = <MdChevronRight className="margo-item-chevron" />, className }: ItemIconProps) => (
  <span data-margo-item-slot={true} className={join("margo-item-icon", className)}>
    {children}
  </span>
);

Item.Label = ({ children, className }: ItemLabelProps) => (
  <span className={join("margo-item-label", className)}>{children}</span>
);
