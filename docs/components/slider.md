# Slider

A native range input, with the filled part of the track drawn.

```ts
Slider(props: SliderProps): JSX.Element
```

| Prop      | Type                                                   | Default |                       |
| --------- | ------------------------------------------------------ | ------- | --------------------- |
| `min`     | `number`                                               | `0`     |                       |
| `max`     | `number`                                               | `100`   |                       |
| `...rest` | the props of `<input>`, without `type`, `ref` included |         | spread on the element |

## Custom properties

| Property                      | Default                                  |
| ----------------------------- | ---------------------------------------- |
| `--margo-slider-track`        | `--margo-color-border`                   |
| `--margo-slider-fill`         | `--margo-color-primary`                  |
| `--margo-slider-thumb`        | `--margo-color-primary`                  |
| `--margo-slider-thumb-border` | `--margo-color-primary-darken`           |
| `--margo-slider-thumb-shadow` | a soft shadow, darker in dark mode       |
| `--margo-slider-thumb-size`   | `1rem`                                   |
| `--margo-slider-track-size`   | `0.375rem`                               |
| `--margo-slider-value`        | set by the component: the filled percent |

## Behavior

- Controlled or uncontrolled like the native input.
- The filled part follows `value`, or `defaultValue`, or the middle of the range. While dragging, it's updated on the element directly, then `onChange` runs.
- A client component.

Class: `margo-slider`.

## Example

```tsx
<Slider min={0} max={10} value={volume} onChange={(event) => setVolume(event.target.valueAsNumber)} />
```
