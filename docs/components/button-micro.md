# ButtonMicro

A small, plain text button.

```ts
ButtonMicro<T>(props: ButtonMicroProps<T>): JSX.Element
```

| Prop      | Type              | Default    |                                    |
| --------- | ----------------- | ---------- | ---------------------------------- |
| `as`      | `ElementType`     | `"button"` | the element or component to render |
| `active`  | `boolean`         | `false`    | a selected state                   |
| `...rest` | the props of `as` |            | spread on the element              |

## Data attributes

| Attribute           |          |
| ------------------- | -------- |
| `data-margo-active` | `active` |

## Behavior

- No ripple, no client code.

Class: `margo-button-micro`.

## Example

```tsx
<ButtonMicro onClick={copy}>copy</ButtonMicro>
```
