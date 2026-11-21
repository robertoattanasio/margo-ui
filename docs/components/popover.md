# Popover

A floating panel placed next to an anchor.

```ts
Popover(props: PopoverProps): JSX.Element
```

| Prop          | Type                                     | Default    |                                                       |
| ------------- | ---------------------------------------- | ---------- | ----------------------------------------------------- |
| `open`        | `boolean`                                | `false`    | whether it's open                                     |
| `onClose`     | `() => void`                             |            | asked to close, by `Escape` or a pointer down outside |
| `dismissible` | `boolean`                                | `true`     | whether `Escape` and outside clicks ask to close      |
| `placement`   | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | the side of the anchor                                |
| `align`       | `"start" \| "center" \| "end"`           | `"center"` | the alignment along that side                         |
| `...rest`     | the props of `<div>`                     |            | spread on the element                                 |

## Parts

| Part             | Element | Class                  |                                                                   |
| ---------------- | ------- | ---------------------- | ----------------------------------------------------------------- |
| `Popover.Anchor` | `div`   | `margo-popover-anchor` | wraps the trigger and the popover. Takes `as`                     |
| `Popover.Body`   | `div`   | `margo-popover-body`   | the scrolling content, 16rem wide, 14rem high at most. Takes `as` |

## Data attributes

| Attribute              |             |
| ---------------------- | ----------- |
| `data-margo-open`      | `open`      |
| `data-margo-placement` | `placement` |
| `data-margo-align`     | `align`     |

## Behavior

- Positioned with CSS only, `position: absolute` inside `Popover.Anchor`: it doesn't flip or shift to stay on screen.
- A pointer down inside the popover or inside its anchor doesn't close it.
- Closing waits for its animation before unmounting the children.
- Fades and scales in and out.
- Parts work from Server Components: only the root is a client component.

Class: `margo-popover`.

## Example

```tsx
<Popover.Anchor>
  <Button open={open} onClick={() => setOpen(!open)}>
    <Button.Label>Sort</Button.Label>
  </Button>
  <Popover open={open} onClose={() => setOpen(false)} align="start">
    <Popover.Body>
      <Item>
        <Item.Label>Newest</Item.Label>
      </Item>
      <Item>
        <Item.Label>Oldest</Item.Label>
      </Item>
    </Popover.Body>
  </Popover>
</Popover.Anchor>
```
