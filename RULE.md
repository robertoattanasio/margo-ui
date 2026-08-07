# Conventions

How margo-ui is written. These are not preferences: every rule here exists because breaking it produced a bug or an inconsistency we then had to undo.

## The approach

**The kit is CSS first.** Components are a thin React layer over tokens, utilities and pseudo-elements. If an effect can be expressed in CSS, it is not expressed in JavaScript — that is what keeps most components stateless and free at rest.

**Nothing is configured, everything is composed.** A component does not grow a boolean for each variation: it exposes parts to mount and classes to merge. What you see in the JSX is what renders.

**The consumer owns the layout, the kit owns the surface.** Components set their own appearance and nothing about where they sit: no margins, no widths that are not intrinsic to what they are.

## Files

One folder per component, under `components/` or `hoc/`, named in `snake_case`:

```
components/button/
  button.tsx      the component
  style.ts        every class name it uses
  type.ts         its props
  button.css      only if pseudo-elements or keyframes are needed
```

Never inline a class in the component — `style.ts` is the single place where appearance lives. Never declare a prop type inline; it belongs in `type.ts`, exported, because consumers build on it.

## Naming

| what                | convention                             | example                               |
| ------------------- | -------------------------------------- | ------------------------------------- |
| folder and file     | `snake_case`                           | `progress_bar/progress_bar.tsx`       |
| component           | `PascalCase`                           | `ProgressBar`                         |
| compound part       | `Component.Part`                       | `Button.IconLabel`                    |
| class constant      | `<component><Part>ClassName`           | `buttonIconClassName`                 |
| value constant      | `<component>Default<Thing>`            | `progressBarDefaultFill`              |
| own props type      | `<Component>OwnProps`                  | `ItemOwnProps`                        |
| public props type   | `<Component>Props<T>`                  | `ItemProps<T>`                        |
| part props type     | `<Component><Part>Props`               | `ButtonIconLabelProps`                |
| CSS custom property | `--margo-<component>-<thing>`          | `--margo-progress-bar-fill`           |
| CSS class           | `margo-<component>`                    | `margo-background-glow`               |
| utility             | `margo-<what-it-does>`                 | `margo-text-box-trim`                 |
| data attribute      | `data-margo-<thing>`                   | `data-margo-active`                   |

Prop names say what the thing **is**, not where it happens to appear: `content`, not `placeholder`. The same idea keeps the same name across components: an accessible name is `label` everywhere.

## Props

Every component is polymorphic. Own props go through `TagProps`, and the rest is forwarded with `Tag.forward`, which leaves `as` alone and takes the default element as its second argument:

```tsx
export type ButtonProps<T extends ElementType = "button"> = TagProps<T, ButtonOwnProps>;

<Tag {...Tag.forward<T>(rest, "button")} className={cn(buttonBaseClassName, className)} />;
```

`className` is always `className?: string`, always merged **last** through `cn`, so a consumer override wins on merit rather than on the order the CSS was emitted in.

Booleans are named for the state they describe — `active`, `open`, `loading` — and default to `false`. Defaults live in the signature, never as a fallback buried in CSS.

One component is deliberately not polymorphic: `Layer` owns a platform element, a native `dialog`, and `as` would break `showModal()`. Any other exception needs a reason of that kind, written down.

## Customisation

Three ways in, and which one to use is decided by who owns the value:

- **the component** → a prop that writes a CSS custom property: `opacity`, `noise`, `fill`
- **the call site** → a prop that takes classes: `rippleClassName`
- **the design system** → a token in `variables.css`, with a light and a dark value: colours, shadows, the code palette

Never a fourth way. A variable read from CSS but declared nowhere is not an API — it is a leak.

## Compound components

Mounting a part is what makes it exist. `Item.Icon` is not a boolean on `Item`; an Item without it has no chevron and no space reserved for one. Parts read state from the root through `data-margo-*` and group variants, so nothing has to be threaded down as props.

## CSS

Colours, spacing, type, elevation and radii come from tokens. A hardcoded colour in a component is a bug — the dark theme cannot reach it.

Effects live on `::before` and `::after`; JavaScript only writes coordinates into custom properties. Anything animated should be a property the compositor can handle: opacity, transform, clip-path, grid tracks.

## Accessibility

The kit owns the semantics of what it renders, and nothing more:

- it sets `role` and `aria-*` for what the component **is** (`Spinner` is a status, `ProgressBar` is a progressbar, `Tooltip` is a tooltip)
- it never announces a value it invented — an unknown quantity carries no `aria-valuenow`
- visual props are visual only. `active` is not `aria-pressed`, `clickable={false}` is not `disabled`, and the documentation says so every time

A component that renders no text must be nameable by the consumer.

## Higher order components

They clone their child, never wrap it: no node enters the DOM and the child keeps its place in the layout. They call the handler the consumer already passed. They are decorations — remove one and everything renders as before, minus the effect.

`Ripple` is the documented exception: a ripple needs one element per press, so it holds state and appends a node.

## Comments

The reasoning lives in the documentation site, where it can be read by someone who is not in the file. Comment the code only where the mechanism is genuinely surprising — a type assertion the compiler cannot avoid, a CSS trick that looks wrong.

## Breaking changes

Renaming a prop, renaming a `data-margo-*` attribute or changing a default are all breaking: consumers style against those attributes and pass those props. They ship with a major changeset, and the entry says what to rename.
