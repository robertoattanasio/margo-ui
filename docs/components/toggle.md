# Toggle

A switch: a native checkbox with `role="switch"`.

```ts
Toggle(props: ToggleProps): JSX.Element
```

Every other prop is spread on the element: the props of `<input>`, without `type` and `role`, `ref` included.

## Custom properties

| Property                | Default |                                     |
| ----------------------- | ------- | ----------------------------------- |
| `--margo-toggle-travel` | `1rem`  | how far the knob moves when checked |

## Behavior

- Controlled or uncontrolled like the native checkbox.

Class: `margo-toggle`.

## Example

```tsx
<Toggle checked={dark} onChange={(event) => setDark(event.target.checked)} aria-label="Dark mode" />
```
