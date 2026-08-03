import { Tag } from "react-renderable";
import { cn } from "../helpers/cn";
import { useGlowBorder } from "../hooks/use_glow_border";

import type { ElementType, PointerEvent } from "react";
import type { TagProps } from "react-renderable";

export type CardProps<T extends ElementType = "div"> = TagProps<T>;

export const Card = <T extends ElementType = "div">(props: CardProps<T>) => {
  const { as, className, children, onPointerMove, ...restProps } = props;
  const nativeProps = { as: as ?? "div", ...restProps } as TagProps<T>;
  const glowBorder = useGlowBorder({ position: "all" });

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    glowBorder.onPointerMove(e);
    if (typeof onPointerMove === "function") (onPointerMove as (e: PointerEvent<HTMLElement>) => void)(e);
  };

  return (
    <Tag
      {...nativeProps}
      onPointerMove={handlePointerMove}
      className={cn(
        glowBorder.className,
        "rounded-lg border-2 border-border bg-main p-5 text-on-main",
        `focus:border-primary-gradient focus-visible:outline focus-visible:outline-offset-1
        focus-visible:outline-on-main`,
        className,
      )}
    >
      {children}
    </Tag>
  );
};
