import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { ElementType } from "react";
import type { ButtonMicroProps } from "./type.js";

export const ButtonMicro = <T extends ElementType = "button">({
  active = false,
  className,
  ...rest
}: ButtonMicroProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest, "button")}
    data-margo-active={active}
    className={join("margo-button-micro", className)}
  />
);
