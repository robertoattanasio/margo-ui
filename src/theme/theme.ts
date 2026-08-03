export type Theme = "light" | "dark";

type ThemeConstants = {
  readonly LIGHT: Theme;
  readonly DARK: Theme;
};

export const THEME: ThemeConstants = {
  LIGHT: "light",
  DARK: "dark",
};

const get = (): Theme => {
  if (typeof document === "undefined") return THEME.DARK;

  return document.documentElement.classList.contains(THEME.DARK) ? THEME.DARK : THEME.LIGHT;
};

const set = (next: Theme) => {
  if (typeof document === "undefined") return;

  document.documentElement.classList.toggle(THEME.DARK, next === THEME.DARK);
};

const toggle = () => set(get() === THEME.DARK ? THEME.LIGHT : THEME.DARK);

export const themeClient = {
  get,
  set,
  toggle,
};
