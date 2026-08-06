# margo-ui

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
