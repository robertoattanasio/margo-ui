# margo-ui

A small React UI kit built on Tailwind CSS v4 design tokens, themeable through plain CSS custom properties.

Documentation: [dev.robertoattanasio.com/margo-ui](https://dev.robertoattanasio.com/margo-ui)

## Install

```sh
npm install margo-ui
```

```css
/* your entry stylesheet */
@import "tailwindcss";
@import "margo-ui/fonts/nunito.css";
@import "margo-ui/fonts/bebas.css";
@import "margo-ui/css";
```

Order matters: `tailwindcss` first, the kit after, your own overrides last. The font imports are optional.

## Built with

React 19, Tailwind CSS v4, TypeScript. [react-renderable](https://www.npmjs.com/package/react-renderable) for polymorphic rendering, clsx and tailwind-merge for class resolution, react-icons for the few built-in glyphs. Nunito and Bebas Neue are bundled as self-hosted woff2.

The package is published as TypeScript source: your bundler compiles it, exactly as it already has to scan it for Tailwind classes.

## Approach

- **Tokens first.** Colours, type and elevation are `--margo-` custom properties, mirrored into Tailwind's theme: redeclaring them themes the kit. Per-instance overrides go through `className`, merged over the defaults.
- **CSS first.** Effects live on pseudo-elements; JavaScript only writes coordinates. Most components hold no state.
- **Polymorphic.** `as` chooses the rendered element, and the remaining props are typed against it.
- **Composed, not configured.** Components expose parts to mount rather than booleans to set.
- **The consumer owns the layout.** Components style themselves and never their position.

Conventions for contributing: [RULE.md](./RULE.md).

## License

Code: [MIT](./LICENSE).

Fonts are redistributed under their own licenses — Nunito and Bebas Neue are both under the SIL Open Font License 1.1, bundled as `src/fonts/nunito/OFL.txt` and `src/fonts/bebas-neue/OFL.txt`.
