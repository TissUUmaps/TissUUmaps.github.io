# Interface: TableData

Defined in: [storage/table.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L67)

Loaded tabular data providing column-wise access

The items of a table are its rows, each of which annotates one item of
another data object (see `AnnotatedDataSource`); the item IDs and names are
those of the annotated items, in row order.

A query is what is typed to find a column (partial, in the provider's own
format); a column is the exact name that [resolveColumnQuery](#resolvecolumnquery) returns,
which is saved and passed to [loadValues](#loadvalues).

## Extends

- [`ItemsData`](ItemsData.md)

## Properties

### getNames?

> `optional` **getNames?**: () => `string`[] \| `undefined`

Defined in: [storage/base.ts:66](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/base.ts#L66)

Returns the item names if available, otherwise undefined

Optional: data types that never carry item names need not implement it.

The returned array is owned by this data object: callers must not modify it,
and every call returns the very same array (see [ItemsData](ItemsData.md)).

#### Returns

`string`[] \| `undefined`

The item names, or `undefined` if not available

#### Inherited from

[`ItemsData`](ItemsData.md).[`getNames`](ItemsData.md#getnames)

## Methods

### close()

> **close**(): `void`

Defined in: [storage/base.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/base.ts#L18)

Releases all resources held by this data object

#### Returns

`void`

#### Inherited from

[`ItemsData`](ItemsData.md).[`close`](ItemsData.md#close)

***

### describeColumn()?

> `optional` **describeColumn**(`column`, `options?`): `Promise`\<\{ `name`: `string`; `sectionId`: `string`; \} \| `null`\>

Defined in: [storage/table.ts:129](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L129)

Loads the leaf section of a column and the column's name in it (see
[getColumnSections](#getcolumnsections))

Only implemented by table data that implements [getColumnSections](#getcolumnsections).
Async, as naming a column may take a read (e.g. gene names from a column
of `var`).

#### Parameters

##### column

`string`

The column name

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\{ `name`: `string`; `sectionId`: `string`; \} \| `null`\>

The `id` of the column's leaf section and the column's name,
or `null` if the column belongs to no section

***

### getColumnSections()?

> `optional` **getColumnSections**(): [`TableColumnSection`](../type-aliases/TableColumnSection.md)[]

Defined in: [storage/table.ts:114](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L114)

Returns the sections of the table's columns, by the conventions of its
format

Only implemented by table data whose format can group its columns (e.g. the
observations and the features of AnnData); callers without it pick columns
by query (see [suggestColumnQueries](#suggestcolumnqueries)).

#### Returns

[`TableColumnSection`](../type-aliases/TableColumnSection.md)[]

The top-level sections, in the canonical order of the format;
none if the table has no sections

***

### getColumnType()?

> `optional` **getColumnType**(`column`): [`TableColumnType`](../type-aliases/TableColumnType.md) \| `undefined`

Defined in: [storage/table.ts:166](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L166)

Returns the type of a column, as its encoding declares

Only implemented by table data whose format declares column types that the
loaded values do not reveal (e.g. AnnData categoricals with numeric
categories); callers without it, or given `undefined`, inspect the values
(see `TableUtils.loadColumnType`).

#### Parameters

##### column

`string`

The column name

#### Returns

[`TableColumnType`](../type-aliases/TableColumnType.md) \| `undefined`

The column type, or `undefined` if the format does not say

***

### getIds()

> **getIds**(): [`IDArray`](../type-aliases/IDArray.md)

Defined in: [storage/base.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/base.ts#L47)

Returns an array of item IDs

IDs are either integers, held by an integer typed array or by 64-bit
floats (safe integers only), or strings, held by a plain array (see
`IDArray`). The returned array is owned by this data object: callers must
not modify it, and every call returns the very same array (see
[ItemsData](ItemsData.md)). IDs are expected to be unique, which is not checked.

#### Returns

[`IDArray`](../type-aliases/IDArray.md)

The item IDs

#### Inherited from

[`ItemsData`](ItemsData.md).[`getIds`](ItemsData.md#getids)

***

### getSize()

> **getSize**(): `number`

Defined in: [storage/base.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/base.ts#L54)

Returns the total number of items

#### Returns

`number`

The item count

#### Inherited from

[`ItemsData`](ItemsData.md).[`getSize`](ItemsData.md#getsize)

***

### loadUniqueValueCounts()?

> `optional` **loadUniqueValueCounts**\<`T`\>(`column`, `options?`): `Promise`\<`Map`\<`T`, `number`\>\>

Defined in: [storage/table.ts:197](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L197)

Loads the number of rows per unique value of a column

Only implemented by table data that can count the values more cheaply
than by loading the column (e.g. from file metadata); otherwise, callers
count the values loaded by [loadValues](#loadvalues).

#### Type Parameters

##### T

`T`

Element type of the column

#### Parameters

##### column

`string`

The column name

##### options?

Optional abort signal and progress callback

###### onProgress?

[`ProgressCallback`](../type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`Map`\<`T`, `number`\>\>

The row count of every unique column value, keyed by value, in the
order the values first appear

***

### loadValueRange()?

> `optional` **loadValueRange**(`column`, `options?`): `Promise`\<\[`number`, `number`\] \| `undefined`\>

Defined in: [storage/table.ts:213](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L213)

Loads a column's minimum and maximum values

Only implemented by table data that can determine the range more cheaply
than by loading the column (e.g. from file metadata); otherwise, callers
compute the range of the values loaded by [loadValues](#loadvalues).

#### Parameters

##### column

`string`

The column name

##### options?

Optional abort signal and progress callback

###### onProgress?

[`ProgressCallback`](../type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\[`number`, `number`\] \| `undefined`\>

The numeric [min, max] value range of the column, or `undefined` if not numeric

***

### loadValues()

> **loadValues**\<`T`\>(`column`, `options?`): `Promise`\<[`TypedArrayOrArray`](../type-aliases/TypedArrayOrArray.md)\<`T`\>\>

Defined in: [storage/table.ts:179](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L179)

Loads a column's values

Numeric columns are loaded as numeric typed arrays, all other columns as
plain arrays (see `TypedArrayOrArray`).

#### Type Parameters

##### T

`T`

Element type of the returned array

#### Parameters

##### column

`string`

The column name

##### options?

Optional abort signal and progress callback

###### onProgress?

[`ProgressCallback`](../type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`TypedArrayOrArray`](../type-aliases/TypedArrayOrArray.md)\<`T`\>\>

The column values

***

### mapColumn()?

> `optional` **mapColumn**(`column`, `options`): `Promise`\<`string` \| `null`\>

Defined in: [storage/table.ts:150](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L150)

Loads the column of another leaf section that holds the same entity
(e.g. the same gene in another expression matrix), as far as the format
tells

Only implemented by table data that implements [getColumnSections](#getcolumnsections).
Columns map only between the leaves below one top-level section; names
are never used to decide that.

#### Parameters

##### column

`string`

The column name

##### options

The `id` of the leaf section to map the column to
(`sectionId`) and an optional abort signal

###### sectionId

`string`

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`string` \| `null`\>

The column of the leaf section, or `null` if it has none for
the entity

#### Throws

Error if the table has no leaf section with the given `id`

***

### resolveColumnQuery()

> **resolveColumnQuery**(`query`, `options?`): `Promise`\<`string` \| `null`\>

Defined in: [storage/table.ts:98](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L98)

Resolves a query to an exact column name

#### Parameters

##### query

`string`

The column query

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`string` \| `null`\>

The resolved column name, or `null` if no match is found

***

### suggestColumnQueries()

> **suggestColumnQueries**(`currentQuery`, `options?`): `Promise`\<[`TableColumnQuerySuggestion`](../type-aliases/TableColumnQuerySuggestion.md)[]\>

Defined in: [storage/table.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L86)

Suggests column queries matching the current query

Suggestions are unique by query. Suggestions that resolve to the current
query come first, best matches first, followed by the other suggestions.
The list is not capped.

Within a leaf section (see [getColumnSections](#getcolumnsections)), the suggestions
are the leaf's columns, and the current query is matched against their
names.

#### Parameters

##### currentQuery

`string`

The partial column query, or the text to search for
within a leaf section

##### options?

The `id` of a leaf section from
[getColumnSections](#getcolumnsections) (`sectionId`), if any, and an optional abort
signal

###### sectionId?

`string`

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`TableColumnQuerySuggestion`](../type-aliases/TableColumnQuerySuggestion.md)[]\>

A list of suggested column queries
