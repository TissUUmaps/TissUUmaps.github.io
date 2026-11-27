# Type Alias: ImageChannel

> **ImageChannel** = `object`

Defined in: [model/image.ts:43](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L43)

A channel of a two-dimensional raster image

Channels are only applied to multi-channel image data, as reported by the
image's data provider.

## Properties

### color?

> `optional` **color?**: [`Color`](Color.md)

Defined in: [model/image.ts:80](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L80)

Channel color

Overrides the channel color provided by the image data provider, if any.

#### Default Value

The color reported by the image data provider, or white for
single-channel image data, or a default color for the channel index
otherwise (see [ImageUtils.getDefaultChannelColor](../classes/ImageUtils.md#getdefaultchannelcolor))

***

### contrastLimits?

> `optional` **contrastLimits?**: \[`number`, `number`\]

Defined in: [model/image.ts:92](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L92)

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

Defined in: [model/image.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L51)

Channel name

Overrides the channel name provided by the image data provider, if any.

#### Default Value

The name reported by the image data provider, or `undefined`

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/image.ts:69](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L69)

Channel opacity, in the range [0, 1]

Overrides the channel opacity provided by the image data provider, if any.

#### Default Value

The opacity reported by the image data provider, or `1`

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/image.ts:60](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L60)

Channel visibility

Overrides the channel visibility provided by the image data provider, if any.

#### Default Value

The visibility reported by the image data provider, or `true`
