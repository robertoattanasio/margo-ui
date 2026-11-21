# Header

A row with a leading slot, a title and a trailing slot.

```ts
Header<T>(props: HeaderProps<T>): JSX.Element
```

| Prop      | Type              | Default    |                                    |
| --------- | ----------------- | ---------- | ---------------------------------- |
| `as`      | `ElementType`     | `"header"` | the element or component to render |
| `...rest` | the props of `as` |            | spread on the element              |

## Parts

| Part              | Element | Class                   |                                              |
| ----------------- | ------- | ----------------------- | -------------------------------------------- |
| `Header.Leading`  | `span`  | `margo-header-leading`  | before the title, such as a back button      |
| `Header.Title`    | `span`  | `margo-header-title`    | the title. Takes `id`, for `aria-labelledby` |
| `Header.Trailing` | `span`  | `margo-header-trailing` | after the title, such as a close button      |

## Data attributes

| Attribute                |               |
| ------------------------ | ------------- |
| `data-margo-header-slot` | on every part |

Class: `margo-header`.

## Example

```tsx
<Header>
  <Header.Title>Filters</Header.Title>
  <Header.Trailing>
    <Button aria-label="Close" onClick={close}>
      <Button.Icon>
        <MdClose />
      </Button.Icon>
    </Button>
  </Header.Trailing>
</Header>
```
