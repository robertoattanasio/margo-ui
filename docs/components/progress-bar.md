# ProgressBar

A thin progress bar, determinate or indeterminate.

```ts
ProgressBar<T>(props: ProgressBarProps<T>): JSX.Element
```

| Prop      | Type                               | Default                                     |                                                           |
| --------- | ---------------------------------- | ------------------------------------------- | --------------------------------------------------------- |
| `as`      | `ElementType`                      | `"div"`                                     | the element or component to render                        |
| `mode`    | `"determinate" \| "indeterminate"` | `"indeterminate"`                           |                                                           |
| `value`   | `number`                           | `0`                                         | percent, clamped between 0 and 100. Used when determinate |
| `animate` | `boolean`                          | `true`                                      | animates changes of `value`                               |
| `delay`   | `number \| string`                 |                                             | before the animation starts. A number is milliseconds     |
| `fill`    | `string`                           | a gradient of `primary-darken` to `primary` | any CSS `background`                                      |
| `...rest` | the props of `as`                  |                                             | spread on the element                                     |

## Data attributes

| Attribute            |           |
| -------------------- | --------- |
| `data-margo-mode`    | `mode`    |
| `data-margo-animate` | `animate` |

## Custom properties

| Property                     | Set from |
| ---------------------------- | -------- |
| `--margo-progress-bar-fill`  | `fill`   |
| `--margo-progress-bar-value` | `value`  |
| `--margo-progress-bar-delay` | `delay`  |

## Behavior

- Has `role="progressbar"`. When determinate, also `aria-valuemin`, `aria-valuemax` and `aria-valuenow`.
- Indeterminate: a half-width segment slides across, forever.
- 2px high by default.

Class: `margo-progress-bar`.

## Example

```tsx
<ProgressBar mode="determinate" value={uploaded} aria-label="Upload" />
```
