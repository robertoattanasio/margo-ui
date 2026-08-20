# margo-ui

## 4.0.1

### Patch Changes

- 8f62977: Minor fix in sheet styling

## 4.0.0

### Major Changes

- 18c02df: Replace the ad-hoc radius and border values with proportional token scales, and stop overriding
  Tailwind's `border-2`.

  Radii were never tokenised: components reached for `rounded-lg`, `rounded-md` and `rounded-sm`
  straight from Tailwind's default scale, so the kit's corner rhythm belonged to Tailwind rather than
  to margo, and a consumer had no single place to retune it. The kit now defines `--margo-radius` as
  the largest radius and derives the rest from it by division, exposed as `rounded-margo-1` (the
  whole), `rounded-margo-3/4` and `rounded-margo-1/2`. The name states the proportion, so the scale
  can gain a step later without renaming the existing ones. The three steps reproduce the previous
  values exactly, so nothing shifts visually. Set `--margo-radius` and every corner in
  the kit moves together, keeping its ratios.

  Borders follow the same shape: `--margo-border` replaces `--margo-border-width-2`, and the
  `border-margo` utility replaces `border-2` throughout the components. `rounded-full` stays outside
  both scales, since Toggle and Ripple need a circle rather than a step on a ramp.

  **Breaking:** the `--border-width-2` theme entry is gone, so `border-2` in your own code goes back
  to Tailwind's 2px instead of silently rendering the kit's 1.5px. Use `border-margo` where you meant
  the kit's border. `--margo-border-width-2` is gone with it; rename any override to `--margo-border`.
  Tailwind's own `rounded-*` utilities are untouched and still available.

  `cn` learns both scales. Custom utility names are invisible to tailwind-merge, and the failure is
  not a no-op: `border-margo` parses as a border _colour_, so `cn("border-margo", "border-border")`
  used to drop the width entirely and render a borderless surface. The radius steps were merely
  unknown, which is quieter but worse to debug — two radii survived the merge and the cascade picked
  the winner. `border-margo` is now registered in every `border-w-*` group and `rounded-margo-*` in
  every `rounded-*` group, so the scales deduplicate against each other and against Tailwind's own
  `rounded-*` and `border-*` utilities.

## 3.0.2

### Patch Changes

- 21243d3: Minor fix in clickable surface area for Input and Select components, Toggle and Checkbox UI refinements on click

## 3.0.1

### Patch Changes

- 57cd506: Ui variables fixes for light theme

## 3.0.0

### Major Changes

- Remove `Snippet`, `Snippet.Preview`, the `--margo-code-*` tokens and the `--margo-shadow-input`
  token with its `shadow-input` utility.

  `Snippet` was documentation infrastructure rather than a UI primitive, and its highlighter was a
  single regular expression tuned for TypeScript and TSX: `title` named the block for the reader but
  never selected a grammar, so CSS, shell and HTML blocks were coloured by the TypeScript rules.
  Build the code block in your own app and pair it with a dedicated highlighter, such as
  `@tanstack/highlight`. The `SnippetProps`, `SnippetPreviewProps`, `SnippetToken` and
  `SnippetTokenType` types are gone with it.

  `--margo-shadow-input` always carried the same value as `--margo-shadow-item`, so a second token
  bought nothing but a second thing to keep in sync. `Input` and `Select` now use `shadow-item` on
  hover, which renders identically. Replace `shadow-input` with `shadow-item` in your own markup.

  The `--margo-code-*` palette went with `Snippet`. Copy the values into your own tokens if you were
  theming a code block through them:

  ```css
  :root {
    --margo-code-surface: #fbfbfb;
    --margo-code-bar: #f1f1f1;
    --margo-code-plain: #24292f;
    --margo-code-comment: #8b949e;
    --margo-code-string: #0a7d3f;
    --margo-code-keyword: #a5309a;
    --margo-code-number: #b3510f;
    --margo-code-tag: #1f6fd6;
    --margo-code-attr: #7a5cd6;
    --margo-code-fn: #0f7c93;
    --margo-code-type: #1f6fd6;
    --margo-code-punct: #6e7781;
  }
  
  .dark {
    --margo-code-surface: #0d0d0d;
    --margo-code-bar: #161616;
    --margo-code-plain: #e6e6e6;
    --margo-code-comment: #6b6b6b;
    --margo-code-string: #7ee787;
    --margo-code-keyword: #ff7bd5;
    --margo-code-number: #ffab70;
    --margo-code-tag: #79c0ff;
    --margo-code-attr: #c3a6ff;
    --margo-code-fn: #56d4dd;
    --margo-code-type: #79c0ff;
    --margo-code-punct: #8b949e;
  }
  ```

## 2.1.0

### Minor Changes

