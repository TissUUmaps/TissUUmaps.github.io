# Class: TablePointsData

Defined in: [@tissuumaps-storage/src/table/TablePointsData.ts:9](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsData.ts#L9)

Loaded point cloud data providing coordinate access

## Implements

- [`PointsData`](../../core/interfaces/PointsData.md)

## Constructors

### Constructor

> **new TablePointsData**(`tableData`, `xColumn`, `yColumn`): `TablePointsData`

Defined in: [@tissuumaps-storage/src/table/TablePointsData.ts:14](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsData.ts#L14)

#### Parameters

##### tableData

[`TableData`](../../core/interfaces/TableData.md)

##### xColumn

`string`

##### yColumn

`string`

#### Returns

`TablePointsData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/table/TablePointsData.ts:56](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsData.ts#L56)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`PointsData`](../../core/interfaces/PointsData.md).[`close`](../../core/interfaces/PointsData.md#close)

***

### getIds()

> **getIds**(): [`IDArray`](../../core/type-aliases/IDArray.md)

Defined in: [@tissuumaps-storage/src/table/TablePointsData.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsData.ts#L20)

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

[`PointsData`](../../core/interfaces/PointsData.md).[`getIds`](../../core/interfaces/PointsData.md#getids)

***

### getNames()

> **getNames**(): `string`[] \| `undefined`

Defined in: [@tissuumaps-storage/src/table/TablePointsData.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsData.ts#L28)

Returns the item names if available, otherwise undefined

Optional: data types that never carry item names need not implement it.

The returned array is owned by this data object: callers must not modify it,
and every call returns the very same array (see [ItemsData](../../core/interfaces/ItemsData.md)).

#### Returns

`string`[] \| `undefined`

The item names, or `undefined` if not available

#### Implementation of

[`PointsData`](../../core/interfaces/PointsData.md).[`getNames`](../../core/interfaces/PointsData.md#getnames)

***

### getSize()

> **getSize**(): `number`

Defined in: [@tissuumaps-storage/src/table/TablePointsData.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsData.ts#L24)

Returns the total number of items

#### Returns

`number`

The item count

#### Implementation of

[`PointsData`](../../core/interfaces/PointsData.md).[`getSize`](../../core/interfaces/PointsData.md#getsize)

***

### loadGeometry()

> **loadGeometry**(`options?`): `Promise`\<[`PointsGeometry`](../../core/type-aliases/PointsGeometry.md)\>

Defined in: [@tissuumaps-storage/src/table/TablePointsData.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsData.ts#L32)

Loads the geometry for all points

#### Parameters

##### options?

Optional abort signal and progress callback

###### onProgress?

[`ProgressCallback`](../../core/type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`PointsGeometry`](../../core/type-aliases/PointsGeometry.md)\>

A promise that resolves to the loaded points geometry

#### Implementation of

[`PointsData`](../../core/interfaces/PointsData.md).[`loadGeometry`](../../core/interfaces/PointsData.md#loadgeometry)
