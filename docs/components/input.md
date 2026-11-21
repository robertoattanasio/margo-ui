# Input

A text field: a box holding an optional icon and a native `<input>`.

```ts
Input<T>(props: InputProps<T>): JSX.Element
```

| Prop        | Type              | Default |                                    |
| ----------- | ----------------- | ------- | ---------------------------------- |
| `as`        | `ElementType`     | `"div"` | the element or component to render |
| `active`    | `boolean`         | `false` | a highlighted state                |
| `clickable` | `boolean`         | `true`  | `false` sets `inert`               |
| `...rest`   | the props of `as` |         | spread on the element              |

## Parts

| Part         | Element | Class              |                                            |
| ------------ | ------- | ------------------ | ------------------------------------------ |
| `Input.Icon` | `span`  | `margo-input-icon` | an icon. Without `children`, a search icon |
| `Input.Text` | `input` | `margo-input-text` | the native input, every prop of `<input>`  |

## Data attributes

| Attribute               |                 |
| ----------------------- | --------------- |
| `data-margo-active`     | `active`        |
| `data-margo-input-slot` | on `Input.Icon` |

## Behavior

- The root is a box, not the input: `value`, `onChange` and the rest go on `Input.Text`.

Class: `margo-input`.

## Example

```tsx
<Input>
  <Input.Icon />
  <Input.Text type="search" placeholder="Search" value={query} onChange={(event) => setQuery(event.target.value)} />
</Input>
```
