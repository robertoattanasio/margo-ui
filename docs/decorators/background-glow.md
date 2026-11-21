# BackgroundGlow

A soft glow behind the child that follows the mouse, with a grain of noise.

```ts
BackgroundGlow(props: BackgroundGlowProps): JSX.Element
```

| Prop        | Type           | Default  |                                                                      |
| ----------- | -------------- | -------- | -------------------------------------------------------------------- |
| `children`  | `ReactElement` | required | one element                                                          |
| `tolerance` | `number`       | `1`      | the glow's size, as a share of the child's longest side, from 0 to 1 |
| `opacity`   | `number`       | `0.2`    | the glow's opacity on hover                                          |
| `noise`     | `number`       | `0.04`   | the noise's opacity on hover                                         |

## Custom properties

| Property                                | Default                   |
| --------------------------------------- | ------------------------- |
| `--margo-background-glow-size`          | `480px`, then set on move |
| `--margo-background-glow-x`, `-y`       | `50%`, then set on move   |
| `--margo-background-glow-opacity`       | from `opacity`            |
| `--margo-background-glow-noise-opacity` | from `noise`              |
| `--margo-background-glow-noise-tile`    | `120px`                   |

## Behavior

- It clones its only child and adds its class next to the child's `className`. The child's own handlers still run, after the decorator's.
- Visible only on hover, with a mouse: touch and pen are ignored, and the CSS applies only with `(hover: hover) and (pointer: fine)`.
- The glow is `--margo-color-primary`, drawn in `::before`, the noise in `::after`, both behind the content.
- The position and size are written to `--margo-background-glow-x`, `-y` and `-size` on the child.

Class: `margo-background-glow`.

## Example

```tsx
<BackgroundGlow opacity={0.3}>
  <Card>…</Card>
</BackgroundGlow>
```
