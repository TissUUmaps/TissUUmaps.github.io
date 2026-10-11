# Class: TIFFLabelsData

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsData.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsData.ts#L20)

The loaded label mask of a TIFF file

The tiles carry the label IDs as they are stored in the file, which the
renderer colors by looking each ID up in the table annotating the mask, if
any, and resolves as they are drawn otherwise.

## Implements

- [`LabelsData`](../../core/interfaces/LabelsData.md)

## Constructors

### Constructor

> **new TIFFLabelsData**(`tileSource`): `TIFFLabelsData`

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsData.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsData.ts#L26)

#### Parameters

##### tileSource

`TileSource`

The tile source of the label mask

#### Returns

`TIFFLabelsData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsData.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsData.ts#L68)

Closing does nothing: the decoder pool is shared, and the file is read on demand

#### Returns

`void`

#### Implementation of

[`LabelsData`](../../core/interfaces/LabelsData.md).[`close`](../../core/interfaces/LabelsData.md#close)

***

### getTileData()

> **getTileData**(`event`): `Promise`\<\{ `height`: `number`; `values`: [`IntOrUintArray`](../../core/type-aliases/IntOrUintArray.md); `width`: `number`; \}\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsData.ts:48](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsData.ts#L48)

Extracts the label IDs of a tile from a tile invalidation event

The IDs are returned as they are, in the raster's own size (see
TiffRaster), not cropped to the tile's bounds. They are the cached
raster's own band rather than a copy (see `copyRasters` in
`installTIFFTileSource`), so callers must not modify them.

#### Parameters

##### event

`TileInvalidatedEvent`

The tile invalidation event

#### Returns

`Promise`\<\{ `height`: `number`; `values`: [`IntOrUintArray`](../../core/type-aliases/IntOrUintArray.md); `width`: `number`; \}\>

The label IDs of the invalidated tile, one per raster pixel in
row-major order, along with the width and height of the raster

#### Throws

Error if the tile's raster has no band

#### Implementation of

[`LabelsData`](../../core/interfaces/LabelsData.md).[`getTileData`](../../core/interfaces/LabelsData.md#gettiledata)

***

### getTileSource()

> **getTileSource**(): `string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsData.ts:31](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsData.ts#L31)

Returns the tile source of the label mask

#### Returns

`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

#### Implementation of

[`LabelsData`](../../core/interfaces/LabelsData.md).[`getTileSource`](../../core/interfaces/LabelsData.md#gettilesource)
