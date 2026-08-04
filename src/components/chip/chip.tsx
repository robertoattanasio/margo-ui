import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { chipActiveClassName, chipBaseClassName } from "./style.js";

import type { ElementType } from "react";
import type { TagProps } from "react-renderable";
import type { ChipProps } from "./type.js";

export const Chip = <T extends ElementType = "div">(props: ChipProps<T>) => {
  const { as, active = false, className, children, ...restProps } = props;
  const nativeProps = { as: as ?? "div", ...restProps } as TagProps<T>;

  return (
    <Tag {...nativeProps} className={cn(chipBaseClassName, className, active && chipActiveClassName)}>
      {children}
    </Tag>
  );
};
