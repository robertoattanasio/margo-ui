export const inputBaseClassName = `group/input flex w-full cursor-text items-center gap-1 rounded-lg border-2 px-3 py-2 text-on-main
text-sm select-none min-h-[2.5rem] bg-low
border-transparent text-medium hover:border-on-main hover:text-on-main hover:shadow-input
focus-within:border-primary focus-within:text-on-main
has-[input:disabled]:pointer-events-none has-[input:disabled]:cursor-auto has-[input:disabled]:opacity-40`;

export const inputActiveClassName = "border-primary";

export const inputIconClassName = `ml-auto flex size-4 flex-none shrink-0 items-center justify-center first:ml-0
[[data-margo-input-slot]+&]:ml-0`;

export const inputTextClassName = `min-w-0 flex-1 truncate border-none bg-transparent text-left text-on-main outline-none
placeholder:text-medium disabled:cursor-auto`;