- 36b8171: Checkbox component added: a native `input[type="checkbox"]` with `appearance: none`, painted by the kit. Being the real control, it belongs to a form under its `name`, answers the space bar, follows a `label` that points at it and announces itself without a declared `role` — the component adds a class list and nothing else. The tick and the indeterminate bar are the same pseudo-element cut to two shapes with `clip-path`, so they never disagree about size or colour. `indeterminate` is the one prop the DOM cannot take as an attribute: it is mirrored onto the node in an effect.

  Toggle component added: the same element carrying `role="switch"`, so what changes is the announcement — on and off — rather than the behaviour. The thumb is a pseudo-element moved with `translate`; its travel is the track's width minus its height, exposed as `--margo-toggle-travel` for anyone who resizes the switch.

  Both read the way `Button` does — border strengthening on hover, `primary` on `focus-visible` with the same outline, the checked state carried by the border alone — and scope hover to `enabled`, since a disabled input still matches `:hover`.

  `Chip` gains the focus ring the rest of the kit has: a chip rendered as a button or a link is now visible under keyboard focus.

- ab20daf: Popover component added: a surface that opens beside the element that opened it and stays in the flow of the page. Three parts — `Popover.Anchor`, the positioned box that holds the pair; `Popover`, the surface, controlled through `open` and `onClose`; and `Popover.Body`, which owns the padding, the gap and the scroll. `position` picks the side of the anchor and `align` the offset across it, twelve placements resolved as classes rather than measured. While it is open the component listens for a pointer press outside itself and its anchor and for escape, and asks to close through `onClose`; nothing closes on its own. The content is mounted on opening and cleared once the closing animation has finished.

  `Snippet.Preview` added: a part mounted under the code, divided by a border, for showing what the snippet renders without a second box and a second heading around it. `Snippet` accepts children for it, and drops `overflow-hidden` so that a preview can open a surface past its edge; the bar keeps its own corner radius instead.

  `isMargoLayerSupported` exported: the check `Layer` runs before calling `showModal()`, so an app can warn about a browser without the `dialog` element instead of leaving a modal that never opens. `Layer` itself no longer throws there — it stays shut, and mounts nothing.

- b228b57: Select component added: a native `select` with `appearance: none`, wrapped in the box `Input` already draws — the same background, the same border strengthening on hover, `primary` on focus, the chevron pinned on the right. Being the real control, it submits under its `name`, answers `required`, opens with the keyboard and shows the system picker on mobile without the kit declaring a `role`.

  The component owns its children: it walks `options` and renders one `option` per row, taking the caption from `itemExtractor` and the submitted value from `valueExtractor`. Both return a string, because an option holds text and nothing else survives in the open list. `placeholder` is the caption of the empty row, whose value is the empty string; it is a prompt hidden from the list unless `canBeEmpty` keeps it selectable, which is how the field is cleared. When that row is the selected one the box dims to `medium`, the way an input placeholder reads — a selector on the option rather than a line of JavaScript, so it needs neither state nor `required`.

  The open list belongs to the operating system, so the options carry the theme's own colours — `main` and `on-main`, `primary-darken` on the selected row — for the browsers that honour them, and `color-scheme` does the rest. Hover inside the list stays the system's.

## 2.0.1

### Patch Changes

- b6ea090: Button background color fix

## 2.0.0

### Major Changes

- e1dba8c: Input component added: a field shaped like an Item, with Input.Icon and Input.Text, whose focus and disabled states are read off the native input with focus-within and has rather than passed as props.

  Breakpoint 1440 added between 1280 and 1920, for a laptop docked to an external display.

  Colour token --margo-color-secondary renamed to --margo-color-low, exposed as --color-low instead of --color-secondary: the value is the lowest contrast step above the surface, not a secondary accent. Rename the custom property in every theme override, and swap bg-secondary, text-secondary and border-secondary for their low counterparts. Both --margo-color-low and the new --margo-color-low-alpha are now derived from --margo-color-main and --margo-color-on-main with color-mix, so retheming those two carries them along; the translucent one is for fills that sit over anything but the page surface. color-mix raises the browser floor to Safari 16.2 and Chrome 111.

  Label component added: the caption above a field, polymorphic with label as its default element, so the same treatment covers a section heading or the title of a group of controls through as. It accepts disabled, which dims it to follow the field it points at.

  Button and Item drop their tab stop and pointer handling in favour of the inert attribute, for clickable and disabled alike. The exported class names itemNotClickableClassName and buttonNotClickableClassName are gone, and the disabled ones no longer carry pointer-events-none. Being inert, a disabled Button or Item is now hidden from assistive technology rather than announced as disabled.

### Patch Changes

- 4c7e423: Button and Item color refactor. BackgroundGlow and BorderGlow interaction fix

## 1.5.1

### Patch Changes

- 89a5d4f: Minor fix of margo-grid on small devices

## 1.5.0

### Minor Changes

- 22e8a36: Code component added, Spinner and Tooltip accept aria-label, Table scroll without bounce, button gap custom property renamed to --margo-button-gap

## 1.4.0

### Minor Changes

- 68a5494: Button, Item behavior and color improvements, Ripple behavior improved, medium colour slightly changed

## 1.3.5

### Patch Changes

- 31fbe91: Margo Grid expanded with margo-grid-sub-rows-*

## 1.3.4

### Patch Changes

- 984c739: PointerHolder HOC component added

## 1.3.3

### Patch Changes

- 90cd1b4: UI improvements, Layer render improvements

## 1.3.2

