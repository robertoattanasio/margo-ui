# TextArea

A multi-line field: a box holding a native `<textarea>`.

```ts
TextArea<T>(props: TextAreaProps<T>): JSX.Element
```

| Prop        | Type              | Default |                                    |
| ----------- | ----------------- | ------- | ---------------------------------- |
| `as`        | `ElementType`     | `"div"` | the element or component to render |
| `active`    | `boolean`         | `false` | a highlighted state                |
| `clickable` | `boolean`         | `true`  | `false` sets `inert`               |
| `...rest`   | the props of `as` |         | spread on the element              |

## Parts

| Part            | Element    | Class                  |                                                                         |
| --------------- | ---------- | ---------------------- | ----------------------------------------------------------------------- |
| `TextArea.Text` | `textarea` | `margo-text-area-text` | the native textarea, every prop of `<textarea>`. `rows` defaults to `4` |

## Data attributes

| Attribute           |          |
| ------------------- | -------- |
| `data-margo-active` | `active` |

## Behavior

- The root is a box, not the textarea: `value`, `onChange` and the rest go on `TextArea.Text`.

Class: `margo-text-area`.

## Example

```tsx
<TextArea>
  <TextArea.Text placeholder="Message" value={message} onChange={(event) => setMessage(event.target.value)} />
</TextArea>
```
