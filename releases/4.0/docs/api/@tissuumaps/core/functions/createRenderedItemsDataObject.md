# Function: createRenderedItemsDataObject()

> **createRenderedItemsDataObject**\<`TType`, `TRawDataSource`\>(`rawRenderedItemsDataObject`): [`RenderedItemsDataObject`](../type-aliases/RenderedItemsDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:261](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L261)

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

The complete rendered items data object with default values applied
