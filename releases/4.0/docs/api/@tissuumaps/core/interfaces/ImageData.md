# Interface: ImageData

Defined in: [storage/image.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L38)

Loaded image data providing one or more OpenSeadragon-compatible tile sources

Image data is either multi-channel, in which case it provides one tile source
per channel, addressed by channel index; or it is not, in which case it
provides a single tile source that is not addressed by channel.
[ImageData.getSizeC](#getsizec) returns `undefined` for image data that is not multi-channel.

Multi-channel image data that implements [RasterData.getTileData](RasterData.md#gettiledata)
provides a single sample ("grayscale value") per pixel and channel, which the
renderer contrast-stretches and colorizes (see
[ImageData.getChannelContrastLimits](#getchannelcontrastlimits) and
[ImageData.getChannelColor](#getchannelcolor)). Multi-channel image data that does not
implement it is free to provide grayscale or RGB tile sources per channel,
which are drawn as they are.

## Extends

- [`RasterData`](RasterData.md)

## Properties

### getChannelColor?

> `optional` **getChannelColor?**: (`c`) => [`Color`](../type-aliases/Color.md) \| `undefined`

Defined in: [storage/image.ts:78](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L78)

Returns the color of a specific channel, or undefined if not available

Channels without a color (neither configured on the image nor returned
here) are colorized with a default color derived from the channel index
(see [ImageUtils.getDefaultChannelColor](../classes/ImageUtils.md#getdefaultchannelcolor)), so that multi-channel image data
without any color information renders as distinguishable channels rather
than as a single white blob; the only channel of single-channel image data
is colorized white instead. Data providers should only return colors that
their image metadata actually specifies, and `undefined` for all other
channels, leaving the choice of default colors to the renderer.

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

[`Color`](../type-aliases/Color.md) \| `undefined`

The channel's color, or `undefined` if not available

***

### getChannelContrastLimits?

> `optional` **getChannelContrastLimits?**: (`c`) => \[`number`, `number`\] \| `undefined`

Defined in: [storage/image.ts:132](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L132)

Returns the contrast limits of a specific channel, or undefined if not available

The renderer scales each channel value linearly between the contrast
limits, clamps the result to `[0, 1]` and multiplies it with the channel's
color. Channels without contrast limits (neither configured on the image
nor returned here) are stretched between quantile-based limits derived
from the channel's histogram, if [ImageData.getChannelHistogram](#getchannelhistogram)
provides one (see [ImageUtils.getDefaultContrastLimits](../classes/ImageUtils.md#getdefaultcontrastlimits)), then over
the data type range declared by [ImageData.getChannelDataTypeRange](#getchanneldatatyperange),
and otherwise over the value range that the data type of their channel data
can hold, as returned by [ImageUtils.getDataTypeRange](../classes/ImageUtils.md#getdatatyperange) (the full
integer range for integer typed arrays, `[0, 1]` for floating-point typed
arrays).

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

\[`number`, `number`\] \| `undefined`

The channel's contrast limits, in the channel's value range, or
`undefined` if not available

***

### getChannelDataTypeRange?

> `optional` **getChannelDataTypeRange?**: (`c`) => \[`number`, `number`\] \| `undefined`

Defined in: [storage/image.ts:111](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L111)

Returns the range the data type of a specific channel can hold, or undefined if not available

The full range of integer channel data of at most 32 bits, e.g.
`[0, 65535]` for unsigned 16-bit samples. Other channel data has no such
range and returns `undefined`.

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

\[`number`, `number`\] \| `undefined`

The data type range, as `[min, max]`, or `undefined` if not
available

***

### getChannelHistogram?

> `optional` **getChannelHistogram?**: (`c`) => [`ImageChannelHistogram`](../type-aliases/ImageChannelHistogram.md) \| `undefined`

Defined in: [storage/image.ts:98](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L98)

Returns the value histogram of a specific channel, or undefined if not available

`hist[i]` counts the channel values that fall into bin `i`, with bins
spread evenly over `range`: the first bin corresponds to the range's lower
bound, the last bin to its upper bound. The histogram may be computed from
a downsampled resolution level. The renderer derives default contrast
limits from the histogram for channels without contrast limits (neither
configured on the image nor returned by
[ImageData.getChannelContrastLimits](#getchannelcontrastlimits), see
[ImageUtils.getDefaultContrastLimits](../classes/ImageUtils.md#getdefaultcontrastlimits)). As the renderer calls this on every
synchronization, implementations should return a precomputed histogram
rather than compute one on each call.

#### Parameters

##### c

`number`

The channel index (0-based)

#### Returns

[`ImageChannelHistogram`](../type-aliases/ImageChannelHistogram.md) \| `undefined`

The channel's histogram, as bin counts and the value range the
bins span, or `undefined` if not available

***

### getChannelName?

> `optional` **getChannelName?**: (`c`) => `string` \| `undefined`

Defined in: [storage/image.ts:55](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L55)

Returns the name of a specific channel, or undefined if not available

#### Parameters

##### c

`number`

#### Returns

`string` \| `undefined`

***

### getChannelOpacity?

> `optional` **getChannelOpacity?**: (`c`) => `number` \| `undefined`

Defined in: [storage/image.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L61)

Returns the opacity of a specific channel, or undefined if not available

#### Parameters

##### c

`number`

#### Returns

`number` \| `undefined`

***

### getChannelVisibility?

> `optional` **getChannelVisibility?**: (`c`) => `boolean` \| `undefined`

Defined in: [storage/image.ts:58](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L58)

Returns the visibility of a specific channel, or undefined if not available

#### Parameters

##### c

`number`

#### Returns

`boolean` \| `undefined`

***

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

#### Inherited from

[`RasterData`](RasterData.md).[`getTileData`](RasterData.md#gettiledata)

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

### getSizeC()

> **getSizeC**(): `number` \| `undefined`

Defined in: [storage/image.ts:40](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L40)

Returns the number of channels in the image, or undefined if not multi-channel

#### Returns

`number` \| `undefined`

***

### getTileSource()

> **getTileSource**(`c?`): `string` \| `object` \| [`CustomTileSource`](CustomTileSource.md)

Defined in: [storage/image.ts:52](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/image.ts#L52)

Returns the tile source of a channel, or the only tile source of image data that is not multi-channel

#### Parameters

##### c?

`number`

The channel index (0-based), required for multi-channel image
data and to be omitted otherwise

#### Returns

`string` \| `object` \| [`CustomTileSource`](CustomTileSource.md)

The tile source, which can be a URL string, a TileSourceConfig
object, or a CustomTileSource object

#### Throws

Error if `c` is omitted for multi-channel image data, if `c` is
passed for image data that is not multi-channel, or if `c` is out of bounds

#### Overrides

[`RasterData`](RasterData.md).[`getTileSource`](RasterData.md#gettilesource)
