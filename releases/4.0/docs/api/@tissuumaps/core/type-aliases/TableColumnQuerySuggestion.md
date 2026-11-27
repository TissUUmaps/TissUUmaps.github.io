# Type Alias: TableColumnQuerySuggestion

> **TableColumnQuerySuggestion** = `object`

Defined in: [storage/table.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L34)

A column query suggested by `TableData.suggestColumnQueries`

## Properties

### group?

> `optional` **group?**: `boolean`

Defined in: [storage/table.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L53)

Whether the query continues into a group of columns, e.g. a path prefix

A group suggestion does not resolve to a column; it continues the query,
e.g. into the columns of a group or a matrix. Other suggestions are
expected to resolve to an exact column name.

#### Default Value

```ts
false
```

***

### name?

> `optional` **name?**: `string`

Defined in: [storage/table.ts:42](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L42)

The name to show for the suggested column, if the query is not one (e.g.
the gene name of a matrix column)

***

### query

> **query**: `string`

Defined in: [storage/table.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L36)

The suggested query, in the provider's own format
