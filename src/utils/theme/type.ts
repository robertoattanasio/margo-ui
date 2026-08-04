export type MargoTheme = "light" | "dark";

export type MargoThemeConstants = {
  readonly LIGHT: MargoTheme;
  readonly DARK: MargoTheme;
};

export type MargoThemeClient = {
  get: () => MargoTheme;
  set: (next: MargoTheme) => void;
  toggle: () => void;
};
