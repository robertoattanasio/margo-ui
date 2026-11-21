# Item

A row of a list or a menu, with a ripple.

```ts
Item<T>(props: ItemProps<T>): JSX.Element
```

| Prop        | Type                             | Default    |                                                              |
| ----------- | -------------------------------- | ---------- | ------------------------------------------------------------ |
| `as`        | `ElementType`                    | `"button"` | the element or component to render                           |
| `clickable` | `boolean`                        | `true`     | `false` sets `inert` and turns the ripple off                |
| `disabled`  | `boolean`                        | `false`    | native `disabled` on a `<button>`, `aria-disabled` otherwise |
| `active`    | `boolean`                        | `false`    | the current item                                             |
| `onClick`   | `MouseEventHandler<HTMLElement>` |            | not called while `disabled`                                  |
| `...rest`   | the props of `as`                |            | spread on the element                                        |

## Parts

| Part         | Element | Class              |                                        |
| ------------ | ------- | ------------------ | -------------------------------------- |
| `Item.Icon`  | `span`  | `margo-item-icon`  | an icon. Without `children`, a chevron |
| `Item.Label` | `span`  | `margo-item-label` | the label, `children`                  |

## Data attributes

| Attribute              |                |
| ---------------------- | -------------- |
| `data-margo-active`    | `active`       |
| `data-margo-disabled`  | `disabled`     |
| `data-margo-item-slot` | on `Item.Icon` |

## Behavior

- Wrapped in [Ripple](../decorators/ripple.md).
- Parts work from Server Components: only the root is a client component.

Class: `margo-item`.

## Example

```tsx
<Item as="a" href="/settings" active={path === "/settings"}>
  <Item.Label>Settings</Item.Label>
  <Item.Icon />
</Item>
```
