---
"margo-ui": minor
---

`Label` no longer has an indent and a bottom margin by default. Pass `spaced` to get them back where the label sits above an `Input`, a `Select` or a `TextArea`:

```tsx
<Label spaced htmlFor="email">email</Label>
```

Labels next to a `Checkbox` or a `Toggle`, or used as plain captions, no longer need `className="mb-0 pl-0"`: remove it.
