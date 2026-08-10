import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { spinnerBaseClassName, spinnerIconClassName } from "./style.js";

import type { ElementType } from "react";
import type { SpinnerProps } from "./type.js";

export const Spinner = <T extends ElementType = "span">({ className, label = "Loading", ...rest }: SpinnerProps<T>) => (
  <Tag
    aria-label={label}
    {...Tag.forward<T>(rest, "span")}
    role="status"
    className={cn(spinnerBaseClassName, className)}
  >
    <svg viewBox="0 0 24 24" aria-hidden className={spinnerIconClassName}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M12 3a9 9 0 0 1 9 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  </Tag>
);
