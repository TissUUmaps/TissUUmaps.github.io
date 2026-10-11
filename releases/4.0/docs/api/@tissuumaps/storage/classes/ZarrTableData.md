# Class: ZarrTableData

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableData.ts:4](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableData.ts#L4)

The table data of a Zarr store, see [ZarrTableDataProvider](ZarrTableDataProvider.md)

## Extends

- `HierarchicalTableDataBase`

## Constructors

### Constructor

> **new ZarrTableData**(`table`, `numRows`, `ids`, `names`): `ZarrTableData`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L24)

#### Parameters

##### table

`HierarchicalTable`

##### numRows

`number`

##### ids

[`IDArray`](../../core/type-aliases/IDArray.md) \| `undefined`

##### names

`string`[] \| `undefined`

#### Returns

`ZarrTableData`

#### Inherited from

`HierarchicalTableDataBase.constructor`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:92](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L92)

Releases all resources held by this data object

#### Returns

`void`

#### Inherited from

`HierarchicalTableDataBase.close`

***

### getIds()

> **getIds**(): [`IDArray`](../../core/type-aliases/IDArray.md)

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L36)

Returns an array of item IDs

IDs are either integers, held by an integer typed array or by 64-bit
floats (safe integers only), or strings, held by a plain array (see
`IDArray`). The returned array is owned by this data object: callers must
not modify it, and every call returns the very same array (see
[ItemsData](../../core/interfaces/ItemsData.md)). IDs are expected to be unique, which is not checked.

#### Returns

[`IDArray`](../../core/type-aliases/IDArray.md)

The item IDs

#### Inherited from

`HierarchicalTableDataBase.getIds`

***

### getNames()

> **getNames**(): `string`[] \| `undefined`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:48](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L48)

Returns the item names if available, otherwise undefined

Optional: data types that never carry item names need not implement it.

The returned array is owned by this data object: callers must not modify it,
and every call returns the very same array (see [ItemsData](../../core/interfaces/ItemsData.md)).

#### Returns

`string`[] \| `undefined`

The item names, or `undefined` if not available

#### Inherited from

`HierarchicalTableDataBase.getNames`

***

### getSize()

> **getSize**(): `number`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L44)

Returns the total number of items

#### Returns

`number`

The item count

#### Inherited from

`HierarchicalTableDataBase.getSize`

***

### loadValues()

> **loadValues**\<`T`\>(`column`, `options?`): `Promise`\<[`TypedArrayOrArray`](../../core/type-aliases/TypedArrayOrArray.md)\<`T`\>\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:79](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L79)

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

#### Inherited from

`HierarchicalTableDataBase.loadValues`

***

### resolveColumnQuery()

> **resolveColumnQuery**(`query`, `options?`): `Promise`\<`string` \| `null`\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L65)

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

#### Inherited from

`HierarchicalTableDataBase.resolveColumnQuery`

***

### suggestColumnQueries()

> **suggestColumnQueries**(`currentQuery`, `options?`): `Promise`\<[`TableColumnQuerySuggestion`](../../core/type-aliases/TableColumnQuerySuggestion.md)[]\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:52](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L52)

Returns column query suggestions for the current query

The query format is up to the provider. Suggestions matching the current
query come first, best matches first, followed by the other suggestions.
The list is not capped.

#### Parameters

##### currentQuery

`string`

The partial column query to autocomplete

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`TableColumnQuerySuggestion`](../../core/type-aliases/TableColumnQuerySuggestion.md)[]\>

A list of suggested column queries

#### Inherited from

`HierarchicalTableDataBase.suggestColumnQueries`
