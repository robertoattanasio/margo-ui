# ButtonGroup

A row of joined buttons, one of them the current one.

```ts
ButtonGroup<T>(props: ButtonGroupProps<T>): JSX.Element
```

| Prop      | Type              | Default |                                    |
| --------- | ----------------- | ------- | ---------------------------------- |
| `as`      | `ElementType`     | `"div"` | the element or component to render |
| `...rest` | the props of `as` |         | spread on the element              |

## Parts

| Part               | Element  | Class                     |                                     |
| ------------------ | -------- | ------------------------- | ----------------------------------- |
| `ButtonGroup.Item` | `button` | `margo-button-group-item` | a button, its content as `children` |

`ButtonGroup.Item` takes:

| Prop        | Type                             | Default    |                                                              |
| ----------- | -------------------------------- | ---------- | ------------------------------------------------------------ |
| `as`        | `ElementType`                    | `"button"` | the element or component to render                           |
| `clickable` | `boolean`                        | `true`     | `false` sets `inert`                                         |
| `disabled`  | `boolean`                        | `false`    | native `disabled` on a `<button>`, `aria-disabled` otherwise |
| `active`    | `boolean`                        | `false`    | the current one, also `aria-pressed` on a `<button>`         |
| `onClick`   | `MouseEventHandler<HTMLElement>` |            | not called while `disabled`                                  |
| `children`  | `ReactNode`                      | required   | the content                                                  |
| `...rest`   | the props of `as`                |            | spread on the element                                        |

## Data attributes

| Attribute             |                                   |
| --------------------- | --------------------------------- |
| `data-margo-active`   | `active`, on `ButtonGroup.Item`   |
| `data-margo-disabled` | `disabled`, on `ButtonGroup.Item` |

## Behavior

- The root has `role="group"`.
- Every item is as wide as the widest one.
- Never wider than its container: items shrink, and their `children` end with an ellipsis.
- Every item has its own border, overlapping the next one's, and treats it like a [Button](./button.md): primary when active or focused, `on-main` on hover. The focused item sits on top, then the hovered one, then the active one.
- While an item is pressed, its `children` scale down.
- Parts work from Server Components: only `ButtonGroup.Item` is a client component.

Class: `margo-button-group`.

## Example

```tsx
<ButtonGroup aria-label="Align">
  <ButtonGroup.Item active={align === "left"} onClick={() => setAlign("left")} aria-label="Left">
    <MdFormatAlignLeft />
  </ButtonGroup.Item>
  <ButtonGroup.Item active={align === "center"} onClick={() => setAlign("center")} aria-label="Center">
    <MdFormatAlignCenter />
  </ButtonGroup.Item>
  <ButtonGroup.Item active={align === "right"} onClick={() => setAlign("right")} aria-label="Right">
    <MdFormatAlignRight />
  </ButtonGroup.Item>
</ButtonGroup>
```
