# Styling

How the kit's styles are built, and how to override them.

## Layers and specificity

- Component rules sit in `@layer components`, wrapped in `:where()`: their specificity is 0.
- `base.css` sits in `@layer base`.
- Any class of the project wins over the kit, whatever the order of the stylesheets. Classes are never merged in JavaScript: the cascade decides.

## Classes

| What        | Class                          | Example                   |
| ----------- | ------------------------------ | ------------------------- |
| a component | `margo-<component>`            | `margo-checkbox`          |
| a part      | `margo-<component>-<part>`     | `margo-button-label`      |
| a variant   | `margo-<component>--<variant>` | `margo-border-glow--ring` |

Every component adds its class next to the `className` it receives.

## States

States are `data-margo-*` attributes on the element, written `true` or `false`, such as `data-margo-active="true"`. Style them from the project the same way:

```css
.nav-item[data-margo-active="true"] {
  font-weight: 600;
}
```

`disabled` uses the native attribute on a `<button>`, `aria-disabled` on anything else. `clickable={false}` sets `inert`.

## Base styles

`base.css`, in `@layer base`, resets a few elements across the page:

- `box-sizing: border-box` on everything.
- No list style on `li`.
- `text-align: left` on `button`, `cursor: pointer` on enabled buttons and `[role="button"]`.
- No native appearance on `select`, `option`, number spinners and the date picker icon.
- Autofilled inputs keep `--margo-color-on-main` as their text color.
- `svg` never shows an outline.

## Motion

- Layer, Sheet and Popover drop their transitions to 1ms with `prefers-reduced-motion: reduce`.
- Hover styles apply only inside `@media (hover: hover)`.
