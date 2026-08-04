import { Tag } from "../../../react-renderable";
import { cn } from "../utils/cn";

import type { ElementType } from "react";
import type { TagProps } from "../../../react-renderable";

export type ChipProps<T extends ElementType = "div"> = TagProps<T> & {
  active?: boolean;
};

export const Chip = <T extends ElementType = "div">(props: ChipProps<T>) => {
  const { as, active = false, className, children, ...restProps } = props;
  const nativeProps = { as: as ?? "div", ...restProps } as TagProps<T>;

  return (
    <Tag
      {...nativeProps}
      className={cn(
        "bg-secondary px-3 py-0.5 whitespace-nowrap lowercase flex-none leading-none rounded-md text-mc",
        className,
        active && "bg-on-main text-main",
      )}
    >
      {children}
    </Tag>
  );
};
