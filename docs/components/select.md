# Select

A native `<select>` built from an array, with an arrow icon.

```ts
Select<T>(props: SelectProps<T>): JSX.Element
```

| Prop             | Type                                                        | Default |                                             |
| ---------------- | ----------------------------------------------------------- | ------- | ------------------------------------------- |
| `options`        | `readonly T[]`                                              | `[]`    | the items                                   |
| `itemExtractor`  | `({ row, index }) => string`                                | `null`  | the label of an option                      |
| `valueExtractor` | `({ row, index }) => string \| number`                      | `null`  | the value of an option, also its key        |
| `placeholder`    | `string`                                                    | `""`    | a first, empty option                       |
| `canBeEmpty`     | `boolean`                                                   | `false` | whether the placeholder can be chosen again |
| `active`         | `boolean`                                                   | `false` | a highlighted state                         |
| `clickable`      | `boolean`                                                   | `true`  | `false` sets `inert`                        |
| `...rest`        | the props of `<select>`, without `children`, `ref` included |         | spread on the element                       |

## Data attributes

| Attribute           |          |
| ------------------- | -------- |
| `data-margo-active` | `active` |

## Behavior

- `T` is inferred from `options`.
- The props of `<select>` go to the native select. `active`, `clickable` and `className` go to the wrapper.
- Without `canBeEmpty`, the placeholder is disabled and hidden from the list: it shows only until something is picked.
- Without `valueExtractor`, options are keyed by index and have no `value`.

Class: `margo-select`.

## Example

```tsx
<Select
  options={countries}
  itemExtractor={({ row }) => row.name}
  valueExtractor={({ row }) => row.code}
  placeholder="Country"
  value={country}
  onChange={(event) => setCountry(event.target.value)}
/>
```
