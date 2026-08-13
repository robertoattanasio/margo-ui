import { cn } from "../../utils/cn/cn.js";
import { toggleBaseClassName } from "./style.js";

import type { ToggleProps } from "./type.js";

import "./toggle.css";

export const Toggle = ({ className, ...rest }: ToggleProps) => (
  <input {...rest} type="checkbox" role="switch" className={cn(toggleBaseClassName, className)} />
);
