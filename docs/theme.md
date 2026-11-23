# Theme

Every color, the border width and the radius come from custom properties declared in `margo.css`. Override them to restyle the whole kit.

## Tokens

| Token                          | Light                       | Dark                        |                                   |
| ------------------------------ | --------------------------- | --------------------------- | --------------------------------- |
| `--margo-color-neutral`        | `#ffffff`                   | `#000000`                   | the page background               |
| `--margo-color-on-neutral`     | `#000000`                   | `#ffffff`                   | text on `neutral`                 |
| `--margo-color-main`           | `#e6e6e6`                   | `#171717`                   | surfaces: cards, popovers, sheets |
| `--margo-color-on-main`        | `#222222`                   | `#f3f3f3`                   | text on `main`                    |
| `--margo-color-primary`        | `#9c0ea3`                   | `#57e550`                   | the accent                        |
| `--margo-color-primary-darken` | `#7d0b82`                   | `#45b93f`                   | the accent, pressed or on borders |
| `--margo-color-low`            | `on-main` 5.5% over `main`  | `on-main` 2.5% over `main`  | subtle fills                      |
| `--margo-color-low-alpha`      | `on-main` 5.5%, transparent | `on-main` 2.5%, transparent | subtle fills over anything        |
| `--margo-color-medium`         | `#707070`                   | `#999999`                   | secondary text                    |
| `--margo-color-border`         | `#c9c9c9`                   | `#2c2c2c`                   | borders                           |
| `--margo-border`               | `2px`                       |                             | border width                      |
| `--margo-radius`               | `0.5rem`                    |                             | corner radius                     |
| `--margo-radius-sm`            | `radius × 3/4`              |                             |                                   |
| `--margo-radius-xs`            | `radius / 2`                |                             |                                   |
| `--margo-radius-mc`            | `radius / 4`                |                             |                                   |

## Dark mode

The dark values apply under any element with the class `dark`, usually `<html class="dark">`. `color-scheme` follows: `light` on `:root`, `dark` under `.dark`.

Some components also have a second rule for dark mode, on `.dark .margo-<component>`, for values that aren't tokens, such as shadows.

## Example

```css
:root {
  --margo-color-primary: #2f6fed;
  --margo-color-primary-darken: #1f56c4;
  --margo-radius: 0.25rem;
}

.dark {
  --margo-color-primary: #7aa5ff;
}
```
