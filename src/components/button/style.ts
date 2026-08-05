export const buttonBaseClassName = `group/button flex h-8 w-fit shrink-0 items-center px-2 rounded-lg border-2 text-on-main
hover:border-on-main hover:text-on-main focus-visible:margo-border-gradient-primary
focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-on-main shadow-button`;

export const buttonSurfaceClassName = "border-border bg-main";

export const buttonActiveClassName = "margo-border-gradient-primary";

export const buttonIconClassName =
  "relative z-10 flex size-4 min-w-0 shrink-0 items-center justify-center [direction:ltr]";

export const buttonLabelClassName =
  "relative z-10 flex items-center text-sm whitespace-nowrap lowercase [direction:ltr] px-0.5";

export const buttonGridClassName =
  "grid items-center gap-0 transition-[grid-template-columns,gap] duration-[180ms] ease-in-out";

export const buttonGridForwardClassName = `grid-cols-[1rem_0fr] group-hover/button:grid-cols-[1rem_1fr] group-hover/button:gap-(--button-gap)
group-focus-visible/button:grid-cols-[1rem_1fr] group-focus-visible/button:gap-(--button-gap)
group-data-[open=true]/button:grid-cols-[1rem_1fr] group-data-[open=true]/button:gap-(--button-gap)`;

export const buttonGridReverseClassName = `grid-cols-[auto_0rem] group-hover/button:grid-cols-[auto_1rem] group-hover/button:gap-(--button-gap)
group-focus-visible/button:grid-cols-[auto_1rem] group-focus-visible/button:gap-(--button-gap)
group-data-[open=true]/button:grid-cols-[auto_1rem] group-data-[open=true]/button:gap-(--button-gap)`;

export const buttonSlotClassName = `min-w-0 overflow-hidden opacity-0 transition-opacity duration-[180ms] ease-in
group-hover/button:opacity-100 group-focus-visible/button:opacity-100 group-data-[open=true]/button:opacity-100`;
