# Interface: LabelsData

Defined in: [storage/labels.ts:15](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/labels.ts#L15)

Loaded label image data providing a tiled, multi-resolution integer raster

Each pixel value represents a label (segment) ID. Unlike points and shapes, a
label image does not enumerate its labels: their IDs are only known per
tile, as the tiles are read, so that arbitrarily large label images can be
opened without scanning them.

## Extends

- [`RasterData`](RasterData.md)

## Methods

### close()

> **close**(): `void`

Defined in: [storage/base.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L18)

Releases all resources held by this data object

#### Returns

`void`

#### Inherited from

[`RasterData`](RasterData.md).[`close`](RasterData.md#close)

***

### getTileData()

> **getTileData**(`event`): `Promise`\<\{ `height`: `number`; `values`: [`IntOrUintArray`](../type-aliases/IntOrUintArray.md); `width`: `number`; \}\>

Defined in: [storage/labels.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/labels.ts#L28)

Extracts the label IDs of an invalidated tile

Label images always carry values rather than colors, so unlike for
[RasterData.getTileData](RasterData.md#gettiledata) this is not optional, and the values are
integers (signed or unsigned, of up to 32 bits).

#### Parameters

##### event

`TileInvalidatedEvent`

The tile invalidation event

#### Returns

`Promise`\<\{ `height`: `number`; `values`: [`IntOrUintArray`](../type-aliases/IntOrUintArray.md); `width`: `number`; \}\>

The label IDs of the invalidated tile, one per raster pixel in
row-major order, along with the width and height of the raster in pixels

#### Throws

Error if the event does not contain label image data

#### Overrides

`RasterData.getTileData`

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

#### Inherited from

[`RasterData`](RasterData.md).[`getTileSource`](RasterData.md#gettilesource)
