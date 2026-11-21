# Sheet

A panel that slides in from an edge, with a body and a footer. Put it inside a [Layer](./layer.md).

```ts
Sheet<T>(props: SheetProps<T>): JSX.Element
```

| Prop        | Type                                     | Default   |                                    |
| ----------- | ---------------------------------------- | --------- | ---------------------------------- |
| `as`        | `ElementType`                            | `"div"`   | the element or component to render |
| `placement` | `"top" \| "right" \| "bottom" \| "left"` | `"right"` | the edge it slides from            |
| `...rest`   | the props of `as`                        |           | spread on the element              |

## Parts

| Part           | Element | Class                |                                         |
| -------------- | ------- | -------------------- | --------------------------------------- |
| `Sheet.Body`   | `div`   | `margo-sheet-body`   | the scrolling content. Takes `as`       |
| `Sheet.Footer` | `div`   | `margo-sheet-footer` | actions, aligned to the end. Takes `as` |

## Data attributes

| Attribute              |                                                     |
| ---------------------- | --------------------------------------------------- |
| `data-margo-placement` | `placement`                                         |
| `data-margo-travel`    | always: tells the Layer it slides instead of fading |

## Behavior

- Slides in when an open `<dialog>` contains it, and out when it closes.
- Left and right: full height, 85% wide up to 26rem. Top and bottom: full width, up to 40% high.
- A border on the side facing the page.

Class: `margo-sheet`.

## Example

```tsx
<Layer open={open} onClose={close}>
  <Sheet placement="left">
    <Header>
      <Header.Title>Menu</Header.Title>
    </Header>
    <Sheet.Body>…</Sheet.Body>
  </Sheet>
</Layer>
```
