# BorderGlow

A glow on the child's border, or one of its edges, that follows the mouse.

```ts
BorderGlow(props: BorderGlowProps): JSX.Element
```

| Prop        | Type                                              | Default  |                                                                      |
| ----------- | ------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| `children`  | `ReactElement`                                    | required | one element                                                          |
| `placement` | `"top" \| "right" \| "bottom" \| "left" \| "all"` | `"all"`  | the edge that glows, or the whole ring                               |
| `tolerance` | `number`                                          | `1`      | the glow's size, as a share of the child's longest side, from 0 to 1 |

## Behavior

- It clones its only child and adds its class next to the child's `className`. The child's own handlers still run, after the decorator's.
- Adds `margo-border-glow` and a variant: `margo-border-glow--ring` for `all`, `margo-border-glow--edge-<side>` otherwise.
- Visible only on hover, with a mouse.
- The glow is `--margo-color-primary`.
- The position and size are written to `--margo-border-glow-x`, `-y` and `-size` on the child.

Class: `margo-border-glow`.

## Example

```tsx
<BorderGlow placement="bottom">
  <Header>…</Header>
</BorderGlow>
```
