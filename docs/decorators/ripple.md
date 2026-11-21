# Ripple

A ripple from the point where the pointer is released.

```ts
Ripple(props: RippleProps): JSX.Element
```

| Prop              | Type           | Default  |                             |
| ----------------- | -------------- | -------- | --------------------------- |
| `children`        | `ReactElement` | required | one element                 |
| `disabled`        | `boolean`      | `false`  | no ripple                   |
| `rippleClassName` | `string`       |          | added to the ripple element |

## Behavior

- It clones its only child and adds its class next to the child's `className`. The child's own handlers still run, after the decorator's.
- Adds a `span.margo-ripple` inside the child on pointer up, sized to cover it, and removes it when its animation ends.
- The child gets `position: relative` and `overflow: hidden`.
- The ripple is `--margo-color-primary-darken`, fading from 50% opacity in 500ms.
- Already applied by Button and Item.
- A client component.

Class: `margo-ripple-host`.

## Example

```tsx
<Ripple>
  <div className="tile" onPointerUp={select}>
    …
  </div>
</Ripple>
```
