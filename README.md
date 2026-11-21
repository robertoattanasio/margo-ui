# margo-ui

Margo UI is a set of React components styled with plain CSS. Many components have smaller parts you can compose, and their state is exposed through `data-*` attributes. The component styles have zero specificity, so your own classes can override them directly.

Package: [npmjs.com/package/margo-ui](https://www.npmjs.com/package/margo-ui)

Documentation: [dev.robertoattanasio.com/margo-ui](https://dev.robertoattanasio.com/margo-ui)

## Installation

```sh
npm install margo-ui
```

React 19 and React DOM 19 are required as peer dependencies.

Import the stylesheet once in your app's entry point or main stylesheet:

```ts
import "margo-ui/css";
```

Then import and compose the components you need:

```tsx
import { Button } from "margo-ui";

<Button onClick={save}>
  <Button.Label>Save</Button.Label>
</Button>;
```

## API

Along with the components, Margo UI includes decorators that add effects to other elements and a theme defined with custom properties. Start with the guides to learn how the theme and styles work:

- [Theme](./docs/theme.md): colors, border and radius tokens, dark mode
- [Styling](./docs/styling.md): layers, classes, states, base styles

### Components

- [Blockquote](./docs/components/blockquote.md)
- [Button](./docs/components/button.md)
- [ButtonMicro](./docs/components/button-micro.md)
- [Callout](./docs/components/callout.md)
- [Card](./docs/components/card.md)
- [Checkbox](./docs/components/checkbox.md)
- [Chip](./docs/components/chip.md)
- [Code](./docs/components/code.md)
- [Dialog](./docs/components/dialog.md)
- [Header](./docs/components/header.md)
- [Input](./docs/components/input.md)
- [Item](./docs/components/item.md)
- [Label](./docs/components/label.md)
- [Layer](./docs/components/layer.md)
- [Popover](./docs/components/popover.md)
- [ProgressBar](./docs/components/progress-bar.md)
- [Select](./docs/components/select.md)
- [Sheet](./docs/components/sheet.md)
- [Slider](./docs/components/slider.md)
- [Spinner](./docs/components/spinner.md)
- [Table](./docs/components/table.md)
- [TextArea](./docs/components/text-area.md)
- [Toggle](./docs/components/toggle.md)
- [Tooltip](./docs/components/tooltip.md)

### Decorators

- [BackgroundGlow](./docs/decorators/background-glow.md)
- [BorderGlow](./docs/decorators/border-glow.md)
- [MaskGradientX](./docs/decorators/mask-gradient-x.md)
- [MaskGradientY](./docs/decorators/mask-gradient-y.md)
- [PointerHolder](./docs/decorators/pointer-holder.md)
- [Ripple](./docs/decorators/ripple.md)

## Scripts

For the available project scripts and what they do, see [docs/scripts.md](./docs/scripts.md).

## License

[MIT](./LICENSE)
