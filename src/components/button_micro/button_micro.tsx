import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { buttonMicroActiveClassName, buttonMicroBaseClassName, buttonMicroSurfaceClassName } from "./style.js";

import type { ElementType, MouseEvent } from "react";
import type { ButtonMicroProps } from "./type.js";

export const ButtonMicro = <T extends ElementType = "button">({
  active = false,
  onClickBlur,
  onClick,
  className,
  ...rest
}: ButtonMicroProps<T>) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);
    if (typeof onClickBlur === "function") {
      const target = event.currentTarget;
      onClickBlur(event);
      setTimeout(() => target.blur(), 150);
    }
  };

  return (
    <Tag
      {...Tag.forward<T>(rest, "button")}
      data-margo-active={active}
      onClick={handleClick}
      className={cn(
        buttonMicroBaseClassName,
        active ? buttonMicroActiveClassName : buttonMicroSurfaceClassName,
        className,
      )}
    />
  );
};
