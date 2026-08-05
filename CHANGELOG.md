# margo-ui

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
