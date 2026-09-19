import { useSyncExternalStore } from "react";

import { margoTheme } from "../utils/theme/theme.js";

import type { MargoTheme } from "../utils/theme/type.js";

type UseMargoTheme = {
  theme: MargoTheme | undefined;
  set: (next: MargoTheme) => void;
  toggle: () => void;
};

const getSnapshot = (): MargoTheme =>
  document.documentElement.classList.contains(margoTheme.DARK) ? margoTheme.DARK : margoTheme.LIGHT;

const getServerSnapshot = () => undefined;

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  return () => observer.disconnect();
};

const applyTheme = (next: MargoTheme) => {
  const { classList } = document.documentElement;

  classList.remove(margoTheme.LIGHT, margoTheme.DARK);
  classList.add(next);
};

const toggle = () => applyTheme(getSnapshot() === margoTheme.DARK ? margoTheme.LIGHT : margoTheme.DARK);

export const useMargoTheme = (): UseMargoTheme => {
  const theme = useSyncExternalStore<MargoTheme | undefined>(subscribe, getSnapshot, getServerSnapshot);

  return { theme, set: applyTheme, toggle };
};
