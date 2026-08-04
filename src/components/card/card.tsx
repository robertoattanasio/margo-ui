import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { cardBaseClassName, cardFocusClassName } from "./style.js";

import type { ElementType } from "react";
import type { TagProps } from "react-renderable";
import type { CardProps } from "./type.js";

export const Card = <T extends ElementType = "div">(props: CardProps<T>) => {
  const { as, className, children, ...restProps } = props;
  const nativeProps = { as: as ?? "div", ...restProps } as TagProps<T>;

  return (
    <Tag {...nativeProps} className={cn(cardBaseClassName, cardFocusClassName, className)}>
      {children}
    </Tag>
  );
};
