import { Tag } from "react-renderable";

import { Ripple } from "../../hoc/ripple/ripple.js";
import { cn } from "../../utils/cn/cn.js";
import {
  buttonActiveClassName,
  buttonBaseClassName,
  buttonDisabledClassName,
  buttonGridClassName,
  buttonGridForwardClassName,
  buttonGridReverseClassName,
  buttonIconClassName,
  buttonLabelClassName,
  buttonSlotClassName,
  buttonSurfaceClassName,
} from "./style.js";

import type { CSSProperties, ElementType, MouseEvent } from "react";
import type { ButtonIconLabelProps, ButtonIconProps, ButtonLabelProps, ButtonProps } from "./type.js";

export const Button = <T extends ElementType = "button">({
  clickable = true,
  disabled = false,
  active = false,
  open = false,
  className,
  onClick,
  ...rest
}: ButtonProps<T>) => {
  const isNativeButton = (rest.as ?? "button") === "button";

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return event.preventDefault();
    onClick?.(event);
  };

  return (
    <Ripple disabled={disabled || !clickable}>
      <Tag
        {...Tag.forward<T>(rest, "button")}
        data-margo-open={open}
        data-margo-disabled={disabled}
        data-margo-active={active}
        disabled={(isNativeButton && disabled) || undefined}
        aria-disabled={(!isNativeButton && disabled) || undefined}
        inert={!clickable || undefined}
        onClick={handleClick}
        className={cn(
          buttonBaseClassName,
          active ? buttonActiveClassName : buttonSurfaceClassName,
          disabled && buttonDisabledClassName,
          className,
        )}
      />
    </Ripple>
  );
};

Button.Icon = ({ children, className }: ButtonIconProps) => (
  <span className={cn(buttonIconClassName, className)}>{children}</span>
);

Button.Label = ({ children, className }: ButtonLabelProps) => (
  <span className={cn(buttonLabelClassName, className)}>{children}</span>
);

Button.IconLabel = ({
  icon,
  label,
  gap = "0.5rem",
  reverse = false,
  direction = "right",
  className,
}: ButtonIconLabelProps) => (
  <span
    style={{ "--margo-button-gap": gap } as CSSProperties}
    className={cn(
      buttonGridClassName,
      direction === "left" && "[direction:rtl]",
      reverse ? buttonGridReverseClassName : buttonGridForwardClassName,
      className,
    )}
  >
    {reverse ? label : icon}
    <span className={buttonSlotClassName}>{reverse ? icon : label}</span>
  </span>
);
