# Checkbox

A native checkbox, styled, with an indeterminate state.

```ts
Checkbox(props: CheckboxProps): JSX.Element
```

| Prop            | Type                                                   | Default |                                          |
| --------------- | ------------------------------------------------------ | ------- | ---------------------------------------- |
| `indeterminate` | `boolean`                                              | `false` | sets the native `indeterminate` property |
| `...rest`       | the props of `<input>`, without `type`, `ref` included |         | spread on the element                    |

## Behavior

- Renders `<input type="checkbox">`: controlled or uncontrolled like the native one.
- `indeterminate` has no HTML attribute: it's set on the element in an effect.
- Presses down while pressed, unless disabled.
- A client component.

Class: `margo-checkbox`.

## Example

```tsx
<Label>
  <Checkbox checked={all} indeterminate={some && !all} onChange={toggleAll} />
  Select all
</Label>
```
