# Class: ParquetTableData

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:14](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L14)

Loaded tabular data providing column-wise access

The items of a table are its rows, each of which annotates one item of
another data object (see `AnnotatedDataSource`); the item IDs and names are
those of the annotated items, in row order.

## Implements

- [`TableData`](../../core/interfaces/TableData.md)

## Constructors

### Constructor

> **new ParquetTableData**(`source`, `numRows`, `columns`, `coordinateColumns`, `ids`, `names`): `ParquetTableData`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L30)

#### Parameters

##### source

[`ParquetSource`](../type-aliases/ParquetSource.md)

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

#### Returns

`ParquetTableData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:165](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L165)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`close`](../../core/interfaces/TableData.md#close)

***

### getIds()

> **getIds**(): [`IDArray`](../../core/type-aliases/IDArray.md)

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L51)

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

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:63](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L63)

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

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L59)

Returns the total number of items

#### Returns

`number`

The item count

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`getSize`](../../core/interfaces/TableData.md#getsize)

***

### loadValueRange()

> **loadValueRange**(`column`, `options?`): `Promise`\<\[`number`, `number`\] \| `undefined`\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:146](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L146)

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

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L105)

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

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:94](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L94)

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

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableData.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableData.ts#L67)

Returns column query suggestions for the current query

The query format is up to the provider. Suggestions matching the current
query come first, best matches first, followed by the other suggestions.
The list is not capped.

#### Parameters

##### currentQuery

`string`

The partial column query to autocomplete

#### Returns

`Promise`\<[`TableColumnQuerySuggestion`](../../core/type-aliases/TableColumnQuerySuggestion.md)[]\>

A list of suggested column queries

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`suggestColumnQueries`](../../core/interfaces/TableData.md#suggestcolumnqueries)
