---
"margo-ui": major
---

The grid is no longer part of the kit. `margo-ui/css` no longer brings in the `margo-grid` utilities (`margo-grid`, `margo-grid-sub`, `margo-grid-sub-rows-*`, `margo-grid-flat`, `margo-container`, `margo-col-*`, `margo-row-*`, `margo-gutter-*`, `margo-padding-*`, `margo-pl-bleed` / `pr` / `px`), the `--margo-grid-*` tokens are gone, and `cn` no longer knows the grid classes.

The grid now lives in its own package, [outgrid](https://www.npmjs.com/package/outgrid), in plain CSS with an optional Tailwind entry. Placement uses Tailwind's own classes, so `margo-col-span-6` becomes `col-span-6` and `margo-grid-sub` becomes `grid grid-cols-subgrid`. Note that `col-end-*` is the line after the column: `margo-col-end-5` becomes `col-end-6`.
