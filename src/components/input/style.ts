export const inputBaseClassName = `group/input flex h-10 w-full cursor-text items-center rounded-lg border-2 text-on-main
text-sm select-none bg-low
border-transparent text-medium hover:border-on-main hover:text-on-main hover:shadow-item
focus-within:border-primary focus-within:text-on-main
has-[input:disabled]:pointer-events-none has-[input:disabled]:cursor-auto has-[input:disabled]:opacity-40`;

export const inputActiveClassName = "border-primary";

export const inputIconClassName = `ml-auto flex h-full w-8 flex-none shrink-0 items-center justify-center pr-3 pl-1
first:ml-0 first:pr-1 first:pl-3
[[data-margo-input-slot]+&]:ml-0`;

export const inputTextClassName = `h-full min-w-0 flex-1 truncate border-none bg-transparent px-3 text-left text-on-main
outline-none placeholder:text-medium disabled:cursor-auto
[[data-margo-input-slot]+&]:pl-0 [&:has(+[data-margo-input-slot])]:pr-0`;
