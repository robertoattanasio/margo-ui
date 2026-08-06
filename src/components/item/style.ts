export const itemBaseClassName = `group/item flex w-full items-center gap-1 rounded-lg border-2 px-3 py-2 text-on-main
text-sm focus-visible:margo-border-gradient-primary focus-visible:outline
focus-visible:outline-offset-1 focus-visible:outline-on-main`;

export const itemSurfaceClassName = `border-transparent text-medium hover:border-border hover:text-on-main
hover:shadow-item focus-visible:shadow-item`;

export const itemActiveClassName = "margo-border-gradient-primary text-on-main shadow-item";

export const itemIconClassName = `ml-auto flex size-4 shrink-0 items-center justify-center
[[data-margo-item-slot]+&]:ml-0`;

export const itemLabelClassName = "min-w-0 truncate text-left";
