# Class: TIFFImageData

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L35)

The loaded image of a TIFF file

Multi-channel files provide one tile source per channel, whose tiles carry
the raw samples that the renderer contrast-stretches and colorizes, using the
channel names and colors read from the file and the value histogram read from
its pixels. Files that are drawn in their own colors (RGB, palette or
white-is-zero) provide a single tile source instead.

Channel visibility is not provided: neither OME-XML nor the QPTIFF
description records it.

## Implements

- [`ImageData`](../../core/interfaces/ImageData.md)

## Constructors

### Constructor

> **new TIFFImageData**(`tileSources`, `channels`): `TIFFImageData`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:43](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L43)

#### Parameters

##### tileSources

`TileSource`[]

One per channel, or a single one for RGB images

##### channels

[`TIFFChannel`](../type-aliases/TIFFChannel.md)[] \| `undefined`

The channels, or `undefined` for RGB images

#### Returns

`TIFFImageData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:180](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L180)

Closing does nothing: the decoder pool is shared, and the file is read on demand

#### Returns

`void`

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`close`](../../core/interfaces/ImageData.md#close)

***

### getChannelColor()

> **getChannelColor**(`c`): [`Color`](../../core/type-aliases/Color.md) \| `undefined`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:133](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L133)

Returns the color of a channel, as the OME-XML or the QPTIFF description
records it

Channels the file leaves uncolored are left to the renderer, which gives
them a default color.

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

[`Color`](../../core/type-aliases/Color.md) \| `undefined`

The channel's color, or `undefined` if the file records none

#### Throws

Error if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelColor`](../../core/interfaces/ImageData.md#getchannelcolor)

***

### getChannelContrastLimits()

> **getChannelContrastLimits**(`c`): \[`number`, `number`\] \| `undefined`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:175](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L175)

Returns the contrast limits an 8-bit channel is shown over

TIFF records no display range. 8-bit channels are shown over their full
range, like other viewers show them, rather than over the quantile-based
limits the renderer would otherwise derive from their histogram (see
[TIFFImageData.getChannelHistogram](#getchannelhistogram)).

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

\[`number`, `number`\] \| `undefined`

`[0, 255]` for an 8-bit channel, `undefined` for every other
channel

#### Throws

Error if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelContrastLimits`](../../core/interfaces/ImageData.md#getchannelcontrastlimits)

***

### getChannelDataTypeRange()

> **getChannelDataTypeRange**(`c`): \[`number`, `number`\] \| `undefined`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:158](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L158)

Returns the range the sample type of a channel can hold

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

\[`number`, `number`\] \| `undefined`

The full range of an integer channel of at most 32 bits,
`undefined` for every other channel

#### Throws

Error if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelDataTypeRange`](../../core/interfaces/ImageData.md#getchanneldatatyperange)

***

### getChannelHistogram()

> **getChannelHistogram**(`c`): [`ImageChannelHistogram`](../../core/type-aliases/ImageChannelHistogram.md) \| `undefined`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:146](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L146)

Returns the value histogram read from the pixels of a channel, which the
renderer derives its contrast limits from

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

[`ImageChannelHistogram`](../../core/type-aliases/ImageChannelHistogram.md) \| `undefined`

The channel's histogram, or `undefined` for a channel that holds
fewer than two distinct values

#### Throws

Error if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelHistogram`](../../core/interfaces/ImageData.md#getchannelhistogram)

***

### getChannelName()

> **getChannelName**(`c`): `string` \| `undefined`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:118](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L118)

Returns the name of a channel, as the OME-XML or the QPTIFF description
records it

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

`string` \| `undefined`

The channel's name, or `undefined` if the file records none

#### Throws

Error if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getChannelName`](../../core/interfaces/ImageData.md#getchannelname)

***

### getSizeC()

> **getSizeC**(): `number` \| `undefined`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:52](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L52)

Returns the number of channels, or `undefined` for a file drawn in its own colors

#### Returns

`number` \| `undefined`

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getSizeC`](../../core/interfaces/ImageData.md#getsizec)

***

### getTileData()

> **getTileData**(`event`): `Promise`\<\{ `height`: `number`; `values`: [`TypedArray`](../../core/type-aliases/TypedArray.md); `width`: `number`; \}\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:96](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L96)

Extracts the samples of a channel tile from a tile invalidation event

The samples are returned as they are, in the raster's own size (see
TiffRaster), not cropped to the tile's bounds. They are the cached
raster's own band rather than a copy (see `copyRasters` in
`installTIFFTileSource`), so callers must not modify them.

#### Parameters

##### event

`TileInvalidatedEvent`

The tile invalidation event

#### Returns

`Promise`\<\{ `height`: `number`; `values`: [`TypedArray`](../../core/type-aliases/TypedArray.md); `width`: `number`; \}\>

The samples of the invalidated tile, one per raster pixel in
row-major order, along with the width and height of the raster

#### Throws

Error if the file is drawn in its own colors, or if the tile's
raster has no band

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getTileData`](../../core/interfaces/ImageData.md#gettiledata)

***

### getTileSource()

> **getTileSource**(`c?`): `string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageData.ts:66](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageData.ts#L66)

Returns the tile source of a channel, or the only tile source of a file
drawn in its own colors

#### Parameters

##### c?

`number`

The channel index (0-based), required for multi-channel files
and to be omitted otherwise

#### Returns

`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

The tile source

#### Throws

Error if `c` is given for a file drawn in its own colors, omitted
for a multi-channel file, or out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getTileSource`](../../core/interfaces/ImageData.md#gettilesource)
