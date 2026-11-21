# Chip

A small rounded tag.

```ts
Chip<T>(props: ChipProps<T>): JSX.Element
```

| Prop      | Type              | Default |                                    |
| --------- | ----------------- | ------- | ---------------------------------- |
| `as`      | `ElementType`     | `"div"` | the element or component to render |
| `active`  | `boolean`         | `false` | a selected state                   |
| `...rest` | the props of `as` |         | spread on the element              |

## Data attributes

| Attribute           |          |
| ------------------- | -------- |
| `data-margo-active` | `active` |

Class: `margo-chip`.

## Example

```tsx
<Chip as="button" active={filter === "react"} onClick={() => setFilter("react")}>
  react
</Chip>
```
