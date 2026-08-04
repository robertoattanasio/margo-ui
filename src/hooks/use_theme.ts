import { useCallback, useEffect, useState } from "react";

import { themeClient } from "../utils/theme";

import type { Theme } from "../utils/theme";

export const useTheme = (): [Theme, (next: Theme | ((current: Theme) => Theme)) => void] => {
  const [theme, setThemeState] = useState<Theme>(() => themeClient.get());

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    setThemeState(themeClient.get());

    const observer = new MutationObserver(() => {
      setThemeState(themeClient.get());
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const setTheme = useCallback((next: Theme | ((current: Theme) => Theme)) => {
    themeClient.set(typeof next === "function" ? next(themeClient.get()) : next);
  }, []);

  return [theme, setTheme];
};
