---
"margo-ui": patch
---

Fix Chip losing its `leading-none` class: it sat before the `text-mc` size class in the same string, and `tailwind-merge` silently drops an earlier `leading-*` class when a `font-size` class follows it. Reordered so `leading-none` comes after `text-mc`.
