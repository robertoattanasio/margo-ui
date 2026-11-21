# Blockquote

A quotation block.

```ts
Blockquote<T>(props: BlockquoteProps<T>): JSX.Element
```

| Prop      | Type              | Default        |                                    |
| --------- | ----------------- | -------------- | ---------------------------------- |
| `as`      | `ElementType`     | `"blockquote"` | the element or component to render |
| `...rest` | the props of `as` |                | spread on the element              |

Class: `margo-blockquote`.

## Example

```tsx
<Blockquote>
  <p>Simplicity is prerequisite for reliability.</p>
</Blockquote>
```
