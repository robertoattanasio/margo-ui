# Layer

A full-screen modal `<dialog>` with a backdrop. It holds a [Dialog](./dialog.md), a [Sheet](./sheet.md), or anything else, and keeps it mounted until its closing animation ends.

```ts
Layer(props: LayerProps): JSX.Element
```

| Prop          | Type                                                  | Default |                                                        |
| ------------- | ----------------------------------------------------- | ------- | ------------------------------------------------------ |
| `open`        | `boolean`                                             | `false` | whether it's open                                      |
| `onClose`     | `() => void`                                          |         | asked to close, by `Escape` or a click on the backdrop |
| `dismissible` | `boolean`                                             | `true`  | whether `Escape` and the backdrop ask to close         |
| `...rest`     | the props of `<dialog>`, without `open` and `onClose` |         | spread on the element                                  |

## Behavior

- `open` is controlled: the layer never closes itself. `Escape` and a click outside its children call `onClose`, and the parent sets `open` to `false`.
- Opening calls `showModal()`: the page behind is inert and focus moves inside. The page doesn't scroll while it's open.
- Closing waits for every animation in the layer to finish before unmounting the children.
- Its direct children fade in and out, except a Sheet, which slides.
- The backdrop is black at 50% with a 4px blur, fading in and out.
- Fixed, full viewport, `z-index: 100`, children centered.
- Without `<dialog>` support, children mount and unmount with `open`. `isMargoLayerSupported()` tells whether it's supported.
- A client component.

Class: `margo-layer`.

## Example

```tsx
<Layer open={open} onClose={() => setOpen(false)}>
  <Dialog>…</Dialog>
</Layer>
```
