export const textAreaBaseClassName = `group/text-area flex w-full cursor-text items-stretch rounded-margo-base
border-margo border-transparent bg-low text-sm text-medium
hover:border-on-main hover:text-on-main hover:shadow-item
focus-within:border-primary focus-within:text-on-main
has-[textarea:disabled]:pointer-events-none has-[textarea:disabled]:cursor-auto has-[textarea:disabled]:opacity-40`;

export const textAreaActiveClassName = "border-primary";

export const textAreaTextClassName = `min-w-0 flex-1 resize-none border-none bg-transparent px-3 py-2 text-left
text-on-main outline-none placeholder:text-medium disabled:cursor-auto`;
