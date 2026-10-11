# Interface: RawImage

Defined in: [model/image.ts:97](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L97)

A two-dimensional raster image

## Extends

- [`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md)\<[`RawImageDataSource`](RawImageDataSource.md)\<`string`\>\>

## Properties

### activeChannel?

> `optional` **activeChannel?**: `number`

Defined in: [model/image.ts:124](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L124)

The channel shown in the single-channel view modes (0-based)

#### Default Value

[imageDefaults.activeChannel](../variables/imageDefaults.md#activechannel)

***

### channels?

> `optional` **channels?**: [`ImageChannel`](../type-aliases/ImageChannel.md)[]

Defined in: [model/image.ts:106](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L106)

The channels of the image, indexed by channel

Channels beyond the end of the array, and channels of images whose data is
not multi-channel, use the default values of [ImageChannel](../type-aliases/ImageChannel.md).

***

### channelViewMode?

> `optional` **channelViewMode?**: [`ImageChannelViewMode`](../type-aliases/ImageChannelViewMode.md)

Defined in: [model/image.ts:117](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L117)

How the channels are displayed

In the single-channel modes, only [RawImage.activeChannel](#activechannel) is shown,
whatever the visibility of the channels; the channel colors are kept, and
ignored in grayscale.

#### Default Value

[imageDefaults.channelViewMode](../variables/imageDefaults.md#channelviewmode)

***

### dataSource

> **dataSource**: [`RawImageDataSource`](RawImageDataSource.md)

Defined in: [model/base.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L53)

Data source

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`dataSource`](RawRenderedRasterDataObject.md#datasource)

***

### id

> **id**: `string`

Defined in: [model/base.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L47)

Data object ID

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`id`](RawRenderedRasterDataObject.md#id)

***

### layer

> **layer**: `string`

Defined in: [model/base.ts:173](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L173)

Layer ID

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`layer`](RawRenderedRasterDataObject.md#layer)

***

### name

> **name**: `string`

Defined in: [model/base.ts:50](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L50)

Human-readable data object name

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`name`](RawRenderedRasterDataObject.md#name)

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/base.ts:112](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L112)

Data object opacity, in the range [0, 1]

#### Default Value

[renderedDataObjectDefaults.opacity](../variables/renderedDataObjectDefaults.md#opacity)

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`opacity`](RawRenderedRasterDataObject.md#opacity)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/base.ts:119](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L119)

Transformation from data object space to layer space

#### Default Value

[renderedDataObjectDefaults.transform](../variables/renderedDataObjectDefaults.md#transform)

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`transform`](RawRenderedRasterDataObject.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/base.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L105)

Data object visibility

#### Default Value

[renderedDataObjectDefaults.visibility](../variables/renderedDataObjectDefaults.md#visibility)

#### Inherited from

[`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md).[`visibility`](RawRenderedRasterDataObject.md#visibility)
