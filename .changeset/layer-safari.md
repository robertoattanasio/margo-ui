---
"margo-ui": patch
---

`Layer` no longer jumps on close in Safari. WebKit does not implement the `overlay` property, so a closing dialog leaves the top layer immediately and used to fall back into the document flow while the exit was still running. The layer now carries its own `position: fixed`, its own stacking order through `--margo-layer-z-index`, and a `visibility` transition that keeps it on screen for the length of the exit even where the discrete transitions are ignored.
