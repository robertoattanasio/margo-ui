export const join = (...values: (string | false | null | undefined)[]) => values.filter(Boolean).join(" ");