### Patch Changes

- cda8b33: Point `repository` and `bugs` at this package's own repository instead of the documentation site, and link the npm package from the README.

## 1.3.1

### Patch Changes

- z-index max added for splash support

## 1.3.0

### Minor Changes

- dda6c98: Add `ButtonMicro` and `MaskGradientX`.

  - `ButtonMicro` is the smallest control of the kit: underlined text with no border and no surface, polymorphic, with the same click-then-blur as `Button` and an `active` state drawn in the accent colour. For indexes, footers and secondary actions.
  - `MaskGradientX` is the horizontal counterpart of `MaskGradientY`, with `fade`, `fadeLeft`, `fadeRight`, `offsetLeft` and `offsetRight`, for rows that scroll sideways.

  `NavigationBar` now holds its completed bar while it fades out. The progress was reset to zero in the same update that hid the bar, so the fill rewound to the left during the fade instead of the bar simply disappearing at full width.

- dda6c98: Add the layering components.

  - `Layer`: the engine, a native `dialog` opened as a modal. Controlled through `open` and `onClose`, with `dismissible` for the backdrop. Entry and exit are CSS only, through `@starting-style` and `allow-discrete`, and the page behind is locked with `:has()`.
  - `Dialog`: the panel that goes inside a Layer, with `Dialog.Body` and `Dialog.Footer`.
  - `Header`: a standalone bar with `Header.Leading`, `Header.Title` and `Header.Trailing`, for dialogs, sheets and mobile screens alike.

  A closed `Layer` is not rendered: the kit sets `display: grid` on the element, and an author declaration outranks the user agent rule that hides a closed dialog, so every closed layer was taking a viewport of space in the flow.

- dda6c98: Add `Sheet`, a panel anchored to an edge of the screen, with `side` for start, end, top or bottom, plus `Sheet.Body` and `Sheet.Footer`. It slides in and out through a transform scoped to an open dialog, so it rides the layer's own duration.

  `Layer` clips its overflow, so a panel translated off screen does not turn it into a scroll area, and no longer carries padding: the space around a centred panel now belongs to `Dialog`, which lets a sheet sit flush against its edge.

### Patch Changes

- dda6c98: `Item.Icon` no longer pushes the row when it is the first thing mounted. The automatic margin that anchors a slot to the end is dropped in first position, so mounting the icon before the label leads the row instead of trailing it, with no reversed direction and no override at the call site.
- dda6c98: `Layer` no longer jumps on close in Safari. WebKit does not implement the `overlay` property, so a closing dialog leaves the top layer immediately and used to fall back into the document flow while the exit was still running. The layer now carries its own `position: fixed`, its own stacking order through `--margo-layer-z-index`, and a `visibility` transition that keeps it on screen for the length of the exit even where the discrete transitions are ignored.

## 1.2.4

### Patch Changes

- 047f68b: NavigationBar, Snippet, Table, Item components added. Light theme colors refactor
- 26b5eec: Align the newer components with the conventions of the kit.

  - `Tooltip`: `placeholder` is now `content` and `ariaLabel` is now `label`, matching `Spinner`.
  - `Snippet` and `NavigationBar` are polymorphic through `Tag`, like every other component.
  - `NavigationBar` no longer announces an `aria-valuenow` it invents; it is a `progressbar` with no value.
  - Public data attributes are prefixed: `data-active`, `data-open`, `data-mode` and `data-animate` become `data-margo-*`.
  - `className` is always an optional string, never `string | null`.

## 1.2.3

### Patch Changes

- f9c9b8f: Splash, MaskGradientY components added

## 1.2.2

### Patch Changes

- 24a02b2: Margo Grid utilities added

## 1.2.1

### Patch Changes

- f1551ef: UI and CSS improvements

## 1.2.0

### Minor Changes

- f3102bd: ProgressBar component added, with `determinate` and `indeterminate` modes and a `--margo-progress-bar-fill` custom property to override the indicator
  Spinner component added

### Patch Changes

- f3102bd: Blockquote, ProgressBar, Spinner components added, shadow colors added

## 1.1.1

### Patch Changes

- Source tree split into `components`, `hoc`, `meta`, `hooks` and `utils`, one folder per unit with its own `type.ts` and `style.ts`
- Polymorphic components now type their props as `TagProps<T, OwnProps>` and forward them through `Tag.forward`, with no type assertion left in the components
- Class name constants renamed to camelCase `<component><piece>ClassName`
- `useTheme`, `Theme`, `ThemeClient`, `THEME` and `themeClient` renamed to `useMargoTheme`, `MargoTheme`, `MargoThemeClient`, `margoTheme` and `margoThemeClient`
- `Button` own `onClick` typed as `MouseEventHandler<HTMLElement>`, so `event.currentTarget` is `HTMLElement` whatever the rendered tag is
- Own props and HOC child props are no longer exported from the package entry point

## 1.1.0

### Minor Changes

- f052b31: BackgroundGlow, Chip, Tooltip components added

## 1.0.1

### Patch Changes

- d6c03c3: Fix Button focus-visible state colour
- 4ec299e: Ripple color opacity improved
