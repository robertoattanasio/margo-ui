---
"margo-ui": patch
---

`Item.Icon` no longer pushes the row when it is the first thing mounted. The automatic margin that anchors a slot to the end is dropped in first position, so mounting the icon before the label leads the row instead of trailing it, with no reversed direction and no override at the call site.
