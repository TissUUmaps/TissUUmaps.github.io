# Class: ParquetTableData

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:19](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L19)

A table read from one or more Parquet files, such as the partitions of a
Dask dataset, whose rows follow one another in the order of the files

## Implements

- [`TableData`](../../core/interfaces/TableData.md)

## Constructors

### Constructor

> **new ParquetTableData**(`parts`, `numRows`, `columns`, `coordinateColumns`, `ids`, `names`, `categoricalColumns`): `ParquetTableData`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:37](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L37)

#### Parameters

##### parts

[`ParquetSource`](../type-aliases/ParquetSource.md)[]

##### numRows

`number`

##### columns

`string`[]

##### coordinateColumns

`CoordinateColumn`[]

##### ids

[`IDArray`](../../core/type-aliases/IDArray.md) \| `undefined`

##### names

`string`[] \| `undefined`

##### categoricalColumns

`string`[]

#### Returns

`ParquetTableData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:178](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L178)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`close`](../../core/interfaces/TableData.md#close)

***

### getColumnType()

> **getColumnType**(`column`): [`TableColumnType`](../../core/type-aliases/TableColumnType.md) \| `undefined`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:76](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L76)

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

[`TableColumnType`](../../core/type-aliases/TableColumnType.md) \| `undefined`

The column type, or `undefined` if the format does not say

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`getColumnType`](../../core/interfaces/TableData.md#getcolumntype)

***

### getIds()

> **getIds**(): [`IDArray`](../../core/type-aliases/IDArray.md)

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:60](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L60)

Returns an array of item IDs

IDs are either integers, held by an integer typed array or by 64-bit
floats (safe integers only), or strings, held by a plain array (see
`IDArray`). The returned array is owned by this data object: callers must
not modify it, and every call returns the very same array (see
[ItemsData](../../core/interfaces/ItemsData.md)). IDs are expected to be unique, which is not checked.

#### Returns

[`IDArray`](../../core/type-aliases/IDArray.md)

The item IDs

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`getIds`](../../core/interfaces/TableData.md#getids)

***

### getNames()

> **getNames**(): `string`[] \| `undefined`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:72](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L72)

Returns the item names if available, otherwise undefined

Optional: data types that never carry item names need not implement it.

The returned array is owned by this data object: callers must not modify it,
and every call returns the very same array (see [ItemsData](../../core/interfaces/ItemsData.md)).

#### Returns

`string`[] \| `undefined`

The item names, or `undefined` if not available

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`getNames`](../../core/interfaces/TableData.md#getnames)

***

### getSize()

> **getSize**(): `number`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L68)

Returns the total number of items

#### Returns

`number`

The item count

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`getSize`](../../core/interfaces/TableData.md#getsize)

***

### loadValueRange()

> **loadValueRange**(`column`, `options?`): `Promise`\<\[`number`, `number`\] \| `undefined`\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:159](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L159)

Loads a column's minimum and maximum values

Only implemented by table data that can determine the range more cheaply
than by loading the column (e.g. from file metadata); otherwise, callers
compute the range of the values loaded by [loadValues](../../core/interfaces/TableData.md#loadvalues).

#### Parameters

##### column

`string`

The column name

##### options?

Optional abort signal and progress callback

###### onProgress?

[`ProgressCallback`](../../core/type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\[`number`, `number`\] \| `undefined`\>

The numeric [min, max] value range of the column, or `undefined` if not numeric

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`loadValueRange`](../../core/interfaces/TableData.md#loadvaluerange)

***

### loadValues()

> **loadValues**\<`T`\>(`column`, `options?`): `Promise`\<[`TypedArrayOrArray`](../../core/type-aliases/TypedArrayOrArray.md)\<`T`\>\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:118](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L118)

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

[`ProgressCallback`](../../core/type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`TypedArrayOrArray`](../../core/type-aliases/TypedArrayOrArray.md)\<`T`\>\>

The column values

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`loadValues`](../../core/interfaces/TableData.md#loadvalues)

***

### resolveColumnQuery()

> **resolveColumnQuery**(`query`): `Promise`\<`string` \| `null`\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:107](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L107)

Resolves a query to an exact column name

#### Parameters

##### query

`string`

The column query

#### Returns

`Promise`\<`string` \| `null`\>

The resolved column name, or `null` if no match is found

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`resolveColumnQuery`](../../core/interfaces/TableData.md#resolvecolumnquery)

***

### suggestColumnQueries()

> **suggestColumnQueries**(`currentQuery`): `Promise`\<[`TableColumnQuerySuggestion`](../../core/type-aliases/TableColumnQuerySuggestion.md)[]\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:80](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L80)

Suggests column queries matching the current query

Suggestions are unique by query. Suggestions that resolve to the current
query come first, best matches first, followed by the other suggestions.
The list is not capped.

Within a leaf section (see [getColumnSections](../../core/interfaces/TableData.md#getcolumnsections)), the suggestions
are the leaf's columns, and the current query is matched against their
names.

#### Parameters

##### currentQuery

`string`

The partial column query, or the text to search for
within a leaf section

#### Returns

`Promise`\<[`TableColumnQuerySuggestion`](../../core/type-aliases/TableColumnQuerySuggestion.md)[]\>

A list of suggested column queries

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`suggestColumnQueries`](../../core/interfaces/TableData.md#suggestcolumnqueries)
