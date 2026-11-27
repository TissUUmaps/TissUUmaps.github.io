# Function: createRenderedItemsDataObject()

> **createRenderedItemsDataObject**\<`TType`, `TRawDataSource`\>(`rawRenderedItemsDataObject`): [`RenderedItemsDataObject`](../type-aliases/RenderedItemsDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:278](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L278)

Creates a [RenderedItemsDataObject](../type-aliases/RenderedItemsDataObject.md) from a [RawRenderedItemsDataObject](../interfaces/RawRenderedItemsDataObject.md) by applying [renderedItemsDataObjectDefaults](../variables/renderedItemsDataObjectDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

### TRawDataSource

`TRawDataSource` *extends* [`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>

## Parameters

### rawRenderedItemsDataObject

[`RawRenderedItemsDataObject`](../interfaces/RawRenderedItemsDataObject.md)\<`TRawDataSource`\>

The raw rendered items data object

## Returns

[`RenderedItemsDataObject`](../type-aliases/RenderedItemsDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

The complete rendered items data object with the default values of missing or `undefined` properties
