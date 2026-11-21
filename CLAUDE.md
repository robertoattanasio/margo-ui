# margo-ui

A React component kit in plain CSS, with compound components and styles the consumer's classes always override. Public package on npm.

## Docs

- [README.md](./README.md): install, links to the docs.
- [docs/](./docs/): [theme.md](./docs/theme.md), [styling.md](./docs/styling.md), one file per component in `docs/components/`, one per decorator in `docs/decorators/`, plus [scripts.md](./docs/scripts.md) and [release.md](./docs/release.md).

Read the component's doc before changing it. When a prop, a part, a state or a style contract changes, update its doc in the same change.

## Structure

```
margo.css                        imports every stylesheet, exported as "margo-ui/css"
src/
  index.ts                       the only barrel
  css/base.css                   page resets, in @layer base
  css/variables.css              the tokens, light and .dark
  components/<name>/
    <name>.tsx                   the component and its parts
    <name>_client.tsx            the part that needs the browser, when the component has parts
    <name>.css                   its styles
    type.ts                      its prop types
  hoc/<name>/                    decorators, same split
  utils/join/join.ts             joins class names
  utils/support/support.ts       isMargoLayerSupported
docs/
  components/<name-kebab-case>.md
  decorators/<name-kebab-case>.md
```

## Naming

| What                | Convention                                                 | Example                         |
| ------------------- | ---------------------------------------------------------- | ------------------------------- |
| folder and file     | snake_case                                                 | `progress_bar/progress_bar.tsx` |
| component           | PascalCase                                                 | `ProgressBar`                   |
| part                | `Component.Part`                                           | `Button.Label`                  |
| own props type      | `<Component>OwnProps`                                      | `ChipOwnProps`                  |
| props type          | `<Component>Props`                                         | `ChipProps`                     |
| part props type     | `<Component><Part>Props`                                   | `ButtonLabelProps`              |
| CSS class           | `margo-<component>`                                        | `margo-checkbox`                |
| part CSS class      | `margo-<component>-<part>`                                 | `margo-button-label`            |
| variant CSS class   | `margo-<component>--<variant>`                             | `margo-border-glow--ring`       |
| CSS custom property | `--margo-<component>-<thing>`                              | `--margo-progress-bar-fill`     |
| token               | `--margo-color-<role>`, `--margo-border`, `--margo-radius` | `--margo-color-primary`         |
| data attribute      | `data-margo-<thing>`                                       | `data-margo-open`               |

Everything in code is in English.

## Components

- A component renders its `margo-<component>` class, joined with the consumer's `className` by `join`. Classes are never merged: the consumer's win through the cascade.
- States are `data-margo-*` attributes, never classes swapped in JavaScript.
- Defaults are set in the signature. Prop types go in `type.ts`.
- `as` is supported where it makes sense, through `TagProps` and `Tag.forward` from `react-renderable`. Components built around a native control extend that control's props instead.
- A component that uses hooks or handles events needs the browser. Without parts, its file is `"use client"`. With parts, that code moves to `<name>_client.tsx`, `"use client"` and never exported, and `<name>.tsx` renders it and carries the parts, so `Component.Part` works from Server Components.
- A component's CSS is imported from `margo.css`, never from the component.

### Parts

- Parts are static members: `Button.Label`, `Header.Title`.
- A part takes its content as `children`. `Button.IconLabel` takes `icon` and `label`, because it arranges two parts.
- Parts read the root's state through descendant selectors on its `data-margo-*` attributes.

### States

- `disabled` is native: the `disabled` attribute on a `<button>`, `aria-disabled` otherwise.
- `clickable={false}` sets `inert`, for UI-only states like a loading button.

## Styles

- Every rule is wrapped in `:where(...)` inside `@layer components`. Pseudo-elements go after the `:where()`: `:where(.margo-checkbox:checked)::before`.
- Rules follow the order states take priority in: base, data states, `:focus-within`, `:hover` inside `@media (hover: hover)`, `:focus-visible`, `:active`, disabled.
- Tokens are only colors, the border width and the radius. Every other value is written in the component's CSS.
- Values that change with the theme get a second rule on `:where(.dark .margo-<component>)`.
- A border on one side sets its width and style on that side and its color on all sides.
- `outline-style: none`, never the `outline: none` shorthand.
- The open and close transitions of Layer, Sheet and Popover drop to `1ms` under `prefers-reduced-motion: reduce`, in the component's own file.
- `@keyframes` and page-level rules, like `html:has(.margo-layer[open])`, stay outside the layer.

## Decorators

Decorators in `hoc/` clone their only child with `cloneElement`, add their `margo-<decorator>` class with `join`, and call the child's own handlers after theirs.

## Conventions

- Relative imports end in `.js`, types are imported with `import type`.
- Dependencies: `react-renderable` and `react-icons`. React and React DOM are peer dependencies.
- No comments in the code unless asked.

## Adding a component

1. `src/components/<name>/<name>.tsx`, `<name>.css`, `type.ts`, and `<name>_client.tsx` if it has parts and needs the browser.
2. Import the CSS in `margo.css`.
3. Export the component and its types from `src/index.ts`.
4. `docs/components/<name>.md`, same layout as the others.
5. Link it in `README.md`.
6. `npm run ts:check`.
