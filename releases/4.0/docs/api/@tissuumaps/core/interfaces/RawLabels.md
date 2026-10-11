# Interface: RawLabels

Defined in: [model/labels.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/labels.ts#L28)

A two-dimensional label mask

## Extends

- [`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md)\<[`RawLabelsDataSource`](RawLabelsDataSource.md)\<`string`\>\>

## Properties

### dataSource

> **dataSource**: [`RawLabelsDataSource`](RawLabelsDataSource.md)

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

### labelColor?

> `optional` **labelColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/labels.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/labels.ts#L36)

Label color

#### Default Value

[labelsDefaults.labelColor](../variables/labelsDefaults.md#labelcolor)

***

### labelOpacity?

> `optional` **labelOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/labels.ts:50](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/labels.ts#L50)

Label opacity

#### Default Value

[labelsDefaults.labelOpacity](../variables/labelsDefaults.md#labelopacity)

***

### labelVisibility?

> `optional` **labelVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/labels.ts:43](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/labels.ts#L43)

Label visibility

#### Default Value

[labelsDefaults.labelVisibility](../variables/labelsDefaults.md#labelvisibility)

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
