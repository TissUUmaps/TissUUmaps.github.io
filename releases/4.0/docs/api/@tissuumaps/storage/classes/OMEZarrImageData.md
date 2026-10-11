# Class: OMEZarrImageData

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L36)

Loaded OME-Zarr image data

Images with a channel axis are multi-channel: they provide one tile source
per channel, addressed by channel index, along with the per-channel rendering
metadata (name, visibility, color, contrast limits) that the tile sources
resolve from the image's `omero` metadata. Images without a channel axis
provide a single tile source that is not addressed by channel, and no
per-channel metadata: the channel accessors reject them.

Extracts one sample per pixel from the raw OME-Zarr data of its tiles,
which the renderer contrast-stretches and colorizes. Integer tiles of up to
32 bits and floating-point tiles are passed through as they are; 64-bit
integer tiles are rejected.

Multi-channel image data carries one precomputed value histogram per
channel, computed at load time from a downsampled resolution level (see
`OMEZarrImageDataProvider.load`), from which the renderer derives default
contrast limits for channels whose `omero` window is incomplete, except for
`uint8` channels, which fall back to the full `[0, 255]` range instead (see
[OMEZarrImageData.getChannelContrastLimits](#getchannelcontrastlimits)).

## Implements

- [`ImageData`](../../core/interfaces/ImageData.md)

## Constructors

### Constructor

> **new OMEZarrImageData**(`tileSources`, `histograms?`): `OMEZarrImageData`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:49](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L49)

#### Parameters

##### tileSources

`OMEZarrTileSource` \| `OMEZarrTileSource`[]

One ready tile source per channel, in channel order,
each rendering only its channel (`c`), for images with a channel axis; the
single ready tile source for images without one

##### histograms?

([`ImageChannelHistogram`](../../core/type-aliases/ImageChannelHistogram.md) \| `undefined`)[]

One precomputed value histogram per channel, in
channel order (`undefined` for channels without one), for images with a
channel axis; `undefined` for images without one

#### Returns

`OMEZarrImageData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:238](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L238)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`close`](../../core/interfaces/ImageData.md#close)

***

### getChannelColor()

> **getChannelColor**(`c`): [`Color`](../../core/type-aliases/Color.md) \| `undefined`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:163](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L163)

Returns the color of a channel from the image's `omero` metadata

Channel colors are 6-digit hex strings with an optional `#`, which the
tile source validates and parses. Channels without a valid color have no
color, leaving the renderer to derive one from the channel index, even if
other channels of the image have one.

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

[`Color`](../../core/type-aliases/Color.md) \| `undefined`

The channel's color, or `undefined` if it has no valid one

#### Throws

Error if the image has no channel axis, or if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelColor`](../../core/interfaces/ImageData.md#getchannelcolor)

***

### getChannelContrastLimits()

> **getChannelContrastLimits**(`c`): \[`number`, `number`\] \| `undefined`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:225](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L225)

Returns the rendering window of a channel from the image's `omero` metadata

`uint8` channels without a complete window fall back to the full
`[0, 255]` range, like other viewers show them, rather than to the
quantile-based limits the renderer would otherwise derive from their
histogram (see [OMEZarrImageData.getChannelHistogram](#getchannelhistogram)).

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

\[`number`, `number`\] \| `undefined`

The channel's window `[start, end]` widened to a non-empty range
if necessary; `[0, 255]` for `uint8` channels without a start or an end;
or `undefined` for other channels without a start or an end

#### Throws

Error if the image has no channel axis, or if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelContrastLimits`](../../core/interfaces/ImageData.md#getchannelcontrastlimits)

***

### getChannelDataTypeRange()

> **getChannelDataTypeRange**(`c`): \[`number`, `number`\] \| `undefined`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:200](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L200)

Returns the range the `dtype` of a channel can hold

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

\[`number`, `number`\] \| `undefined`

The full range of an integer `dtype` of at most 32 bits,
`undefined` for every other `dtype`

#### Throws

Error if the image has no channel axis, or if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelDataTypeRange`](../../core/interfaces/ImageData.md#getchanneldatatyperange)

***

### getChannelHistogram()

> **getChannelHistogram**(`c`): [`ImageChannelHistogram`](../../core/type-aliases/ImageChannelHistogram.md) \| `undefined`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:187](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L187)

Returns the precomputed value histogram of a channel

The histogram is computed once at load time from a downsampled resolution
level of the channel's plane (see `OMEZarrImageDataProvider.load`) and
spans the channel's actual value range at that level, so that the default
contrast limits the renderer derives from it are as precise as its bins.

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

[`ImageChannelHistogram`](../../core/type-aliases/ImageChannelHistogram.md) \| `undefined`

The channel's histogram, as bin counts and the value range the
bins span, or `undefined` if none was computed (64-bit integer data, or
planes with fewer than two distinct finite values)

#### Throws

Error if the image has no channel axis, or if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelHistogram`](../../core/interfaces/ImageData.md#getchannelhistogram)

***

### getChannelName()

> **getChannelName**(`c`): `string` \| `undefined`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:133](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L133)

Returns the label of a channel from the image's `omero` metadata

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

`string` \| `undefined`

The channel's label, or `undefined` if it has none

#### Throws

Error if the image has no channel axis, or if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelName`](../../core/interfaces/ImageData.md#getchannelname)

***

### getChannelVisibility()

> **getChannelVisibility**(`c`): `boolean` \| `undefined`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:146](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L146)

Returns whether a channel is active in the image's `omero` metadata

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

`boolean` \| `undefined`

The channel's active flag, or `undefined` if it has none

#### Throws

Error if the image has no channel axis, or if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelVisibility`](../../core/interfaces/ImageData.md#getchannelvisibility)

***

### getSizeC()

> **getSizeC**(): `number` \| `undefined`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L61)

Returns the number of channels, or `undefined` for images without a
channel axis

#### Returns

`number` \| `undefined`

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getSizeC`](../../core/interfaces/ImageData.md#getsizec)

***

### getTileData()

> **getTileData**(`event`): `Promise`\<\{ `height`: `number`; `values`: [`TypedArray`](../../core/type-aliases/TypedArray.md); `width`: `number`; \}\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L105)

Extracts the samples of an invalidated tile from its raw OME-Zarr data

The tile has to belong to an `OMEZarrTileSource` rendering a single
channel, whose tile data (`chunks`) holds exactly one two-dimensional
(height x width) tile read from the Zarr array (with the channel, z-slice
and timepoint already selected) instead of a rendered image. 64-bit
integer tiles are rejected (see OMEZarrImageData).

#### Parameters

##### event

`TileInvalidatedEvent`

The tile invalidation event

#### Returns

`Promise`\<\{ `height`: `number`; `values`: [`TypedArray`](../../core/type-aliases/TypedArray.md); `width`: `number`; \}\>

The samples of the invalidated tile, one per raster pixel in
row-major order, along with the width and height of the raster in pixels

#### Throws

Error if the tile data does not hold exactly one tile, or if the
tile holds 64-bit integers

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getTileData`](../../core/interfaces/ImageData.md#gettiledata)

***

### getTileSource()

> **getTileSource**(`c?`): `string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts:77](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageData.ts#L77)

Returns the tile source of a channel, or the only tile source of an image
without a channel axis

#### Parameters

##### c?

`number`

The channel index (0-based), required for images with a channel
axis and to be omitted otherwise

#### Returns

`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

The tile source

#### Throws

Error if `c` is omitted for an image with a channel axis, passed
for an image without one, or out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getTileSource`](../../core/interfaces/ImageData.md#gettilesource)
