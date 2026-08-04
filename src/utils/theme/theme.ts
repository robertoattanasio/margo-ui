import type { MargoTheme, MargoThemeClient, MargoThemeConstants } from "./type.js";

export const margoTheme: MargoThemeConstants = {
  LIGHT: "light",
  DARK: "dark",
};

const get = (): MargoTheme => {
  if (typeof document === "undefined") return margoTheme.DARK;

  return document.documentElement.classList.contains(margoTheme.DARK) ? margoTheme.DARK : margoTheme.LIGHT;
};

const set = (next: MargoTheme) => {
  if (typeof document === "undefined") return;

  document.documentElement.classList.toggle(margoTheme.DARK, next === margoTheme.DARK);
};

const toggle = () => set(get() === margoTheme.DARK ? margoTheme.LIGHT : margoTheme.DARK);

export const margoThemeClient: MargoThemeClient = {
  get,
  set,
  toggle,
};
