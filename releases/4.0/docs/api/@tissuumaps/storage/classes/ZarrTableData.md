# Class: ZarrTableData

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableData.ts:4](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableData.ts#L4)

The table data of a Zarr store, see [ZarrTableDataProvider](ZarrTableDataProvider.md)

## Extends

- `HierarchicalTableDataBase`

## Constructors

### Constructor

> **new ZarrTableData**(`table`, `numRows`, `ids`, `names`): `ZarrTableData`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:41](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L41)

#### Parameters

##### table

`HierarchicalTable`

The open table, which the data owns and closes

##### numRows

`number`

The number of rows

##### ids

[`IDArray`](../../core/type-aliases/IDArray.md) \| `undefined`

The row IDs, `undefined` for sequential IDs

##### names

`string`[] \| `undefined`

The row names, if any

#### Returns

`ZarrTableData`

#### Inherited from

`HierarchicalTableDataBase.constructor`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:266](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L266)

Releases all resources held by this data object

#### Returns

`void`

#### Inherited from

`HierarchicalTableDataBase.close`

***

### describeColumn()

> **describeColumn**(`column`, `options?`): `Promise`\<\{ `name`: `string`; `sectionId`: `string`; \} \| `null`\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:143](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L143)

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

#### Inherited from

`HierarchicalTableDataBase.describeColumn`

***

### getColumnSections()

> **getColumnSections**(): [`TableColumnSection`](../../core/type-aliases/TableColumnSection.md)[]

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:128](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L128)

Returns the sections of the table's columns, by the conventions of its
format

Only implemented by table data whose format can group its columns (e.g. the
observations and the features of AnnData); callers without it pick columns
by query (see [suggestColumnQueries](#suggestcolumnqueries)).

#### Returns

[`TableColumnSection`](../../core/type-aliases/TableColumnSection.md)[]

The top-level sections, in the canonical order of the format;
none if the table has no sections

#### Inherited from

`HierarchicalTableDataBase.getColumnSections`

***

### getColumnType()

> **getColumnType**(`column`): [`TableColumnType`](../../core/type-aliases/TableColumnType.md) \| `undefined`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:242](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L242)

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

#### Inherited from

`HierarchicalTableDataBase.getColumnType`

***

### getIds()

> **getIds**(): [`IDArray`](../../core/type-aliases/IDArray.md)

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L53)

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

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L65)

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

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L61)

Returns the total number of items

#### Returns

`number`

The item count

#### Inherited from

`HierarchicalTableDataBase.getSize`

***

### loadValues()

> **loadValues**\<`T`\>(`column`, `options?`): `Promise`\<[`TypedArrayOrArray`](../../core/type-aliases/TypedArrayOrArray.md)\<`T`\>\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:253](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L253)

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

### mapColumn()

> **mapColumn**(`column`, `options`): `Promise`\<`string` \| `null`\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:188](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L188)

Loads the column of another leaf section that holds the same entity

Within a leaf of dataset columns, a column maps to itself if it belongs
to the leaf. Between matrix leaves, a column maps to the column with the
same selector: a selector names the same feature in every matrix of a
section (e.g. a gene of the AnnData `var` index in `X`, the layers and
`raw/X`). Matrices with the same selectors map by position, so that
columns selected by their index map too. Matrices without selectors map
to nothing, as nothing tells that their columns hold the same entities.

#### Parameters

##### column

`string`

The column name

##### options

The `id` of the leaf section to map the column to,
and an optional abort signal

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

#### Inherited from

`HierarchicalTableDataBase.mapColumn`

***

### resolveColumnQuery()

> **resolveColumnQuery**(`query`, `options?`): `Promise`\<`string` \| `null`\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:115](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L115)

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

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts:85](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataBase.ts#L85)

Suggests column queries for the current query, or the columns of a leaf
section

Without a section, the query is continued as a path (see
ColumnQueryUtils.suggestColumnQueries). Within a leaf section,
its columns are suggested with their names, best name matches first (see
ColumnQueryUtils.rankByName).

#### Parameters

##### currentQuery

`string`

The partial column query, or the text to search for
within the leaf section

##### options?

The `id` of a leaf section, if any, and an optional
abort signal

###### sectionId?

`string`

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`TableColumnQuerySuggestion`](../../core/type-aliases/TableColumnQuerySuggestion.md)[]\>

A list of suggested column queries

#### Throws

Error if the table has no leaf section with the given `id`

#### Inherited from

`HierarchicalTableDataBase.suggestColumnQueries`
