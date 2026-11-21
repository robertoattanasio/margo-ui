# Callout

A highlighted note, with an optional title.

```ts
Callout<T>(props: CalloutProps<T>): JSX.Element
```

| Prop      | Type              | Default   |                                    |
| --------- | ----------------- | --------- | ---------------------------------- |
| `as`      | `ElementType`     | `"aside"` | the element or component to render |
| `...rest` | the props of `as` |           | spread on the element              |

## Parts

| Part            | Element | Class                 |                       |
| --------------- | ------- | --------------------- | --------------------- |
| `Callout.Title` | `span`  | `margo-callout-title` | the title, `children` |

Class: `margo-callout`.

## Example

```tsx
<Callout>
  <Callout.Title>Note</Callout.Title>
  <p>Styles your classes always override.</p>
</Callout>
```
