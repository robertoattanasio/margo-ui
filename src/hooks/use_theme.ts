import { useCallback, useEffect, useState } from "react";

import { margoThemeClient } from "../utils/theme/theme.js";

import type { MargoTheme } from "../utils/theme/type.js";

export const useMargoTheme = (): [MargoTheme, (next: MargoTheme | ((current: MargoTheme) => MargoTheme)) => void] => {
  const [theme, setThemeState] = useState<MargoTheme>(() => margoThemeClient.get());

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    setThemeState(margoThemeClient.get());

    const observer = new MutationObserver(() => {
      setThemeState(margoThemeClient.get());
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const setTheme = useCallback((next: MargoTheme | ((current: MargoTheme) => MargoTheme)) => {
    margoThemeClient.set(typeof next === "function" ? next(margoThemeClient.get()) : next);
  }, []);

  return [theme, setTheme];
};
