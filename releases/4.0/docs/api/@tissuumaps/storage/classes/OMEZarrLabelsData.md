# Class: OMEZarrLabelsData

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts:19](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts#L19)

Loaded OME-Zarr label image data

Provides a single tile source whose tiles hold label IDs as signed or
unsigned integers (see [OMEZarrLabelsData.getTileData](#gettiledata)). Label IDs are
not enumerated up front: they are read per tile, so that arbitrarily large
label images can be opened without scanning them.

## Implements

- [`LabelsData`](../../core/interfaces/LabelsData.md)

## Constructors

### Constructor

> **new OMEZarrLabelsData**(`tileSource`): `OMEZarrLabelsData`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts#L26)

#### Parameters

##### tileSource

`OMEZarrTileSource`

The ready tile source of the label image, rendering a
single channel

#### Returns

`OMEZarrLabelsData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts:78](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts#L78)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`LabelsData`](../../core/interfaces/LabelsData.md).[`close`](../../core/interfaces/LabelsData.md#close)

***

### getTileData()

> **getTileData**(`event`): `Promise`\<\{ `height`: `number`; `values`: [`IntOrUintArray`](../../core/type-aliases/IntOrUintArray.md); `width`: `number`; \}\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts#L53)

Extracts the label IDs of an invalidated tile from its raw OME-Zarr data

The tile has to belong to an `OMEZarrTileSource` rendering a single
channel, whose tile data (`chunks`) holds exactly one two-dimensional
(height x width) tile read from the Zarr array (with the channel, z-slice
and timepoint already selected) instead of a rendered image.

Only integer tiles of up to 32 bits (signed or unsigned) are accepted, as
label IDs have to be integers and the renderer resolves them as such;
64-bit integers cannot be represented without loss.

#### Parameters

##### event

`TileInvalidatedEvent`

The tile invalidation event

#### Returns

`Promise`\<\{ `height`: `number`; `values`: [`IntOrUintArray`](../../core/type-aliases/IntOrUintArray.md); `width`: `number`; \}\>

The label IDs of the invalidated tile, one per raster pixel in
row-major order, along with the width and height of the raster in pixels

#### Throws

Error if the tile data does not hold exactly one tile, or if the
tile is not an 8-, 16- or 32-bit integer array

#### Implementation of

[`LabelsData`](../../core/interfaces/LabelsData.md).[`getTileData`](../../core/interfaces/LabelsData.md#gettiledata)

***

### getTileSource()

> **getTileSource**(): `string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts:31](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsData.ts#L31)

Returns the tile source of the label image

#### Returns

`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

#### Implementation of

[`LabelsData`](../../core/interfaces/LabelsData.md).[`getTileSource`](../../core/interfaces/LabelsData.md#gettilesource)
