export const buttonBaseClassName = `group/button flex h-8 w-fit shrink-0 items-center px-2 rounded-margo-1 border-margo text-on-main
hover:border-on-main hover:text-on-main focus-visible:border-primary
focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-on-main
select-none origin-center transition-transform duration-[160ms] ease-out active:scale-[0.95] bg-main`;

export const buttonSurfaceClassName = "border-border";

export const buttonActiveClassName = "border-primary shadow-button";

export const buttonDisabledClassName = "opacity-40";

export const buttonIconClassName =
  "relative z-10 flex size-4 min-w-0 shrink-0 items-center justify-center [direction:ltr]";

export const buttonLabelClassName =
  "relative z-10 flex items-center text-sm whitespace-nowrap margo-text-box-trim lowercase [direction:ltr] px-0.5";

export const buttonGridClassName =
  "grid items-center gap-0 whitespace-nowrap transition-[grid-template-columns,gap] duration-[180ms] ease-in-out";

export const buttonGridForwardClassName = `grid-cols-[1rem_0fr] group-hover/button:grid-cols-[1rem_1fr] group-hover/button:gap-(--margo-button-gap)
group-focus-visible/button:grid-cols-[1rem_1fr] group-focus-visible/button:gap-(--margo-button-gap)
group-data-[margo-open=true]/button:grid-cols-[1rem_1fr] group-data-[margo-open=true]/button:gap-(--margo-button-gap)`;

export const buttonGridReverseClassName = `grid-cols-[auto_0rem] group-hover/button:grid-cols-[auto_1rem] group-hover/button:gap-(--margo-button-gap)
group-focus-visible/button:grid-cols-[auto_1rem] group-focus-visible/button:gap-(--margo-button-gap)
group-data-[margo-open=true]/button:grid-cols-[auto_1rem] group-data-[margo-open=true]/button:gap-(--margo-button-gap)`;

export const buttonSlotClassName = `min-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-opacity duration-[180ms] ease-in
group-hover/button:opacity-100 group-focus-visible/button:opacity-100 group-data-[margo-open=true]/button:opacity-100`;
