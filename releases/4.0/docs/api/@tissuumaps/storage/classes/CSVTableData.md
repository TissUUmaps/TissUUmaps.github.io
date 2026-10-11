# Class: CSVTableData

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:8](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L8)

Loaded tabular data providing column-wise access

The items of a table are its rows, each of which annotates one item of
another data object (see `AnnotatedDataSource`); the item IDs and names are
those of the annotated items, in row order.

## Implements

- [`TableData`](../../core/interfaces/TableData.md)

## Constructors

### Constructor

> **new CSVTableData**(`n`, `ids`, `names`, `columns`, `columnValues`): `CSVTableData`

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L18)

#### Parameters

##### n

`number`

##### ids

[`IDArray`](../../core/type-aliases/IDArray.md) \| `undefined`

##### names

`string`[] \| `undefined`

##### columns

`string`[]

##### columnValues

`Map`\<`string`, `string`[] \| `Float32Array`\<`ArrayBufferLike`\> \| `Float64Array`\<`ArrayBufferLike`\>\>

#### Returns

`CSVTableData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:96](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L96)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`close`](../../core/interfaces/TableData.md#close)

***

### getIds()

> **getIds**(): [`IDArray`](../../core/type-aliases/IDArray.md)

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L32)

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

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L44)

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

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:40](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L40)

Returns the total number of items

#### Returns

`number`

The item count

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`getSize`](../../core/interfaces/TableData.md#getsize)

***

### loadValues()

> **loadValues**\<`T`\>(`column`): `Promise`\<[`TypedArrayOrArray`](../../core/type-aliases/TypedArrayOrArray.md)\<`T`\>\>

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L86)

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

#### Returns

`Promise`\<[`TypedArrayOrArray`](../../core/type-aliases/TypedArrayOrArray.md)\<`T`\>\>

The column values

#### Implementation of

[`TableData`](../../core/interfaces/TableData.md).[`loadValues`](../../core/interfaces/TableData.md#loadvalues)

***

### resolveColumnQuery()

> **resolveColumnQuery**(`query`): `Promise`\<`string` \| `null`\>

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:75](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L75)

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

Defined in: [@tissuumaps-storage/src/csv/CSVTableData.ts:48](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableData.ts#L48)

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
