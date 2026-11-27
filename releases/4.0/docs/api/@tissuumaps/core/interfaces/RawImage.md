# Interface: RawImage

Defined in: [model/image.ts:98](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L98)

A two-dimensional raster image

## Extends

- [`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md)\<[`RawImageDataSource`](RawImageDataSource.md)\<`string`\>\>

## Properties

### activeChannel?

> `optional` **activeChannel?**: `number`

Defined in: [model/image.ts:125](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L125)

The channel shown in the single-channel view modes (0-based)

#### Default Value

[imageDefaults.activeChannel](../variables/imageDefaults.md#activechannel)

***

### channels?

> `optional` **channels?**: [`ImageChannel`](../type-aliases/ImageChannel.md)[]

Defined in: [model/image.ts:107](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L107)

The channels of the image, indexed by channel

Channels beyond the end of the array, and channels of images whose data is
not multi-channel, use the default values of [ImageChannel](../type-aliases/ImageChannel.md).

***

### channelViewMode?

> `optional` **channelViewMode?**: [`ImageChannelViewMode`](../type-aliases/ImageChannelViewMode.md)

Defined in: [model/image.ts:118](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L118)

How the channels are displayed

In the single-channel modes, only [RawImage.activeChannel](#activechannel) is shown,
whatever the visibility of the channels; the channel colors are kept, and
ignored in grayscale.

#### Default Value

[imageDefaults.channelViewMode](../variables/imageDefaults.md#channelviewmode)

***

### dataSource

> **dataSource**: [`RawImageDataSource`](RawImageDataSource.md)

Defined in: [model/base.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L70)

Data source

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`dataSource`](RawRenderedRasterDataObject.md#datasource)

***

### id

> **id**: `string`

Defined in: [model/base.ts:64](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L64)

Data object ID

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`id`](RawRenderedRasterDataObject.md#id)

***

### layer

> **layer**: `string`

Defined in: [model/base.ts:190](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L190)

Layer ID

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`layer`](RawRenderedRasterDataObject.md#layer)

***

### name

> **name**: `string`

Defined in: [model/base.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L67)

Human-readable data object name

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`name`](RawRenderedRasterDataObject.md#name)

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/base.ts:129](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L129)

Data object opacity, in the range [0, 1]

#### Default Value

[renderedDataObjectDefaults.opacity](../variables/renderedDataObjectDefaults.md#opacity)

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`opacity`](RawRenderedRasterDataObject.md#opacity)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/base.ts:136](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L136)

Transformation from data object space to layer space

#### Default Value

[renderedDataObjectDefaults.transform](../variables/renderedDataObjectDefaults.md#transform)

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`transform`](RawRenderedRasterDataObject.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/base.ts:122](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L122)

Data object visibility

#### Default Value

[renderedDataObjectDefaults.visibility](../variables/renderedDataObjectDefaults.md#visibility)

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`visibility`](RawRenderedRasterDataObject.md#visibility)
