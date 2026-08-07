---
"margo-ui": minor
---

Add `Sheet`, a panel anchored to an edge of the screen, with `side` for start, end, top or bottom, plus `Sheet.Body` and `Sheet.Footer`. It slides in and out through a transform scoped to an open dialog, so it rides the layer's own duration.

`Layer` clips its overflow, so a panel translated off screen does not turn it into a scroll area, and no longer carries padding: the space around a centred panel now belongs to `Dialog`, which lets a sheet sit flush against its edge.
