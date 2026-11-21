# Table

A table in a horizontally scrolling wrapper, with parts for every element.

```ts
Table<T>(props: TableProps<T>): JSX.Element
```

| Prop      | Type              | Default   |                                    |
| --------- | ----------------- | --------- | ---------------------------------- |
| `as`      | `ElementType`     | `"table"` | the element or component to render |
| `...rest` | the props of `as` |           | spread on the element              |

## Parts

| Part             | Element | Class                   |     |
| ---------------- | ------- | ----------------------- | --- |
| `Table.Head`     | `thead` | `margo-table-head`      |     |
| `Table.Body`     | `tbody` | `margo-table-body`      |     |
| `Table.Row`      | `tr`    | `margo-table-row`       |     |
| `Table.HeadCell` | `th`    | `margo-table-head-cell` |     |
| `Table.Cell`     | `td`    | `margo-table-cell`      |     |

## Behavior

- The table sits in a `div.margo-table-wrapper`. `className` and the other props go to the table, not the wrapper.
- Every part takes `as`.

Class: `margo-table`.

## Example

```tsx
<Table>
  <Table.Head>
    <Table.Row>
      <Table.HeadCell>Name</Table.HeadCell>
      <Table.HeadCell>Role</Table.HeadCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Ada</Table.Cell>
      <Table.Cell>Engineer</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```
