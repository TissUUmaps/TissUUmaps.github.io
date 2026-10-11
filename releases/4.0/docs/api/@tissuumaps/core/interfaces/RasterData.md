# Interface: RasterData

Defined in: [storage/base.ts:75](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L75)

A [Data](Data.md) object that provides a tiled, multi-resolution raster

Extended by data types that are drawn as OpenSeadragon tiled images (e.g.
images, labels).

## Extends

- [`Data`](Data.md)

## Extended by

- [`ImageData`](ImageData.md)
- [`LabelsData`](LabelsData.md)

## Properties

### getTileData?

> `optional` **getTileData?**: (`event`) => `Promise`\<\{ `height`: `number`; `values`: [`TypedArray`](../type-aliases/TypedArray.md); `width`: `number`; \}\>

Defined in: [storage/base.ts:104](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L104)

Extracts the raw values of an invalidated tile

Provided by raster data whose tiles carry values rather than colors (e.g.
label IDs, or one sample per pixel of an image channel), which the renderer
recolors through a data transfer; raster data whose tiles are drawn as they
are does not provide it. The tile in `event` already belongs to one of this
raster's tile sources, which identifies the channel for multi-channel data.

The raster does not need to be cropped to the tile's source bounds: it may
cover the full tile size, as the renderer crops it when drawing.

#### Parameters

##### event

`TileInvalidatedEvent`

The tile invalidation event

#### Returns

`Promise`\<\{ `height`: `number`; `values`: [`TypedArray`](../type-aliases/TypedArray.md); `width`: `number`; \}\>

The values of the invalidated tile, one per raster pixel in
row-major order, along with the width and height of the raster in pixels

#### Throws

Error if the event does not contain raster data

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

### getTileSource()

> **getTileSource**(): `string` \| `object` \| [`CustomTileSource`](CustomTileSource.md)

Defined in: [storage/base.ts:85](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L85)

Returns the tile source of this raster

Data types providing more than one tile source (see `ImageData`) extend
this to address them.

#### Returns

`string` \| `object` \| [`CustomTileSource`](CustomTileSource.md)

The tile source, which can be a URL string, a TileSourceConfig
object, or a CustomTileSource object
