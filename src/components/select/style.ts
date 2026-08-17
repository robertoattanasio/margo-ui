export const selectBaseClassName = `group/select relative flex h-10 w-full items-center rounded-lg
border-2 border-transparent bg-low text-sm text-medium select-none
hover:border-on-main hover:text-on-main hover:shadow-item
focus-within:border-primary focus-within:text-on-main
has-[select:disabled]:pointer-events-none has-[select:disabled]:opacity-40`;

export const selectActiveClassName = "border-primary";

export const selectControlClassName = `h-full min-w-0 flex-1 cursor-pointer appearance-none truncate rounded-lg
bg-transparent pl-3 text-left text-on-main outline-none disabled:cursor-auto
has-[option[value='']:checked]:text-medium
[&>option]:bg-main [&>option]:text-on-main
[&>option:checked]:bg-primary-darken [&>option:checked]:text-on-main`;

export const selectIconClassName = `pointer-events-none flex h-full w-8 flex-none items-center justify-center pr-3 pl-1`;
