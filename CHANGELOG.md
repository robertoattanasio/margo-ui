# margo-ui

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
