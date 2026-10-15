import { Tag } from "react-renderable";

import { join } from "../../utils/join/join.js";

import type { CSSProperties, ElementType } from "react";
import type { ProgressBarProps } from "./type.js";

const progressBarDefaultFill =
  "linear-gradient(to right, var(--margo-color-primary-darken), var(--margo-color-primary))";

export const ProgressBar = <T extends ElementType = "div">({
  animate = true,
  delay,
  fill = progressBarDefaultFill,
  mode = "indeterminate",
  style,
  value = 0,
  className,
  ...rest
}: ProgressBarProps<T>) => {
  const isDeterminate = mode === "determinate";
  const progress = Math.min(100, Math.max(0, value));

  return (
    <Tag
      {...Tag.forward<T>(rest)}
      role="progressbar"
      aria-valuemin={isDeterminate ? 0 : undefined}
      aria-valuemax={isDeterminate ? 100 : undefined}
      aria-valuenow={isDeterminate ? progress : undefined}
      data-margo-mode={mode}
      data-margo-animate={animate}
      style={
        {
          ...style,
          "--margo-progress-bar-fill": fill,
          "--margo-progress-bar-value": `${progress}%`,
          ...(delay != null && {
            "--margo-progress-bar-delay": typeof delay === "number" ? `${delay}ms` : delay,
          }),
        } as CSSProperties
      }
      className={join("margo-progress-bar", className)}
    />
  );
};
