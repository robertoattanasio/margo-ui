# MaskGradientY

Fades the top and bottom edges of the child with a mask, such as a scrolling list.

```ts
MaskGradientY(props: MaskGradientYProps): JSX.Element
```

| Prop                        | Type           | Default  |                                           |
| --------------------------- | -------------- | -------- | ----------------------------------------- |
| `children`                  | `ReactElement` | required | one element                               |
| `fade`                      | `string`       | `"2rem"` | the length of both fades                  |
| `fadeTop`, `fadeBottom`     | `string`       | `fade`   | the length of one fade                    |
| `offsetTop`, `offsetBottom` | `string`       | `"0px"`  | a transparent band before the fade starts |

## Behavior

- It clones its only child and adds its class next to the child's `className`. The child's own handlers still run, after the decorator's.
- Props are written to `--margo-mask-gradient-y-*` custom properties. A `style` on the child wins over them.

Class: `margo-mask-gradient-y`.

## Example

```tsx
<MaskGradientY fadeBottom="4rem" fadeTop="0px">
  <Sheet.Body>…</Sheet.Body>
</MaskGradientY>
```
