# Class: ImageUtils

Defined in: [utils/ImageUtils.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L20)

Utility methods for resolving and defaulting image channel settings

## Constructors

### Constructor

> **new ImageUtils**(): `ImageUtils`

#### Returns

`ImageUtils`

## Methods

### getActiveChannel()

> `static` **getActiveChannel**(`image`, `sizeC`): `number`

Defined in: [utils/ImageUtils.ts:121](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L121)

Returns the channel an image shows in the single-channel view modes

The image's active channel is bounded to the channels the data has, so
that an image kept from data with more channels still shows one.

#### Parameters

##### image

[`Image`](../type-aliases/Image.md)

The image

##### sizeC

`number`

The number of channels the image data has

#### Returns

`number`

The channel index (0-based)

***

### getChannelColor()

> `static` **getChannelColor**(`image`, `data`, `c`): [`Color`](../type-aliases/Color.md)

Defined in: [utils/ImageUtils.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L34)

Returns the color of a channel

The color configured on the image wins, then the one its data states, and
the only channel of single-channel image data is white, as a grayscale
image rather than in the red the index-based default would give it (see
[ImageUtils.getDefaultChannelColor](#getdefaultchannelcolor)).

#### Parameters

##### image

[`Image`](../type-aliases/Image.md)

The image

##### data

[`ImageData`](../interfaces/ImageData.md)

The image data providing the channel

##### c

`number`

The channel index (0-based)

#### Returns

[`Color`](../type-aliases/Color.md)

The channel's color

***

### getChannelContrastLimits()

> `static` **getChannelContrastLimits**(`image`, `data`, `c`): \[`number`, `number`\] \| `undefined`

Defined in: [utils/ImageUtils.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L59)

Returns the contrast limits of a channel

The limits configured on the image win over those its data states.
Channels with neither are stretched between quantile-based limits derived
from their histogram (see [ImageUtils.getDefaultContrastLimits](#getdefaultcontrastlimits)), if
the data provides one, and otherwise over the range the data declares for
their data type.

#### Parameters

##### image

[`Image`](../type-aliases/Image.md)

The image

##### data

[`ImageData`](../interfaces/ImageData.md)

The image data providing the channel

##### c

`number`

The channel index (0-based)

#### Returns

\[`number`, `number`\] \| `undefined`

The channel's contrast limits, or `undefined` if the data
provides neither limits, a histogram nor a data type range

***

### getChannelOpacity()

> `static` **getChannelOpacity**(`image`, `data`, `c`): `number`

Defined in: [utils/ImageUtils.ts:107](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L107)

Returns the opacity of a channel

The opacity configured on the image wins over the one its data states,
and channels with neither are fully opaque.

#### Parameters

##### image

[`Image`](../type-aliases/Image.md)

The image

##### data

[`ImageData`](../interfaces/ImageData.md)

The image data providing the channel

##### c

`number`

The channel index (0-based)

#### Returns

`number`

The channel's opacity, in `[0, 1]`

***

### getChannelVisibility()

> `static` **getChannelVisibility**(`image`, `data`, `c`): `boolean`

Defined in: [utils/ImageUtils.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L86)

Returns the visibility of a channel

The visibility configured on the image wins over the one its data states,
and channels with neither are visible.

#### Parameters

##### image

[`Image`](../type-aliases/Image.md)

The image

##### data

[`ImageData`](../interfaces/ImageData.md)

The image data providing the channel

##### c

`number`

The channel index (0-based)

#### Returns

`boolean`

Whether the channel is visible

***

### getDataTypeRange()

> `static` **getDataTypeRange**(`values`): \[`number`, `number`\]

Defined in: [utils/ImageUtils.ts:275](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L275)

Returns the value range that the type of the given array can hold, for use
as default contrast limits of image channel data

Integer typed arrays span their full integer range, floating-point typed
arrays are taken to hold normalized values in `[0, 1]`.

#### Parameters

##### values

[`TypedArray`](../type-aliases/TypedArray.md)

The array whose value range to return

#### Returns

\[`number`, `number`\]

The value range, as `[min, max]`

***

### getDefaultChannelColor()

> `static` **getDefaultChannelColor**(`c`): [`Color`](../type-aliases/Color.md)

Defined in: [utils/ImageUtils.ts:143](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L143)

Returns a default color for a channel, for use when no channel colors are
known

The first six channels map to red, green, blue, yellow, cyan, and magenta.
Further channels are assigned hues 128 degrees apart, with saturation and
brightness decreasing by 0.05 every ten channels. Channel indices wrap
around after 100, so that saturation and brightness stay above 0.5.
Colors are not guaranteed to be unique.

Resembles `ImageChannel.getDefaultChannelColor` in QuPath v0.7.0, except
that yellow, cyan, and magenta have been replaced by pure versions (255
for the two highest components, 0 for the lowest), and that QuPath wraps
after 360 channels instead, yielding dim colors and eventually black.

#### Parameters

##### c

`number`

The channel index, a non-negative integer

#### Returns

[`Color`](../type-aliases/Color.md)

The default color for the channel

***

### getDefaultContrastLimits()

> `static` **getDefaultContrastLimits**(`histogram`, `qlow?`, `qhigh?`): \[`number`, `number`\]

Defined in: [utils/ImageUtils.ts:197](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L197)

Returns quantile-based contrast limits derived from a channel histogram,
for use as default contrast limits when no contrast limits are known

The histogram's `hist[i]` counts the values that fall into bin `i`, with
bins spread evenly over `range`: bin `0` maps to the range's lower bound,
the last bin to its upper bound, and each bin in between to
`vmin + i / (n - 1) * (vmax - vmin)` (see
[MathUtils.computeHistogram](MathUtils.md#computehistogram)). The lower limit is the value of the
first bin at which the cumulative count from the bottom reaches the
fraction `qlow` of the total count, the upper limit is the value of the
first bin at which the cumulative count from the top reaches the fraction
`1 - qhigh`; i.e., the fraction `qlow` of the values is clipped at the
bottom and the fraction `1 - qhigh` at the top. Only non-empty bins are
considered, so quantiles of `0` and `1` yield the first and last non-empty
bin, respectively. Values that fall into the same bin cannot be told
apart, so the limits are only as precise as the bins.

Histograms with fewer than two bins, histograms whose counts sum to zero
and degenerate ranges return `range` as is. So do histograms whose clipped
limits would not be ascending (upper bin at or below lower bin), which
happens if more than `qhigh - qlow` of the values fall into a single bin,
e.g. for sparse channels that are mostly background, or if `qhigh` is
below `qlow`, and a `qlow` above `1`, which no bin can reach.

#### Parameters

##### histogram

[`ImageChannelHistogram`](../type-aliases/ImageChannelHistogram.md)

The channel histogram, as bin counts and value range

##### qlow?

`number` = `0.01`

The quantile of the lower limit, in `[0, 1]`

##### qhigh?

`number` = `0.999`

The quantile of the upper limit, in `[0, 1]`, above `qlow`

#### Returns

\[`number`, `number`\]

The contrast limits, as `[low, high]` in the histogram's value
range, with `low < high` unless the range is degenerate

***

### getIntegerTypeRange()

> `static` **getIntegerTypeRange**(`bits`, `signed`): \[`number`, `number`\]

Defined in: [utils/ImageUtils.ts:259](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ImageUtils.ts#L259)

Returns the value range that an integer type can hold

#### Parameters

##### bits

`number`

The number of bits per value, at most 32

##### signed

`boolean`

Whether the type is signed

#### Returns

\[`number`, `number`\]

The value range, as `[min, max]`
