# Class: TableUtils

Defined in: [utils/TableUtils.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L35)

Lookups into tabular data (`TableData`) by item ID

A table annotates the items of another data object: each of its rows holds
the item ID it belongs to, and consumers address rows by that ID rather than
by position (see `ItemsData`). Looking rows up by ID needs a map from ID to
row index, which is linear in the size of the table to build and costly to
hold; [forEachRow](#foreachrow) therefore builds it at most once per table, and not
at all in the common case that the IDs to look up are the table's own, in
row order. Once built, the map is retained for as long as the table's data
is: it is keyed by the identity of the table's ID array, so it is freed
together with the data, and a table that is looked up by other IDs - shapes
annotated by a separate table, or the items of one layer of an object -
keeps one entry per row alive until then. That is the price of sharing the
map between every consumer of the table.

Item IDs are expected to be unique within a table (see `ItemsData`). For a
duplicated ID, the row-order fast path addresses each row by its own
position, whereas the lookup maps the ID to its last row; a table with
duplicated IDs is reported once, when its map is built.

On top of the row lookup, [fillFromTableValues](#fillfromtablevalues) and
[fillFromTableGroups](#fillfromtablegroups) fill a typed array with one packed value per
item from a table column, one by parsing the cell values and one by mapping
their distinct values as groups. IDs that the table does not contain fall
back to a default value, with a warning. [loadGroupCounts](#loadgroupcounts) lists the
groups of a column, for all rows rather than per item.

## Constructors

### Constructor

> **new TableUtils**(): `TableUtils`

#### Returns

`TableUtils`

## Methods

### computeValueRange()

> `static` **computeValueRange**(`values`, `options?`): `Promise`\<\[`number`, `number`\] \| `undefined`\>

Defined in: [utils/TableUtils.ts:207](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L207)

Computes the range of loaded table column values

#### Parameters

##### values

[`TypedArray`](../type-aliases/TypedArray.md) \| `unknown`[]

The column values

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\[`number`, `number`\] \| `undefined`\>

The minimum and maximum value, or `undefined` if the values are
not numeric or hold no two distinct finite values

***

### fillFromTableGroups()

> `static` **fillFromTableGroups**\<`TValue`\>(`packedValues`, `tableData`, `ids`, `column`, `defaultValue`, `mapGroupToValue`, `packValue`, `options?`): `Promise`\<`void`\>

Defined in: [utils/TableUtils.ts:133](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L133)

Fills `packedValues` by grouping IDs by the given table column and mapping the groups to values

For each ID in `ids`, the corresponding row is looked up in the table by ID
(see [forEachRow](#foreachrow)). The raw cell value is converted to a string to
form the group key, which `mapGroupToValue` maps to a value; if the table
does not contain the ID, `defaultValue` is used instead. Groups are
resolved once per distinct cell value, i.e. `mapGroupToValue` is not
called per item.

#### Type Parameters

##### TValue

`TValue`

#### Parameters

##### packedValues

[`TypedArray`](../type-aliases/TypedArray.md)

Output typed array to fill, in the order of `ids`

##### tableData

[`TableData`](../interfaces/TableData.md)

The table to look up group keys in

##### ids

[`IDArray`](../type-aliases/IDArray.md)

Ordered list of item IDs

##### column

`string`

Name of the table column to load group keys from

##### defaultValue

`TValue`

Value used when the ID is missing

##### mapGroupToValue

(`group`) => `TValue`

Maps a group key (the cell value as a string) to
`TValue`

##### packValue

(`value`) => `number`

Converts `TValue` to the numeric representation stored
in `packedValues`

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

***

### fillFromTableValues()

> `static` **fillFromTableValues**\<`TValue`\>(`packedValues`, `tableData`, `ids`, `column`, `defaultValue`, `parseTableValue`, `packValue`, `options?`): `Promise`\<`void`\>

Defined in: [utils/TableUtils.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L68)

Fills `packedValues` by loading values from the given table column

For each ID in `ids`, the corresponding row is looked up in the table by ID
(see [forEachRow](#foreachrow)). The raw cell value is parsed by
`parseTableValue`; if that fails, or if the table does not contain the ID,
`defaultValue` is used instead.

#### Type Parameters

##### TValue

`TValue`

#### Parameters

##### packedValues

[`TypedArray`](../type-aliases/TypedArray.md)

Output typed array to fill, in the order of `ids`

##### tableData

[`TableData`](../interfaces/TableData.md)

The table to look up values in

##### ids

[`IDArray`](../type-aliases/IDArray.md)

Ordered list of item IDs

##### column

`string`

Name of the table column to load values from

##### defaultValue

`TValue`

Value used when the ID is missing or parsing fails

##### parseTableValue

(`value`) => `TValue` \| `undefined`

Converts a raw cell value to `TValue`, or to
`undefined` on failure

##### packValue

(`value`) => `number`

Converts `TValue` to the numeric representation stored
in `packedValues`

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

***

### forEachRow()

> `static` **forEachRow**(`ids`, `tableData`, `callback`, `options?`): `Promise`\<`void`\>

Defined in: [utils/TableUtils.ts:292](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L292)

Calls `callback` for every ID with the index of the table row holding that ID

If `ids` is the table's own ID array, the ID at position `i` is held by
row `i` and no lookup is needed. Otherwise the rows are looked up in the
table's row indices (see [getRowIndices](#getrowindices)); IDs the table does not
contain are reported with an undefined row index.

#### Parameters

##### ids

[`IDArray`](../type-aliases/IDArray.md)

Ordered list of item IDs

##### tableData

[`TableData`](../interfaces/TableData.md)

The table to look the IDs up in

##### callback

(`rowIndex`, `i`) => `void`

Called with the row index of each ID, or `undefined` if
the table does not contain it, and the position of the ID in `ids`

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

***

### getRowIndices()

> `static` **getRowIndices**(`tableData`, `options?`): `Promise`\<`ReadonlyMap`\<`string` \| `number`, `number`\>\>

Defined in: [utils/TableUtils.ts:326](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L326)

Returns the row indices of a table by item ID

Built at most once per table, cooperatively yielding, and shared by all
callers, which is why a caller's abort signal only detaches that caller:
the build itself keeps going for the others, and for the next lookup.

#### Parameters

##### tableData

[`TableData`](../interfaces/TableData.md)

The table to return the row indices of

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`ReadonlyMap`\<`string` \| `number`, `number`\>\>

The row index of every item ID of the table; for an ID occurring
more than once, which is reported with a warning, the index of its last row

***

### loadGroupCounts()

> `static` **loadGroupCounts**(`tableData`, `column`, `options?`): `Promise`\<`Map`\<`string`, `number`\>\>

Defined in: [utils/TableUtils.ts:233](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L233)

Loads how many rows of a table each group of a column holds

Groups are the cell values as strings, as [fillFromTableGroups](#fillfromtablegroups) and
group-to-value maps key them, so values with the same string (e.g. `null`
and `"null"`) form one group.

#### Parameters

##### tableData

[`TableData`](../interfaces/TableData.md)

The table to load the groups of

##### column

`string`

Name of the table column to group by

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`Map`\<`string`, `number`\>\>

The row count of every group, in the order the groups first
appear in the column

***

### loadUniqueValueCounts()

> `static` **loadUniqueValueCounts**\<`T`\>(`tableData`, `column`, `options?`): `Promise`\<`Map`\<`T`, `number`\>\>

Defined in: [utils/TableUtils.ts:266](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L266)

Loads the number of rows per unique value of a table column

Uses the table's own counts if it provides them, and otherwise counts the
loaded column values (see `MathUtils.computeUniqueValueCounts`).

#### Type Parameters

##### T

`T`

Element type of the column

#### Parameters

##### tableData

[`TableData`](../interfaces/TableData.md)

The table to load the unique value counts of

##### column

`string`

Name of the table column

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

### loadValueRange()

> `static` **loadValueRange**(`tableData`, `column`, `options?`): `Promise`\<\[`number`, `number`\] \| `undefined`\>

Defined in: [utils/TableUtils.ts:187](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TableUtils.ts#L187)

Loads the range of a table column's numeric values

Uses the table's own value range if it provides one, and otherwise
computes the range of the loaded column values (see
[computeValueRange](#computevaluerange)).

#### Parameters

##### tableData

[`TableData`](../interfaces/TableData.md)

The table to load the value range of

##### column

`string`

Name of the table column

##### options?

Optional abort signal and progress callback

###### onProgress?

[`ProgressCallback`](../type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\[`number`, `number`\] \| `undefined`\>

The column's minimum and maximum value, or `undefined` if the
column is not numeric
