import { Tag } from "react-renderable";
import { cn } from "../helpers/cn";

import type { ElementType } from "react";
import type { TagProps } from "react-renderable";

export type CardProps<T extends ElementType = "div"> = TagProps<T>;

export const Card = <T extends ElementType = "div">(props: CardProps<T>) => {
  const { as, className, children, ...restProps } = props;
  const nativeProps = { as: as ?? "div", ...restProps } as TagProps<T>;

  return (
    <Tag
      {...nativeProps}
      className={cn(
        "rounded-lg border-2 border-border bg-main p-5 text-on-main",
        `focus:margo-border-gradient-primary focus-visible:outline focus-visible:outline-offset-1
        focus-visible:outline-on-main`,
        className,
      )}
    >
      {children}
    </Tag>
  );
};
