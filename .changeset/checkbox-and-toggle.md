---
"margo-ui": minor
---

Checkbox component added: a native `input[type="checkbox"]` with `appearance: none`, painted by the kit. Being the real control, it belongs to a form under its `name`, answers the space bar, follows a `label` that points at it and announces itself without a declared `role` — the component adds a class list and nothing else. The tick and the indeterminate bar are the same pseudo-element cut to two shapes with `clip-path`, so they never disagree about size or colour. `indeterminate` is the one prop the DOM cannot take as an attribute: it is mirrored onto the node in an effect.

Toggle component added: the same element carrying `role="switch"`, so what changes is the announcement — on and off — rather than the behaviour. The thumb is a pseudo-element moved with `translate`; its travel is the track's width minus its height, exposed as `--margo-toggle-travel` for anyone who resizes the switch.

Both read the way `Button` does — border strengthening on hover, `primary` on `focus-visible` with the same outline, the checked state carried by the border alone — and scope hover to `enabled`, since a disabled input still matches `:hover`.

`Chip` gains the focus ring the rest of the kit has: a chip rendered as a button or a link is now visible under keyboard focus.
