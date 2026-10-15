import { join } from "../../utils/join/join.js";

import type { ToggleProps } from "./type.js";

export const Toggle = ({ className, ...rest }: ToggleProps) => (
  <input {...rest} type="checkbox" role="switch" className={join("margo-toggle", className)} />
);
