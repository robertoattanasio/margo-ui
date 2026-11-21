# Dialog

The box of a modal dialog, with a body and a footer. Put it inside a [Layer](./layer.md).

```ts
Dialog<T>(props: DialogProps<T>): JSX.Element
```

| Prop      | Type              | Default |                                    |
| --------- | ----------------- | ------- | ---------------------------------- |
| `as`      | `ElementType`     | `"div"` | the element or component to render |
| `...rest` | the props of `as` |         | spread on the element              |

## Parts

| Part            | Element | Class                 |                                         |
| --------------- | ------- | --------------------- | --------------------------------------- |
| `Dialog.Body`   | `div`   | `margo-dialog-body`   | the scrolling content. Takes `as`       |
| `Dialog.Footer` | `div`   | `margo-dialog-footer` | actions, aligned to the end. Takes `as` |

## Behavior

- Dialog only draws the box. Opening, closing, the backdrop and focus belong to `Layer`.
- Inside a `Layer` it fades in and out with it.

Class: `margo-dialog`.

## Example

```tsx
<Layer open={open} onClose={close}>
  <Dialog role="document" aria-labelledby="delete-title">
    <Header>
      <Header.Title id="delete-title">Delete project</Header.Title>
    </Header>
    <Dialog.Body>This can't be undone.</Dialog.Body>
    <Dialog.Footer>
      <Button onClick={close}>
        <Button.Label>Cancel</Button.Label>
      </Button>
      <Button onClick={remove}>
        <Button.Label>Delete</Button.Label>
      </Button>
    </Dialog.Footer>
  </Dialog>
</Layer>
```
