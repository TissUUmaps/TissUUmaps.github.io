# Interface: RawRenderedDataObject\<TRawDataSource\>

Defined in: [model/base.ts:97](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L97)

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

Defined in: [model/base.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L53)

Data source

#### Inherited from

[`RawDataObject`](RawDataObject.md).[`dataSource`](RawDataObject.md#datasource)

***

### id

> **id**: `string`

Defined in: [model/base.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L47)

Data object ID

#### Inherited from

[`RawDataObject`](RawDataObject.md).[`id`](RawDataObject.md#id)

***

### name

> **name**: `string`

Defined in: [model/base.ts:50](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L50)

Human-readable data object name

#### Inherited from

[`RawDataObject`](RawDataObject.md).[`name`](RawDataObject.md#name)

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/base.ts:112](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L112)

Data object opacity, in the range [0, 1]

#### Default Value

[renderedDataObjectDefaults.opacity](../variables/renderedDataObjectDefaults.md#opacity)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/base.ts:119](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L119)

Transformation from data object space to layer space

#### Default Value

[renderedDataObjectDefaults.transform](../variables/renderedDataObjectDefaults.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/base.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L105)

Data object visibility

#### Default Value

[renderedDataObjectDefaults.visibility](../variables/renderedDataObjectDefaults.md#visibility)
