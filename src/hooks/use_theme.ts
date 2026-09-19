import { useCallback, useSyncExternalStore } from "react";

import { margoTheme } from "../utils/theme/theme.js";

import type { MargoTheme } from "../utils/theme/type.js";

type SetMargoTheme = MargoTheme | ((current: MargoTheme) => MargoTheme);

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

export const useMargoTheme = (): [MargoTheme | undefined, (next: SetMargoTheme) => void] => {
  const theme = useSyncExternalStore<MargoTheme | undefined>(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: SetMargoTheme) => {
    applyTheme(typeof next === "function" ? next(getSnapshot()) : next);
  }, []);

  return [theme, setTheme];
};
