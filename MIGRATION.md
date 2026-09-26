# Migrating to margo-ui 6.0.0

Instructions for updating a project from margo-ui 5.x to 6.0.0. Each section says what changed, what to search for in the project, and what to replace it with.

## Scrollbars are visible

`base.css` no longer hides scrollbars. Scrollable areas now show the browser's scrollbar.

Search the project for areas that scroll (`overflow-auto`, `overflow-x-auto`, `overflow-y-auto`, `overflow-scroll`). Where the scrollbar must stay hidden, add it back on that element only:

```css
.no-scrollbar {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
```

## No `canvas` width override

`canvas { width: 100% !important }` is gone from `base.css`.

Search for `<canvas` and for libraries that render one (three.js, charts). If a canvas relied on filling its container, give it `w-full` or size it explicitly.

## Parts take children

Parts receive their content as `children` instead of a prop.

| search                 | replace with                     |
| ---------------------- | -------------------------------- |
| `<Button.Label label=` | `<Button.Label>…</Button.Label>` |
| `<Button.Icon icon=`   | `<Button.Icon>…</Button.Icon>`   |
| `<Header.Title title=` | `<Header.Title>…</Header.Title>` |
| `<Item.Label label=`   | `<Item.Label>…</Item.Label>`     |
| `<Item.Icon icon=`     | `<Item.Icon>…</Item.Icon>`       |
| `<Input.Icon icon=`    | `<Input.Icon>…</Input.Icon>`     |

```tsx
// before
<Button.Label label="save" />
<Button.Icon icon={<MdSave />} />
<Header.Title title="Settings" id={titleId} />

// after
<Button.Label>save</Button.Label>
<Button.Icon>
  <MdSave />
</Button.Icon>
<Header.Title id={titleId}>Settings</Header.Title>
```

Keep every other prop (`className`, `id`) as it is.

`Button.IconLabel` does not change: it still takes `icon` and `label` props. Only the parts passed into them change:

```tsx
// before
<Button.IconLabel icon={<Button.Icon icon={<MdSave />} />} label={<Button.Label label="save" />} />

// after
<Button.IconLabel
  icon={
    <Button.Icon>
      <MdSave />
    </Button.Icon>
  }
  label={<Button.Label>save</Button.Label>}
/>
```

## `onClickBlur` is removed

`Button`, `Item` and `ButtonMicro` no longer accept `onClickBlur`.

Search for `onClickBlur`:

- `onClickBlur={handler}` becomes `onClick={handler}`
- `onClickBlur={() => {}}` (used only for the blur) is deleted
- if the element already has an `onClick`, merge the two handlers into one `onClick`

The focus ring is handled by `:focus-visible`, which browsers don't show after a mouse click.

## `disabled` is native

On `Button` and `Item`, `disabled` no longer makes the element `inert`:

- rendered as a `<button>`, it sets the native `disabled` attribute
- rendered as anything else, it sets `aria-disabled`

No code change is needed for plain usage. Check these two cases:

- a disabled `Button` of `type="submit"` inside a form: pressing Enter in a field no longer submits the form through it. Any code that blocked that submission by hand can go
- tests or selectors that looked for `inert` on a disabled button: use `disabled` or `aria-disabled` instead

`clickable={false}` does not change: it still uses `inert`, for UI-only states like loading.

## Button exposes `data-margo-active`

`Button` renders `data-margo-active="true|false"` instead of `data-active` (which was only present when active), like every other component.

Search for `data-active`, `data-[active]` and `[data-active]` in styles and tests, and replace them with `data-margo-active="true"` / `data-[margo-active=true]`.

## `cn` knows the kit's line heights and shadows

`cn` now treats `leading-mc` … `leading-2xl` as line heights and `shadow-card`, `shadow-button`, `shadow-item`, `shadow-chip` as shadows, and no longer lets a `text-*` class remove a `leading-*` class.

Two visible effects to check:

- a `leading-*` written before a `text-*` in the same `cn` call used to be dropped silently. It now applies. Search for `cn(` calls and class strings containing both `leading-` and `text-`, and check the line height of those elements still looks right
- `shadow-none` (or any `shadow-*`) passed in `className` now reliably replaces a component's own shadow. Remove any workaround such as `!shadow-none`

## A non-dismissible `Layer` ignores Escape

`dismissible={false}` on `Layer` now blocks Escape as well as backdrop clicks, like it already did on `Popover`. Only your own controls close it.

Search for `dismissible={false}` on `Layer`: make sure each one renders a button that calls `onClose` (or sets the open state to false), otherwise the user can't leave.

## `Chip` merges `className` last

On an active `Chip`, classes passed in `className` now win over the active colours (`bg-on-main text-main`). Search for `<Chip` with both `active` and a `className` that sets a background or text colour, and check the active state still looks right.

## `Card` highlights on keyboard focus only

The primary border of a focused `Card` now appears on `focus-visible` only, not after a mouse click. No code change needed.

## One name for placement

Placement props are renamed, and their values are physical sides.

| component          | before                                         | after                                              |
| ------------------ | ---------------------------------------------- | -------------------------------------------------- |
| `Popover`          | `position="up" \| "down" \| "left" \| "right"` | `placement="top" \| "bottom" \| "left" \| "right"` |
| `Tooltip`          | `position="up" \| "down" \| "left" \| "right"` | `placement="top" \| "bottom" \| "left" \| "right"` |
| `BorderGlow`       | `position="up" \| "down" \| … \| "all"`        | `placement="top" \| "bottom" \| … \| "all"`        |
| `Sheet`            | `side="start" \| "end" \| "top" \| "bottom"`   | `placement="left" \| "right" \| "top" \| "bottom"` |
| `Button.IconLabel` | `side="start" \| "end"`                        | `direction="left" \| "right"`                      |

Value mapping: `up` → `top`, `down` → `bottom`, `start` → `left`, `end` → `right`. `left` and `right` stay the same. The defaults are unchanged in effect: Popover and Tooltip open on the bottom, Sheet slides from the right, the label slides out to the right.

Types are renamed too:

| before                | after                      |
| --------------------- | -------------------------- |
| `PopoverPosition`     | `PopoverPlacement`         |
| `TooltipPosition`     | `TooltipPlacement`         |
| `BorderGlowPosition`  | `BorderGlowPlacement`      |
| `SheetSide`           | `SheetPlacement`           |
| `ButtonIconLabelSide` | `ButtonIconLabelDirection` |

`Sheet` exposes `data-margo-placement` instead of `data-margo-side`, with the new values. Search for `data-margo-side` in styles and tests.

`Popover`'s `align="start" | "center" | "end"` does not change.
