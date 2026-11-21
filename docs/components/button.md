# Button

A button with a ripple, and parts for an icon, a label, or an icon that reveals its label.

```ts
Button<T>(props: ButtonProps<T>): JSX.Element
```

| Prop        | Type                             | Default    |                                                                |
| ----------- | -------------------------------- | ---------- | -------------------------------------------------------------- |
| `as`        | `ElementType`                    | `"button"` | the element or component to render                             |
| `clickable` | `boolean`                        | `true`     | `false` sets `inert` and turns the ripple off                  |
| `disabled`  | `boolean`                        | `false`    | native `disabled` on a `<button>`, `aria-disabled` otherwise   |
| `active`    | `boolean`                        | `false`    | a selected state                                               |
| `open`      | `boolean`                        | `false`    | something it controls is open. Also reveals `Button.IconLabel` |
| `onClick`   | `MouseEventHandler<HTMLElement>` |            | not called while `disabled`                                    |
| `...rest`   | the props of `as`                |            | spread on the element                                          |

## Parts

| Part               | Element | Class                     |                                                 |
| ------------------ | ------- | ------------------------- | ----------------------------------------------- |
| `Button.Icon`      | `span`  | `margo-button-icon`       | an icon, `children`                             |
| `Button.Label`     | `span`  | `margo-button-label`      | a label, `children`                             |
| `Button.IconLabel` | `span`  | `margo-button-icon-label` | an icon with a label that slides out, see below |

## Data attributes

| Attribute             |            |
| --------------------- | ---------- |
| `data-margo-active`   | `active`   |
| `data-margo-open`     | `open`     |
| `data-margo-disabled` | `disabled` |

## Button.IconLabel

| Prop        | Type                | Default    |                                        |
| ----------- | ------------------- | ---------- | -------------------------------------- |
| `icon`      | `ReactNode`         | required   |                                        |
| `label`     | `ReactNode`         | required   |                                        |
| `gap`       | `string`            | `"0.5rem"` | space between them once revealed       |
| `reverse`   | `boolean`           | `false`    | show the label, reveal the icon        |
| `direction` | `"left" \| "right"` | `"right"`  | the side the hidden part slides out to |
| `className` | `string`            |            |                                        |

Only the icon shows, and the label slides out on hover, on `:focus-visible`, or while the Button is `open`. With `reverse`, the label shows and the icon slides out.

## Behavior

- Wrapped in [Ripple](../decorators/ripple.md): the ripple plays on pointer up, unless `disabled` or not `clickable`.
- Parts work from Server Components: only the root is a client component.
- Types: `ButtonProps`, `ButtonIconProps`, `ButtonLabelProps`, `ButtonIconLabelProps`, `ButtonIconLabelDirection`.

Class: `margo-button`.

## Example

```tsx
<Button onClick={save}>
  <Button.Label>Save</Button.Label>
</Button>

<Button aria-label="Settings">
  <Button.IconLabel icon={<MdSettings />} label="Settings" />
</Button>

<Button as="a" href="/docs">
  <Button.Label>Docs</Button.Label>
</Button>
```
