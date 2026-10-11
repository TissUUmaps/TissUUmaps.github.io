# Class: ParquetShapesData

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesData.ts:4](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesData.ts#L4)

Shapes data of a GeoParquet file, fully loaded up front

## Implements

- [`ShapesData`](../../core/interfaces/ShapesData.md)

## Constructors

### Constructor

> **new ParquetShapesData**(`geometry`, `ids`, `names`): `ParquetShapesData`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesData.ts:9](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesData.ts#L9)

#### Parameters

##### geometry

[`ShapesGeometry`](../../core/type-aliases/ShapesGeometry.md)

##### ids

[`IDArray`](../../core/type-aliases/IDArray.md)

##### names

`string`[] \| `undefined`

#### Returns

`ParquetShapesData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesData.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesData.ts#L38)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`ShapesData`](../../core/interfaces/ShapesData.md).[`close`](../../core/interfaces/ShapesData.md#close)

***

### getIds()

> **getIds**(): [`IDArray`](../../core/type-aliases/IDArray.md)

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesData.ts:22](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesData.ts#L22)

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

[`ShapesData`](../../core/interfaces/ShapesData.md).[`getIds`](../../core/interfaces/ShapesData.md#getids)

***

### getNames()

> **getNames**(): `string`[] \| `undefined`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesData.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesData.ts#L30)

Returns the item names if available, otherwise undefined

Optional: data types that never carry item names need not implement it.

The returned array is owned by this data object: callers must not modify it,
and every call returns the very same array (see [ItemsData](../../core/interfaces/ItemsData.md)).

#### Returns

`string`[] \| `undefined`

The item names, or `undefined` if not available

#### Implementation of

[`ShapesData`](../../core/interfaces/ShapesData.md).[`getNames`](../../core/interfaces/ShapesData.md#getnames)

***

### getSize()

> **getSize**(): `number`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesData.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesData.ts#L26)

Returns the total number of items

#### Returns

`number`

The item count

#### Implementation of

[`ShapesData`](../../core/interfaces/ShapesData.md).[`getSize`](../../core/interfaces/ShapesData.md#getsize)

***

### loadGeometry()

> **loadGeometry**(): `Promise`\<[`ShapesGeometry`](../../core/type-aliases/ShapesGeometry.md)\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesData.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesData.ts#L34)

Loads the geometry for all shapes

#### Returns

`Promise`\<[`ShapesGeometry`](../../core/type-aliases/ShapesGeometry.md)\>

A promise that resolves to the loaded shapes geometry

#### Implementation of

[`ShapesData`](../../core/interfaces/ShapesData.md).[`loadGeometry`](../../core/interfaces/ShapesData.md#loadgeometry)
