# Spinner

A spinning loader.

```ts
Spinner<T>(props: SpinnerProps<T>): JSX.Element
```

| Prop      | Type              | Default     |                                    |
| --------- | ----------------- | ----------- | ---------------------------------- |
| `as`      | `ElementType`     | `"span"`    | the element or component to render |
| `label`   | `string`          | `"Loading"` | its accessible name                |
| `...rest` | the props of `as` |             | spread on the element              |

## Behavior

- Has `role="status"` and `aria-label`. An `aria-label` passed as a prop wins over `label`.
- Draws with `currentColor`.

Class: `margo-spinner`.

## Example

```tsx
<Spinner label="Saving" />
```
