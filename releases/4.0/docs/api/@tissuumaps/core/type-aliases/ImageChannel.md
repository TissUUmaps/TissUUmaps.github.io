# Type Alias: ImageChannel

> **ImageChannel** = `object`

Defined in: [model/image.ts:42](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L42)

A channel of a two-dimensional raster image

Channels are only applied to multi-channel image data, as reported by the
image's data provider.

## Properties

### color?

> `optional` **color?**: [`Color`](Color.md)

Defined in: [model/image.ts:79](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L79)

Channel color

Overrides the channel color provided by the image data provider, if any.

#### Default Value

The color reported by the image data provider, or white for
single-channel image data, or a default color for the channel index
otherwise (see [ImageUtils.getDefaultChannelColor](../classes/ImageUtils.md#getdefaultchannelcolor))

***

### contrastLimits?

> `optional` **contrastLimits?**: \[`number`, `number`\]

Defined in: [model/image.ts:91](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L91)

Channel contrast limits, in the channel's image data value range

Overrides the channel contrast limits provided by the image data provider, if any.

#### Default Value

The contrast limits reported by the image data provider, or
limits derived from the channel histogram reported by the image data
provider (see [ImageUtils.getDefaultContrastLimits](../classes/ImageUtils.md#getdefaultcontrastlimits)), or the value
range of the channel's data type

***

### name?

> `optional` **name?**: `string`

Defined in: [model/image.ts:50](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L50)

Channel name

Overrides the channel name provided by the image data provider, if any.

#### Default Value

The name reported by the image data provider, or `undefined`

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/image.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L68)

Channel opacity, in the range [0, 1]

Overrides the channel opacity provided by the image data provider, if any.

#### Default Value

The opacity reported by the image data provider, or `1`

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/image.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L59)

Channel visibility

Overrides the channel visibility provided by the image data provider, if any.

#### Default Value

The visibility reported by the image data provider, or `true`
