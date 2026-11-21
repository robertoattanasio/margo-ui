# Code

Inline code.

```ts
Code<T>(props: CodeProps<T>): JSX.Element
```

| Prop      | Type              | Default  |                                    |
| --------- | ----------------- | -------- | ---------------------------------- |
| `as`      | `ElementType`     | `"code"` | the element or component to render |
| `filled`  | `boolean`         | `false`  | adds a background                  |
| `...rest` | the props of `as` |          | spread on the element              |

## Data attributes

| Attribute           |          |
| ------------------- | -------- |
| `data-margo-filled` | `filled` |

Class: `margo-code`.

## Example

```tsx
<Code filled>npm install margo-ui</Code>
```
