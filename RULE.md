# Rules

How margo-ui code is written.

## Files

One folder per component under `components/`, per decorator under `hoc/`, named in `snake_case`:

```
components/button/
  button.tsx         the component and its parts
  button_client.tsx  the part that needs the browser, when the component also has parts
  style.ts           its classes
  type.ts            its prop types
  button.css         when Tailwind is not enough: pseudo-elements, keyframes, complex selectors
```

Components and their public types are exported from `src/index.ts`. A component that uses hooks or handles events needs the browser. Without parts, its file starts with `"use client"`. With parts, that code moves to `<component>_client.tsx`, marked `"use client"` and never exported, and `<component>.tsx` renders it and holds the parts, so `Component.Part` also works from Server Components. A component's CSS file is imported from `margo.css`, never from the component.

## Naming

| what                | convention                    | example                         |
| ------------------- | ----------------------------- | ------------------------------- |
| folder and file     | `snake_case`                  | `progress_bar/progress_bar.tsx` |
| component           | `PascalCase`                  | `ProgressBar`                   |
| part                | `Component.Part`              | `Button.Label`                  |
| class constant      | `<component><Part>ClassName`  | `buttonLabelClassName`          |
| own props type      | `<Component>OwnProps`         | `ChipOwnProps`                  |
| props type          | `<Component>Props`            | `ChipProps`                     |
| part props type     | `<Component><Part>Props`      | `ButtonLabelProps`              |
| CSS class           | `margo-<component>`           | `margo-checkbox`                |
| CSS custom property | `--margo-<component>-<thing>` | `--margo-progress-bar-fill`     |
| data attribute      | `data-margo-<thing>`          | `data-margo-open`               |

Everything in code is in English.

## Components

- Classes go in `style.ts` and are merged with `cn`, with the consumer's `className` among the last.
- Prop types go in `type.ts`.
- Defaults are set in the signature.
- `as` is supported where it makes sense, through `TagProps` and `Tag.forward` from `react-renderable`. Components built around a native control extend that control's props instead.

### Parts

- Parts are static members: `Button.Label`, `Header.Title`.
- A part takes its content as `children`. `Button.IconLabel` takes `icon` and `label` props, because it arranges two parts.
- Parts read the root's state from `data-margo-*` attributes and `group/<component>` variants.

### States

- `disabled` is native: the `disabled` attribute on a `<button>`, `aria-disabled` otherwise.
- `clickable={false}` sets `inert`, for UI-only states like a loading button.

## Styles

- Colours, radii, shadows and type come from the tokens in `variables.css`, mapped into Tailwind in `theme.css`.

## Decorators (`hoc/`)

Decorators clone their child with `cloneElement` and call the child's own handlers after theirs.
