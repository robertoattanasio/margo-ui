---
"margo-ui": patch
---

Align the newer components with the conventions of the kit.

- `Tooltip`: `placeholder` is now `content` and `ariaLabel` is now `label`, matching `Spinner`.
- `Snippet` and `NavigationBar` are polymorphic through `Tag`, like every other component.
- `NavigationBar` no longer announces an `aria-valuenow` it invents; it is a `progressbar` with no value.
- Public data attributes are prefixed: `data-active`, `data-open`, `data-mode` and `data-animate` become `data-margo-*`.
- `className` is always an optional string, never `string | null`.
