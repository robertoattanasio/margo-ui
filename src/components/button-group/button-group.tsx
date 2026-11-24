import type { ElementType } from "react";
import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";
import { ButtonGroupItemClient } from "./button-group-client.js";
import type { ButtonGroupItemProps, ButtonGroupProps } from "./type.js";

export const ButtonGroup = <T extends ElementType = "div">({ className, children, ...rest }: ButtonGroupProps<T>) => (
  <Tag {...Tag.forward<T>(rest)} role="group" className={join("margo-button-group", className)}>
    {children}
  </Tag>
);

ButtonGroup.Item = <T extends ElementType = "button">(props: ButtonGroupItemProps<T>) => (
  <ButtonGroupItemClient<T> {...props} />
);
