# margo-ui

React component kit in plain CSS, with compound components and styles your own classes always override.

Package: [npmjs.com/package/margo-ui](https://www.npmjs.com/package/margo-ui)

Documentation: [dev.robertoattanasio.com/margo-ui](https://dev.robertoattanasio.com/margo-ui)

## Install

```sh
npm install margo-ui
```

```css
/* your entry stylesheet */
@import "margo-ui/css";
```

The components don't import any CSS themselves, so this import is required. The kit doesn't need Tailwind, but works next to it: import it after `tailwindcss`.

## Customization

- **Your classes win.** Every rule in the kit is wrapped in `:where()` and sits in the `components` cascade layer, so any class you add overrides it: a plain one, a breakpoint, a hover or a dark variant, written in Tailwind or in your own CSS.
- **Tokens for the whole kit.** Colours, the border width and the radius are `--margo-*` custom properties. Redeclare one after the import and every component follows.
- **One component everywhere.** Every component has a `margo-<component>` class and exposes its states as `data-margo-*` attributes. A rule in your stylesheet restyles it across the app.

## Light and dark

The light values are declared on `:root`, the dark ones on `.dark`. Put the `dark` class on an ancestor, usually `html`. Deciding the theme is up to your app.

## Server Components

Every component, compound parts included, can be rendered from a Server Component.

## Built with

React 19, TypeScript and plain CSS. [react-renderable](https://www.npmjs.com/package/react-renderable) for polymorphic rendering, react-icons for the few built-in glyphs.

## Approach

- **CSS first.** Styles and effects are plain CSS; JavaScript only writes state attributes and pointer coordinates. Most components hold no state.
- **Composed, not configured.** Components expose parts to mount rather than booleans to set.
- **Polymorphic where it helps.** Where a component accepts `as`, the remaining props are typed against the element it renders.
- **The consumer owns the rest.** The kit sets no fonts, no type scale and no breakpoints, and components never decide their own position.

Conventions for contributing: [RULE.md](./RULE.md).

## License

[MIT](./LICENSE).
