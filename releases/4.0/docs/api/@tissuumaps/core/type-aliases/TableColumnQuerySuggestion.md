# Type Alias: TableColumnQuerySuggestion

> **TableColumnQuerySuggestion** = `object`

Defined in: [storage/table.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L7)

A column query suggested by `TableData.suggestColumnQueries`

## Properties

### group?

> `optional` **group?**: `boolean`

Defined in: [storage/table.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L20)

Whether the query continues into a group of columns

A group suggestion does not resolve to a column; it continues the query,
e.g. into the columns of a group or a matrix. Other suggestions are
expected to resolve to an exact column name.

#### Default Value

```ts
false
```

***

### query

> **query**: `string`

Defined in: [storage/table.ts:9](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L9)

The suggested query, in the provider's own format
