# Card

A surface with a border and a radius.

```ts
Card<T>(props: CardProps<T>): JSX.Element
```

| Prop      | Type              | Default |                                    |
| --------- | ----------------- | ------- | ---------------------------------- |
| `as`      | `ElementType`     | `"div"` | the element or component to render |
| `...rest` | the props of `as` |         | spread on the element              |

Class: `margo-card`.

## Example

```tsx
<Card as="article">…</Card>
```
