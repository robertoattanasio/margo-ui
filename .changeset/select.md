---
"margo-ui": minor
---

Select component added: a native `select` with `appearance: none`, wrapped in the box `Input` already draws — the same background, the same border strengthening on hover, `primary` on focus, the chevron pinned on the right. Being the real control, it submits under its `name`, answers `required`, opens with the keyboard and shows the system picker on mobile without the kit declaring a `role`.

The component owns its children: it walks `options` and renders one `option` per row, taking the caption from `itemExtractor` and the submitted value from `valueExtractor`. Both return a string, because an option holds text and nothing else survives in the open list. `placeholder` is the caption of the empty row, whose value is the empty string; it is a prompt hidden from the list unless `canBeEmpty` keeps it selectable, which is how the field is cleared. When that row is the selected one the box dims to `medium`, the way an input placeholder reads — a selector on the option rather than a line of JavaScript, so it needs neither state nor `required`.

The open list belongs to the operating system, so the options carry the theme's own colours — `main` and `on-main`, `primary-darken` on the selected row — for the browsers that honour them, and `color-scheme` does the rest. Hover inside the list stays the system's.
