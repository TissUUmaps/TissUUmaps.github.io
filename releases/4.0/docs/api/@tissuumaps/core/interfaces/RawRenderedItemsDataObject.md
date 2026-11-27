# Interface: RawRenderedItemsDataObject\<TRawDataSource\>

Defined in: [model/base.ts:242](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L242)

A rendered data object whose data consists of items (e.g. points, shapes)

Items can be distributed across layers, so the layer may be given per item.
Tables consist of items as well, but are not rendered, and hence are plain
[RawDataObject](RawDataObject.md)s.

## Extends

- [`RawRenderedDataObject`](RawRenderedDataObject.md)\<`TRawDataSource`\>

## Extended by

- [`RawPoints`](RawPoints.md)
- [`RawShapes`](RawShapes.md)

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

> **layer**: `string` \| [`TableColumnRef`](../type-aliases/TableColumnRef.md)

Defined in: [model/base.ts:253](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L253)

Layer ID

Can be specified as:
- An ID of an existing Layer
- A table column holding the layer ID values for each item, of the
  object's own table unless it names another

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
