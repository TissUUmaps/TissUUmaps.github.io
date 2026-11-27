# Function: createRenderedDataObject()

> **createRenderedDataObject**\<`TType`, `TRawDataSource`\>(`rawRenderedDataObject`): [`RenderedDataObject`](../type-aliases/RenderedDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:161](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L161)

Creates a [RenderedDataObject](../type-aliases/RenderedDataObject.md) from a [RawRenderedDataObject](../interfaces/RawRenderedDataObject.md) by applying [renderedDataObjectDefaults](../variables/renderedDataObjectDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

### TRawDataSource

`TRawDataSource` *extends* [`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>

## Parameters

### rawRenderedDataObject

[`RawRenderedDataObject`](../interfaces/RawRenderedDataObject.md)\<`TRawDataSource`\>

The raw rendered data object

## Returns

[`RenderedDataObject`](../type-aliases/RenderedDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

The complete rendered data object with the default values of missing or `undefined` properties
