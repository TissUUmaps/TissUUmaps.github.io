# Interface: ItemsData

Defined in: [storage/base.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L35)

A [Data](Data.md) object that contains an indexed collection of items

Extended by data types whose storage is addressable by item IDs
(e.g. points, shapes, tables).

Implementations have to be immutable: the values returned by their accessors
must not change over the lifetime of the object, and the arrays they return
have to keep their identity across calls (i.e. be memoized rather than built
anew on every call). Consumers rely on that identity to detect change - a
renderer that compares the previous `getIds()` result against the current one
re-uploads its GPU buffers whenever the two differ - so an implementation
returning a fresh array each time is correct but defeats every such cache.

## Extends

- [`Data`](Data.md)

## Extended by

- [`PointsData`](PointsData.md)
- [`ShapesData`](ShapesData.md)
- [`TableData`](TableData.md)

## Properties

### getNames?

> `optional` **getNames?**: () => `string`[] \| `undefined`

Defined in: [storage/base.ts:66](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L66)

Returns the item names if available, otherwise undefined

Optional: data types that never carry item names need not implement it.

The returned array is owned by this data object: callers must not modify it,
and every call returns the very same array (see ItemsData).

#### Returns

`string`[] \| `undefined`

The item names, or `undefined` if not available

## Methods

### close()

> **close**(): `void`

Defined in: [storage/base.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L18)

Releases all resources held by this data object

#### Returns

`void`

#### Inherited from

[`Data`](Data.md).[`close`](Data.md#close)

***

### getIds()

> **getIds**(): [`IDArray`](../type-aliases/IDArray.md)

Defined in: [storage/base.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L47)

Returns an array of item IDs

IDs are either integers, held by an integer typed array or by 64-bit
floats (safe integers only), or strings, held by a plain array (see
`IDArray`). The returned array is owned by this data object: callers must
not modify it, and every call returns the very same array (see
ItemsData). IDs are expected to be unique, which is not checked.

#### Returns

[`IDArray`](../type-aliases/IDArray.md)

The item IDs

***

### getSize()

> **getSize**(): `number`

Defined in: [storage/base.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L54)

Returns the total number of items

#### Returns

`number`

The item count
