import { Tag } from "react-renderable";
import { cn } from "../helpers/cn";
import { Ripple } from "./ripple";

import type { CSSProperties, ElementType, ReactNode } from "react";
import type { TagProps } from "react-renderable";

const CLASSNAME_BASE = `group/button flex h-8 w-fit shrink-0 items-center px-2 rounded-lg border-2 text-on-main
hover:border-on-main hover:text-on-main
focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-on-main`;
const CLASSNAME_SURFACE = "border-border bg-main";
const CLASSNAME_ICON = "relative z-10 flex size-4 min-w-0 shrink-0 items-center justify-center [direction:ltr]";
const CLASSNAME_LABEL = "relative z-10 flex items-center text-sm whitespace-nowrap lowercase [direction:ltr] px-0.5";
const CLASSNAME_GRID = "grid items-center gap-0 transition-[grid-template-columns,gap] duration-[180ms] ease-in-out";
const CLASSNAME_SLOT = `min-w-0 overflow-hidden opacity-0 transition-opacity duration-[180ms] ease-in
group-hover/button:opacity-100 group-focus-visible/button:opacity-100 group-data-[open=true]/button:opacity-100`;

export type ButtonProps<T extends ElementType = "button"> = TagProps<T> & {
  clickable?: boolean;
  active?: boolean;
  open?: boolean;
};

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => {
  const { as, clickable = true, active = false, open = false, ...restProps } = props;
  const nativeProps = { as: as ?? "button", ...restProps } as TagProps<T>;

  return (
    <Ripple>
      <Tag
        {...nativeProps}
        data-open={open}
        className={cn(
          CLASSNAME_BASE,
          active ? "margo-border-gradient-primary" : CLASSNAME_SURFACE,
          !clickable && "pointer-events-none",
          props.className,
        )}
      />
    </Ripple>
  );
};

Button.Icon = ({ icon, className = null }: { icon: ReactNode; className?: string | null }) => (
  <span className={cn(CLASSNAME_ICON, className)}>{icon}</span>
);

Button.Label = ({ label, className = null }: { label: string; className?: string | null }) => (
  <span className={cn(CLASSNAME_LABEL, className)}>{label}</span>
);

Button.IconLabel = ({
  icon,
  label,
  gap = "0.5rem",
  reverse = false,
  side = "end",
  className = null,
}: {
  icon: ReactNode;
  label: ReactNode;
  gap?: string;
  reverse?: boolean;
  side?: "start" | "end";
  className?: string | null;
}) => {
  return (
    <span
      style={{ "--button-gap": gap } as CSSProperties}
      className={cn(
        CLASSNAME_GRID,
        side === "start" && "[direction:rtl]",
        !reverse &&
          `grid-cols-[1rem_0fr] group-hover/button:grid-cols-[1rem_1fr] group-hover/button:gap-(--button-gap)
          group-focus-visible/button:grid-cols-[1rem_1fr] group-focus-visible/button:gap-(--button-gap)
          group-data-[open=true]/button:grid-cols-[1rem_1fr] group-data-[open=true]/button:gap-(--button-gap)`,
        reverse &&
          `grid-cols-[auto_0rem] group-hover/button:grid-cols-[auto_1rem] group-hover/button:gap-(--button-gap)
          group-focus-visible/button:grid-cols-[auto_1rem] group-focus-visible/button:gap-(--button-gap)
          group-data-[open=true]/button:grid-cols-[auto_1rem] group-data-[open=true]/button:gap-(--button-gap)`,
        className,
      )}
    >
      {reverse ? label : icon}
      <span className={CLASSNAME_SLOT}>{reverse ? icon : label}</span>
    </span>
  );
};
