# Rules

How margo-ui code is written.

## Files

One folder per component under `components/`, per decorator under `hoc/`, named in `snake_case`:

```
components/button/
  button.tsx         the component and its parts
  button_client.tsx  the part that needs the browser, when the component also has parts
  button.css         its styles
  type.ts            its prop types
```

Components and their public types are exported from `src/index.ts`. A component that uses hooks or handles events needs the browser. Without parts, its file starts with `"use client"`. With parts, that code moves to `<component>_client.tsx`, marked `"use client"` and never exported, and `<component>.tsx` renders it and holds the parts, so `Component.Part` also works from Server Components. A component's CSS file is imported from `margo.css`, never from the component.

## Naming

| what                | convention                                                 | example                         |
| ------------------- | ---------------------------------------------------------- | ------------------------------- |
| folder and file     | `snake_case`                                               | `progress_bar/progress_bar.tsx` |
| component           | `PascalCase`                                               | `ProgressBar`                   |
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

- The component renders its `margo-<component>` class, joined with the consumer's `className` by `join` from `utils/join`. Classes are never merged: the consumer's win through the cascade.
- States are `data-margo-*` attributes on the element, never classes swapped in JavaScript.
- Prop types go in `type.ts`.
- Defaults are set in the signature.
- `as` is supported where it makes sense, through `TagProps` and `Tag.forward` from `react-renderable`. Components built around a native control extend that control's props instead.

### Parts

- Parts are static members: `Button.Label`, `Header.Title`.
- A part takes its content as `children`. `Button.IconLabel` takes `icon` and `label` props, because it arranges two parts.
- Parts read the root's state through descendant selectors on its `data-margo-*` attributes, like `.margo-button[data-margo-open="true"] .margo-button-slot`.

### States

- `disabled` is native: the `disabled` attribute on a `<button>`, `aria-disabled` otherwise.
- `clickable={false}` sets `inert`, for UI-only states like a loading button.

## Styles

- Every rule is wrapped in `:where(...)` inside `@layer components`, so it has no specificity and any class from the consumer wins. Pseudo-elements go after the `:where()`: `:where(.margo-checkbox:checked)::before`.
- Rules follow the order states take priority in: base, data states, `:focus-within`, `:hover` inside `@media (hover: hover)`, `:focus-visible`, `:active`, disabled.
- Tokens are only colours, the border width and the radius, from `variables.css`. Smaller corners use `--margo-radius-sm`, `-xs` and `-mc`. Every other value (sizes, shadows, timings, z-index) is written in the component's CSS.
- Values that change with the theme get a second rule on `:where(.dark .margo-<component>)`.
- A border on one side sets its width and style on that side and its colour on all sides, like the rest of the kit's borders.
- Use `outline-style: none`, never the `outline: none` shorthand, which also resets the width and the colour.
- The opening and closing transitions of Layer, Sheet and Popover drop to `1ms` under `@media (prefers-reduced-motion: reduce)`, in the component's own file.
- `@keyframes` and page-level rules, like `html:has(.margo-layer[open])`, stay outside the layer.

## Decorators (`hoc/`)

Decorators clone their child with `cloneElement`, add their `margo-<decorator>` class with `join`, and call the child's own handlers after theirs.
