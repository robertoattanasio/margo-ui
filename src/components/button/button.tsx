import { cn } from "../../utils/cn/cn.js";
import { ButtonClient } from "./button_client.js";
import {
  buttonGridClassName,
  buttonGridForwardClassName,
  buttonGridReverseClassName,
  buttonIconClassName,
  buttonLabelClassName,
  buttonSlotClassName,
} from "./style.js";

import type { CSSProperties, ElementType } from "react";
import type { ButtonIconLabelProps, ButtonIconProps, ButtonLabelProps, ButtonProps } from "./type.js";

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => <ButtonClient<T> {...props} />;

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
