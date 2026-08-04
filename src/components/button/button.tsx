import { Tag } from "react-renderable";

import { Ripple } from "../../hoc/ripple/ripple.js";
import { cn } from "../../utils/cn/cn.js";
import {
  buttonActiveClassName,
  buttonBaseClassName,
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
  active = false,
  open = false,
  blurOnClick = true,
  className,
  onClick,
  ...rest
}: ButtonProps<T>) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);
    if (blurOnClick && event.detail > 0) setTimeout(() => event.currentTarget.blur(), 150);
  };

  return (
    <Ripple>
      <Tag
        {...Tag.forward<T>(rest, "button")}
        data-open={open}
        onClick={handleClick}
        className={cn(
          buttonBaseClassName,
          active ? buttonActiveClassName : buttonSurfaceClassName,
          !clickable && "pointer-events-none",
          className,
        )}
      />
    </Ripple>
  );
};

Button.Icon = ({ icon, className = null }: ButtonIconProps) => (
  <span className={cn(buttonIconClassName, className)}>{icon}</span>
);

Button.Label = ({ label, className = null }: ButtonLabelProps) => (
  <span className={cn(buttonLabelClassName, className)}>{label}</span>
);

Button.IconLabel = ({
  icon,
  label,
  gap = "0.5rem",
  reverse = false,
  side = "end",
  className = null,
}: ButtonIconLabelProps) => (
  <span
    style={{ "--button-gap": gap } as CSSProperties}
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
