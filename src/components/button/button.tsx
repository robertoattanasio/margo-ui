import { join } from "../../utils/join/join.js";
import { ButtonClient } from "./button_client.js";

import type { CSSProperties, ElementType } from "react";
import type { ButtonIconLabelProps, ButtonIconProps, ButtonLabelProps, ButtonProps } from "./type.js";

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => <ButtonClient<T> {...props} />;

Button.Icon = ({ children, className }: ButtonIconProps) => (
  <span className={join("margo-button-icon", className)}>{children}</span>
);

Button.Label = ({ children, className }: ButtonLabelProps) => (
  <span className={join("margo-button-label", className)}>{children}</span>
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
    data-margo-reverse={reverse}
    data-margo-direction={direction}
    className={join("margo-button-icon-label", className)}
  >
    {reverse ? label : icon}
    <span className="margo-button-slot">{reverse ? icon : label}</span>
  </span>
);
