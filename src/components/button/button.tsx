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
  buttonNotClickableClassName,
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
  onClickBlur,
  className,
  onClick,
  ...rest
}: ButtonProps<T>) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onClick?.(event);
    if (typeof onClickBlur === "function") {
      const target = event.currentTarget;
      onClickBlur(event);
      setTimeout(() => target.blur(), 150);
    }
  };

  return (
    <Ripple disabled={disabled || !clickable}>
      <Tag
        {...Tag.forward<T>(rest, "button")}
        data-margo-open={open}
        data-margo-disabled={disabled}
        aria-disabled={disabled || undefined}
        tabIndex={disabled || !clickable ? -1 : undefined}
        onClick={handleClick}
        className={cn(
          buttonBaseClassName,
          active ? buttonActiveClassName : buttonSurfaceClassName,
          !clickable && buttonNotClickableClassName,
          disabled && buttonDisabledClassName,
          className,
        )}
      />
    </Ripple>
  );
};

Button.Icon = ({ icon, className }: ButtonIconProps) => (
  <span className={cn(buttonIconClassName, className)}>{icon}</span>
);

Button.Label = ({ label, className }: ButtonLabelProps) => (
  <span className={cn(buttonLabelClassName, className)}>{label}</span>
);

Button.IconLabel = ({
  icon,
  label,
  gap = "0.5rem",
  reverse = false,
  side = "end",
  className,
}: ButtonIconLabelProps) => (
  <span
    style={{ "--margo-button-gap": gap } as CSSProperties}
    className={cn(
      buttonGridClassName,
      side === "start" && "[direction:rtl]",
      reverse ? buttonGridReverseClassName : buttonGridForwardClassName,
      className,
    )}
  >
    {reverse ? label : icon}
    <span className={buttonSlotClassName}>{reverse ? icon : label}</span>
  </span>
);
