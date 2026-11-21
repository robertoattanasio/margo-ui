# MaskGradientX

Fades the left and right edges of the child with a mask, such as a horizontally scrolling row.

```ts
MaskGradientX(props: MaskGradientXProps): JSX.Element
```

| Prop                        | Type           | Default  |                                           |
| --------------------------- | -------------- | -------- | ----------------------------------------- |
| `children`                  | `ReactElement` | required | one element                               |
| `fade`                      | `string`       | `"2rem"` | the length of both fades                  |
| `fadeLeft`, `fadeRight`     | `string`       | `fade`   | the length of one fade                    |
| `offsetLeft`, `offsetRight` | `string`       | `"0px"`  | a transparent band before the fade starts |

## Behavior

- It clones its only child and adds its class next to the child's `className`. The child's own handlers still run, after the decorator's.
- Props are written to `--margo-mask-gradient-x-*` custom properties. A `style` on the child wins over them.
- Works with any CSS length.

Class: `margo-mask-gradient-x`.

## Example

```tsx
<MaskGradientX fade="3rem">
  <ul className="row">…</ul>
</MaskGradientX>
```
