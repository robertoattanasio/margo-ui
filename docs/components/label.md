# Label

A form label.

```ts
Label<T>(props: LabelProps<T>): JSX.Element
```

| Prop       | Type              | Default   |                                    |
| ---------- | ----------------- | --------- | ---------------------------------- |
| `as`       | `ElementType`     | `"label"` | the element or component to render |
| `disabled` | `boolean`         | `false`   | dims it                            |
| `spaced`   | `boolean`         | `false`   | adds space between its children    |
| `...rest`  | the props of `as` |           | spread on the element              |

## Data attributes

| Attribute             |            |
| --------------------- | ---------- |
| `data-margo-disabled` | `disabled` |
| `data-margo-spaced`   | `spaced`   |

Class: `margo-label`.

## Example

```tsx
<Label spaced>
  <Toggle checked={on} onChange={(event) => setOn(event.target.checked)} />
  Notifications
</Label>
```
