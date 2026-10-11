# Interface: TableData

Defined in: [storage/table.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L30)

Loaded tabular data providing column-wise access

The items of a table are its rows, each of which annotates one item of
another data object (see `AnnotatedDataSource`); the item IDs and names are
those of the annotated items, in row order.

## Extends

- [`ItemsData`](ItemsData.md)

## Properties

### getNames?

> `optional` **getNames?**: () => `string`[] \| `undefined`

Defined in: [storage/base.ts:66](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L66)

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

Defined in: [storage/base.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L18)

Releases all resources held by this data object

#### Returns

`void`

#### Inherited from

[`ItemsData`](ItemsData.md).[`close`](ItemsData.md#close)

***

### getIds()

> **getIds**(): [`IDArray`](../type-aliases/IDArray.md)

Defined in: [storage/base.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L47)

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

Defined in: [storage/base.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L54)

Returns the total number of items

#### Returns

`number`

The item count

#### Inherited from

[`ItemsData`](ItemsData.md).[`getSize`](ItemsData.md#getsize)

***

### loadUniqueValueCounts()?

> `optional` **loadUniqueValueCounts**\<`T`\>(`column`, `options?`): `Promise`\<`Map`\<`T`, `number`\>\>

Defined in: [storage/table.ts:88](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L88)

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

Defined in: [storage/table.ts:104](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L104)

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

Defined in: [storage/table.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L70)

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

### resolveColumnQuery()

> **resolveColumnQuery**(`query`, `options?`): `Promise`\<`string` \| `null`\>

Defined in: [storage/table.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L54)

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

Defined in: [storage/table.ts:42](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/table.ts#L42)

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

`Promise`\<[`TableColumnQuerySuggestion`](../type-aliases/TableColumnQuerySuggestion.md)[]\>

A list of suggested column queries
