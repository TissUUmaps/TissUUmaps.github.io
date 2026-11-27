# Interface: RawRenderedDataObject\<TRawDataSource\>

Defined in: [model/base.ts:114](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L114)

A data object that is rendered

Which layer(s) a rendered data object is drawn on depends on its kind of
data (see [RawRenderedRasterDataObject](RawRenderedRasterDataObject.md) and
[RawRenderedItemsDataObject](RawRenderedItemsDataObject.md)).

## Extends

- [`RawDataObject`](RawDataObject.md)\<`TRawDataSource`\>

## Extended by

- [`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md)
- [`RawRenderedRasterDataObject`](RawRenderedRasterDataObject.md)

## Type Parameters

### TRawDataSource

`TRawDataSource` *extends* [`RawDataSource`](RawDataSource.md)\<`string`\>

## Properties

### dataSource

> **dataSource**: `TRawDataSource`

Defined in: [model/base.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L70)

Data source

#### Inherited from

[`RawDataObject`](RawDataObject.md).[`dataSource`](RawDataObject.md#datasource)

***

### id

> **id**: `string`

Defined in: [model/base.ts:64](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L64)

Data object ID

#### Inherited from

[`RawDataObject`](RawDataObject.md).[`id`](RawDataObject.md#id)

***

### name

> **name**: `string`

Defined in: [model/base.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L67)

Human-readable data object name

#### Inherited from

[`RawDataObject`](RawDataObject.md).[`name`](RawDataObject.md#name)

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/base.ts:129](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L129)

Data object opacity, in the range [0, 1]

#### Default Value

[renderedDataObjectDefaults.opacity](../variables/renderedDataObjectDefaults.md#opacity)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/base.ts:136](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L136)

Transformation from data object space to layer space

#### Default Value

[renderedDataObjectDefaults.transform](../variables/renderedDataObjectDefaults.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/base.ts:122](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L122)

Data object visibility

#### Default Value

[renderedDataObjectDefaults.visibility](../variables/renderedDataObjectDefaults.md#visibility)
