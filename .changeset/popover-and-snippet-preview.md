---
"margo-ui": minor
---

Popover component added: a surface that opens beside the element that opened it and stays in the flow of the page. Three parts — `Popover.Anchor`, the positioned box that holds the pair; `Popover`, the surface, controlled through `open` and `onClose`; and `Popover.Body`, which owns the padding, the gap and the scroll. `position` picks the side of the anchor and `align` the offset across it, twelve placements resolved as classes rather than measured. While it is open the component listens for a pointer press outside itself and its anchor and for escape, and asks to close through `onClose`; nothing closes on its own. The content is mounted on opening and cleared once the closing animation has finished.

`Snippet.Preview` added: a part mounted under the code, divided by a border, for showing what the snippet renders without a second box and a second heading around it. `Snippet` accepts children for it, and drops `overflow-hidden` so that a preview can open a surface past its edge; the bar keeps its own corner radius instead.

`isMargoLayerSupported` exported: the check `Layer` runs before calling `showModal()`, so an app can warn about a browser without the `dialog` element instead of leaving a modal that never opens. `Layer` itself no longer throws there — it stays shut, and mounts nothing.
