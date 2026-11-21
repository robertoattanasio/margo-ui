# Tooltip

A bubble shown on hover or focus, next to its children.

```ts
Tooltip<T>(props: TooltipProps<T>): JSX.Element
```

| Prop        | Type                                     | Default    |                                                     |
| ----------- | ---------------------------------------- | ---------- | --------------------------------------------------- |
| `as`        | `ElementType`                            | `"div"`    | the element or component to render                  |
| `content`   | `ReactNode`                              |            | what the bubble shows                               |
| `label`     | `string`                                 |            | the bubble's `aria-label` while it has no `content` |
| `placement` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` |                                                     |
| `id`        | `string`                                 |            | on the bubble, for `aria-describedby`               |
| `...rest`   | the props of `as`                        |            | spread on the element                               |

## Data attributes

| Attribute              |                                         |
| ---------------------- | --------------------------------------- |
| `data-margo-filled`    | on the bubble: whether it has `content` |
| `data-margo-placement` | on the bubble: `placement`              |

## Behavior

- The bubble shows only when it has `content`, on hover or when focus is inside.
- It keeps the last `content` after `content` is cleared, so it fades out with its text.
- The bubble's text is lowercase and on one line.
- A client component.

Class: `margo-tooltip`.

## Example

```tsx
<Tooltip content="Copy link" placement="top" id="copy-tip">
  <Button aria-describedby="copy-tip" onClick={copy}>
    <Button.Icon>
      <MdLink />
    </Button.Icon>
  </Button>
</Tooltip>
```
