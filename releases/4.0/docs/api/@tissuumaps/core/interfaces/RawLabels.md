# Interface: RawLabels

Defined in: [model/labels.ts:29](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/labels.ts#L29)

A two-dimensional label mask

## Extends

- [`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md)\<[`RawLabelsDataSource`](RawLabelsDataSource.md)\<`string`\>\>

## Properties

### dataSource

> **dataSource**: [`RawLabelsDataSource`](RawLabelsDataSource.md)

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

### labelColor?

> `optional` **labelColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/labels.ts:37](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/labels.ts#L37)

Label color

#### Default Value

[labelsDefaults.labelColor](../variables/labelsDefaults.md#labelcolor)

***

### labelOpacity?

> `optional` **labelOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/labels.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/labels.ts#L51)

Label opacity

#### Default Value

[labelsDefaults.labelOpacity](../variables/labelsDefaults.md#labelopacity)

***

### labelVisibility?

> `optional` **labelVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/labels.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/labels.ts#L44)

Label visibility

#### Default Value

[labelsDefaults.labelVisibility](../variables/labelsDefaults.md#labelvisibility)

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
