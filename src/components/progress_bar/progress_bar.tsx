import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { progressBarBaseClassName } from "./style.js";

import type { CSSProperties, ElementType } from "react";
import type { ProgressBarProps } from "./type.js";

import "./progress_bar.css";

export const ProgressBar = <T extends ElementType = "div">({
  animate = true,
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
      data-mode={mode}
      data-animate={animate}
      style={{ ...style, "--margo-progress-bar-value": `${progress}%` } as CSSProperties}
      className={cn(progressBarBaseClassName, className)}
    />
  );
};
