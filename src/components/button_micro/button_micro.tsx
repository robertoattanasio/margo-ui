import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { buttonMicroActiveClassName, buttonMicroBaseClassName, buttonMicroSurfaceClassName } from "./style.js";

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
    className={cn(
      buttonMicroBaseClassName,
      active ? buttonMicroActiveClassName : buttonMicroSurfaceClassName,
      className,
    )}
  />
);
