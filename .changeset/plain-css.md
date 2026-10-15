---
"margo-ui": major
---

The kit is now styled in plain CSS and no longer needs Tailwind. Every component has its own stylesheet, imported by `margo-ui/css`, with each rule wrapped in `:where()` inside the `components` cascade layer. Any class you pass wins over it, without merging.

- **Your classes win in every state.** A class without a variant now also applies on hover, focus and active: `bg-primary` on an active `Chip` stays primary on hover. Use a variant, like `hover:bg-primary`, to change a single state.
- **Component classes and state attributes.** Components render `margo-<name>` classes (`margo-chip`, `margo-button-label`) and their states as `data-margo-*` attributes (`data-margo-active`, `data-margo-disabled`, `data-margo-open`). Target them from your stylesheet to restyle a component everywhere.
- **Tokens are colours, border and radius only.** `--margo-color-*`, `--margo-border`, `--margo-radius` and the derived `--margo-radius-sm`, `--margo-radius-xs`, `--margo-radius-mc`. The font, size, weight, line-height, shadow, motion and z-index tokens are gone: those values live in each component's CSS.
- **No Tailwind integration.** The `@theme` mapping, the breakpoints, the `dark:` variant and the `margo-text-box-trim` utility are removed. Declare what your project needs in its own Tailwind theme.
- **`cn` is removed.** Components no longer merge classes. Use your own `clsx` + `tailwind-merge` helper in your code.
- **Theme switching is removed.** `useMargoTheme`, `margoTheme` and `MetaColorScheme` are gone. Put the `dark` class on an ancestor yourself; the colour tokens still follow it.
- **Fonts are removed.** `margo-ui/fonts/*` is gone: components inherit the font of the page.
- **`Ripple`'s `rippleClassName` has no default.** The circle is primary darken through CSS; pass a class to change it.
