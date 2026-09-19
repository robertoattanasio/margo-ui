---
"margo-ui": minor
---

Make `useMargoTheme` the single theme API, driven by the class on `<html>`.

The default theme is no longer passed to the hook: write it on the `<html>` element (`className={margoTheme.DARK}` on the server render) and the hook stays in sync with it. The hook is built on `useSyncExternalStore`, so it re-renders on every class change and is hydration-safe.

**Breaking**

- `useMargoTheme()` no longer takes a `defaultTheme` argument. Remove it from existing calls: `useMargoTheme(THEME_DEFAULT)` → `useMargoTheme()`.
- The returned `theme` is now `MargoTheme | undefined`: it is `undefined` during server render and hydration, then the value found on `<html>`. Handle the `undefined` case, or drive theme-dependent UI with the `dark:` variant instead.
- Removed the `margoThemeClient` export and the `MargoThemeClient` type. Use `useMargoTheme` to read and change the theme.

**Fixed**

- A missing `dark` class is now always read as `light`, matching what the CSS renders, instead of depending on the default passed to the hook.
- Changing the theme now writes exactly one of the `light` / `dark` classes on `<html>` instead of only toggling `dark`.

`setTheme` still accepts either a theme or an updater, `setTheme((current) => ...)`. `margoTheme` and the `MargoTheme` type are unchanged.
