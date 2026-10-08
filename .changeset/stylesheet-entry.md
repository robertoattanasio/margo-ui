---
"margo-ui": minor
---

Components no longer import their own CSS: every stylesheet is reached from `margo-ui/css`, and the JavaScript ships compiled to `dist`. `@source` now scans the package's own build instead of the folder above it, so Tailwind no longer reads the whole of `node_modules`. Projects that import `margo-ui/css` need no change.
