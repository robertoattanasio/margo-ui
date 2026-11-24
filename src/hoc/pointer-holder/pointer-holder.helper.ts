export const readKey = (target: EventTarget | null, attribute: string) => {
  if (!(target instanceof Element)) return null;
  const holder = target.closest(`[${attribute}]`);
  return holder?.getAttribute(attribute) ?? null;
};
