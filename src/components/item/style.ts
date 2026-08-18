export const itemBaseClassName = `group/item flex w-full cursor-pointer items-center gap-1 rounded-margo-1 border-margo px-3 py-2 text-on-main
text-sm focus-visible:border-primary focus-visible:outline select-none
focus-visible:outline-offset-1 min-h-[2.5rem] hover:border-on-main focus-visible:outline-on-main
origin-center bg-low transition-transform duration-[160ms] ease-out active:scale-[0.98]`;

export const itemSurfaceClassName = `border-transparent text-medium hover:border-on-main hover:text-on-main
hover:shadow-item focus-visible:shadow-item`;

export const itemActiveClassName = "border-primary";

export const itemDisabledClassName = "opacity-40";

export const itemIconClassName = `ml-auto flex size-4 shrink-0 items-center justify-center first:ml-0
[[data-margo-item-slot]+&]:ml-0`;

export const itemLabelClassName = "min-w-0 truncate text-left";
