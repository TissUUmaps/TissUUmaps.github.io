# Interface: RawRenderedRasterDataObject\<TRawDataSource\>

Defined in: [model/base.ts:186](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L186)

A rendered data object whose data is a raster (e.g. images, labels)

A raster cannot be split between layers, so it is drawn on a single layer.

## Extends

- [`RawRenderedDataObject`](RawRenderedDataObject.md)\<`TRawDataSource`\>

## Extended by

- [`RawImage`](RawImage.md)
- [`RawLabels`](RawLabels.md)

## Type Parameters

### TRawDataSource

`TRawDataSource` *extends* [`RawDataSource`](RawDataSource.md)\<`string`\>

## Properties

### dataSource

> **dataSource**: `TRawDataSource`

Defined in: [model/base.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L70)

Data source

#### Inherited from

[`RawRenderedDataObject`](RawRenderedDataObject.md).[`dataSource`](RawRenderedDataObject.md#datasource)

***

### id

> **id**: `string`

Defined in: [model/base.ts:64](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L64)

Data object ID

#### Inherited from

[`RawRenderedDataObject`](RawRenderedDataObject.md).[`id`](RawRenderedDataObject.md#id)

***

### layer

> **layer**: `string`

Defined in: [model/base.ts:190](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L190)

Layer ID

***

### name

> **name**: `string`

Defined in: [model/base.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L67)

Human-readable data object name

#### Inherited from

[`RawRenderedDataObject`](RawRenderedDataObject.md).[`name`](RawRenderedDataObject.md#name)

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/base.ts:129](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L129)

Data object opacity, in the range [0, 1]

#### Default Value

[renderedDataObjectDefaults.opacity](../variables/renderedDataObjectDefaults.md#opacity)

#### Inherited from

[`RawRenderedDataObject`](RawRenderedDataObject.md).[`opacity`](RawRenderedDataObject.md#opacity)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/base.ts:136](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L136)

Transformation from data object space to layer space

#### Default Value

[renderedDataObjectDefaults.transform](../variables/renderedDataObjectDefaults.md#transform)

#### Inherited from

[`RawRenderedDataObject`](RawRenderedDataObject.md).[`transform`](RawRenderedDataObject.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/base.ts:122](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L122)

Data object visibility

#### Default Value

[renderedDataObjectDefaults.visibility](../variables/renderedDataObjectDefaults.md#visibility)

#### Inherited from

[`RawRenderedDataObject`](RawRenderedDataObject.md).[`visibility`](RawRenderedDataObject.md#visibility)
