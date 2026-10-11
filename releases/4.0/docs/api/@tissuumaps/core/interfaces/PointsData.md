# Interface: PointsData

Defined in: [storage/points.ts:17](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/points.ts#L17)

Loaded point cloud data providing coordinate access

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

### loadGeometry()

> **loadGeometry**(`options?`): `Promise`\<[`PointsGeometry`](../type-aliases/PointsGeometry.md)\>

Defined in: [storage/points.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/points.ts#L24)

Loads the geometry for all points

#### Parameters

##### options?

Optional abort signal and progress callback

###### onProgress?

[`ProgressCallback`](../type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`PointsGeometry`](../type-aliases/PointsGeometry.md)\>

A promise that resolves to the loaded points geometry
