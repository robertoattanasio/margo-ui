# margo-ui

A small React UI kit built on Tailwind CSS v4 design tokens, themeable through plain CSS custom properties.

Install the package, import one stylesheet, and the components are styled. Everything is overridable — including the fonts — by redefining `--margo-*` custom properties in your own CSS.

## Install

```sh
npm install margo-ui
```

Peer dependencies: `react` 19, `react-dom` 19, `tailwindcss` 4.

## Usage

```css
/* your entry stylesheet */
@import "tailwindcss";
@import "margo-ui/fonts.css";
@import "margo-ui/css";
```

```tsx
import { Button, Card } from "margo-ui";

<Card>
  <Button>
    <Button.Label label="click me" />
  </Button>
</Card>;
```

`margo-ui/css` ships design tokens, a base reset, the `dark` / `closed` variants and the utilities. It also declares its own `@source`, so Tailwind picks up the classes used inside the package with no extra configuration. Styles belonging to a single component or hook are imported by that file, so they load only when you use it.

The package is published as TypeScript source — your bundler compiles it, exactly as it already has to scan it for Tailwind classes.

## Fonts

margo-ui uses **Nunito** as its primary family and **Bebas Neue** as its secondary (display) family. Font faces are **not** included in `margo-ui/css` — import them separately so you only pay for what you use:

| Import | Contents |
| --- | --- |
| `margo-ui/fonts.css` | Nunito + Bebas Neue |
| `margo-ui/fonts/nunito.css` | Nunito only (weights 200–900) |
| `margo-ui/fonts/bebas.css` | Bebas Neue only (weight 400) |

Only `woff2` is shipped, all with `font-display: swap`. The files themselves are reachable too, e.g. `margo-ui/fonts/nunito/nunito-medium.woff2`, if you want to preload a weight.

## Theming

Every token is a CSS custom property on `:root`, mapped into Tailwind's `@theme` by the package. To change one, redefine it **after** the import — no `@theme` block needed on your side:

```css
@import "margo-ui/fonts/nunito.css"; /* Bebas is not imported */
@import "margo-ui/css";

@font-face {
  font-family: "Melodrama";
  src: url("./melodrama-regular.woff2") format("woff2");
}

:root {
  --margo-font-family-secondary: "Melodrama", georgia, serif;
  --margo-color-primary: #2c4ee7;
}
```

The dark theme lives under a `.dark` class: add it to `<html>` to switch.

### Tokens

| Group | Properties |
| --- | --- |
| Fonts | `--margo-font-family-primary`, `--margo-font-family-secondary` |
| Font sizes | `--margo-font-size-{mc,xs,sm,base,md,lg,2lg,xl,2xl…9xl}` |
| Font weights | `--margo-font-weight-{thin…black}` |
| Colors | `--margo-color-{neutral,on-neutral,main,on-main,primary,primary-darken,secondary,medium,border}` |
| Borders | `--margo-border-width-2` (overrides Tailwind's `border-2`) |
| Screen | `--margo-screen-max-width`, `--margo-screen-padding-{sm,md}` |
| Durations | `--margo-duration-{route-change,layer-enter,layer-exit}` |
| Z-index | `--margo-z-index-{max,navigation-loader,navbar,toolbar}` |

## Exports

Components `Button` (with `Button.Icon`, `Button.Label`, `Button.IconLabel`), `Card`, `Ripple`, `BorderGlow`; helper `cn`.

`Ripple` and `BorderGlow` wrap a single element and clone it, so they add their behaviour to whatever you give them without an extra DOM node:

```tsx
<BorderGlow position="down">
  <header className="border-b-2 border-border">…</header>
</BorderGlow>
```

## License

Code: [MIT](./LICENSE).

Fonts are redistributed under their own licenses — Nunito and Bebas Neue are both under the SIL Open Font License 1.1, bundled as `src/fonts/nunito/OFL.txt` and `src/fonts/bebas-neue/OFL.txt`.
