# PointerHolder

Tracks which marked descendants the pointer has passed over, until it leaves.

```ts
PointerHolder(props: PointerHolderProps): JSX.Element
```

| Prop        | Type                                             | Default                       |                                                         |
| ----------- | ------------------------------------------------ | ----------------------------- | ------------------------------------------------------- |
| `children`  | `({ keys }: { keys: string[] }) => ReactElement` | required                      | renders the element to track, with the keys so far      |
| `attribute` | `string`                                         | `"data-margo-pointer-holder"` | the attribute that marks a descendant and holds its key |
| `disabled`  | `boolean`                                        | `false`                       | stops adding keys                                       |

## Behavior

- On pointer over, the closest ancestor of the target with `attribute` adds its value to `keys`, once.
- When the pointer leaves the element, `keys` is emptied.
- Touch is ignored.
- It adds no class and no style: it only passes `keys`.
- The element's own `onPointerOver` and `onPointerLeave` still run.
- A client component.

## Example

```tsx
<PointerHolder>
  {({ keys }) => (
    <ul>
      {items.map((item) => (
        <li key={item.id} data-margo-pointer-holder={item.id} data-seen={keys.includes(item.id)}>
          {item.label}
        </li>
      ))}
    </ul>
  )}
</PointerHolder>
```
