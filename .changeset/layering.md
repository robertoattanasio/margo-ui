---
"margo-ui": minor
---

Add the layering components.

- `Layer`: the engine, a native `dialog` opened as a modal. Controlled through `open` and `onClose`, with `dismissible` for the backdrop. Entry and exit are CSS only, through `@starting-style` and `allow-discrete`, and the page behind is locked with `:has()`.
- `Dialog`: the panel that goes inside a Layer, with `Dialog.Body` and `Dialog.Footer`.
- `Header`: a standalone bar with `Header.Leading`, `Header.Title` and `Header.Trailing`, for dialogs, sheets and mobile screens alike.

A closed `Layer` is not rendered: the kit sets `display: grid` on the element, and an author declaration outranks the user agent rule that hides a closed dialog, so every closed layer was taking a viewport of space in the flow.
