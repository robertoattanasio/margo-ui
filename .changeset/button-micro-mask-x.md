---
"margo-ui": minor
---

Add `ButtonMicro` and `MaskGradientX`.

- `ButtonMicro` is the smallest control of the kit: underlined text with no border and no surface, polymorphic, with the same click-then-blur as `Button` and an `active` state drawn in the accent colour. For indexes, footers and secondary actions.
- `MaskGradientX` is the horizontal counterpart of `MaskGradientY`, with `fade`, `fadeLeft`, `fadeRight`, `offsetLeft` and `offsetRight`, for rows that scroll sideways.

`NavigationBar` now holds its completed bar while it fades out. The progress was reset to zero in the same update that hid the bar, so the fill rewound to the left during the fade instead of the bar simply disappearing at full width.
